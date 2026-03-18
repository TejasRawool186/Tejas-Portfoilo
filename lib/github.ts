export const GITHUB_USERNAME = "TejasRawool186";

export type GitHubContributionDay = {
  date: string;
  count: number;
  level: number;
  dayIndex: number;
  weekIndex: number;
  tooltip: string;
};

export type GitHubPortfolioStats = {
  totalRepos: number;
  totalStars: number;
  totalCommits: number;
  totalContributions: number;
  contributions: GitHubContributionDay[];
  profileUrl: string;
};

async function githubText(url: string) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Codex-Portfolio",
    },
    next: { revalidate: 21600 },
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status}`);
  }

  return response.text();
}

async function fetchRepoSummary(username: string) {
  const repoNames = new Set<string>();
  let totalStars = 0;
  let page = 1;

  while (true) {
    const html = await githubText(`https://github.com/${username}?tab=repositories&page=${page}`);
    const pageRepoMatches = Array.from(
      html.matchAll(new RegExp(`href="/${username}/([^"]+)"[^>]*itemprop="name codeRepository"`, "g")),
    );

    if (pageRepoMatches.length === 0) {
      break;
    }

    for (const match of pageRepoMatches) {
      repoNames.add(match[1]);
    }

    const starMatches = html.matchAll(
      new RegExp(`href="/${username}/[^/"]+/stargazers"[^>]*>[\\s\\S]*?([\\d,]+)\\s*</a>`, "g"),
    );

    for (const match of starMatches) {
      totalStars += Number(match[1].replace(/,/g, ""));
    }

    page += 1;
  }

  return {
    totalRepos: repoNames.size,
    totalStars,
  };
}

async function fetchContributionCalendar(username: string) {
  const html = await githubText(`https://github.com/users/${username}/contributions`);
  const totalMatch = html.match(/<h2[^>]*>\s*([\d,]+)\s+contributions?\s+in the last year\s*<\/h2>/i);
  const totalContributions = totalMatch ? Number(totalMatch[1].replace(/,/g, "")) : 0;
  const contributions: GitHubContributionDay[] = [];
  const cellRegex = /data-date="([^"]+)" id="contribution-day-component-([0-9]+)-([0-9]+)" data-level="([^"]+)"[\s\S]*?<tool-tip[^>]*>\s*([^<]+)\s*<\/tool-tip>/g;

  for (const match of html.matchAll(cellRegex)) {
    const tooltip = match[5].trim();
    const countMatch = tooltip.match(/([\d,]+) contribution/i);

    contributions.push({
      date: match[1],
      dayIndex: Number(match[2]),
      weekIndex: Number(match[3]),
      level: Number(match[4]),
      count: countMatch ? Number(countMatch[1].replace(/,/g, "")) : 0,
      tooltip,
    });
  }

  return {
    totalContributions,
    contributions,
  };
}

export async function getGitHubPortfolioStats(): Promise<GitHubPortfolioStats> {
  try {
    const [repoSummary, contributionCalendar] = await Promise.all([
      fetchRepoSummary(GITHUB_USERNAME),
      fetchContributionCalendar(GITHUB_USERNAME),
    ]);

    return {
      totalRepos: repoSummary.totalRepos,
      totalStars: repoSummary.totalStars,
      totalCommits: contributionCalendar.totalContributions,
      totalContributions: contributionCalendar.totalContributions,
      contributions: contributionCalendar.contributions,
      profileUrl: `https://github.com/${GITHUB_USERNAME}/`,
    };
  } catch {
    return {
      totalRepos: 35,
      totalStars: 1,
      totalCommits: 314,
      totalContributions: 314,
      contributions: [],
      profileUrl: `https://github.com/${GITHUB_USERNAME}/`,
    };
  }
}
