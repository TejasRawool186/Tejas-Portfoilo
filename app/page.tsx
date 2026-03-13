import { About } from "@/components/about";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { GithubStats } from "@/components/github-stats";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { SiteShell } from "@/components/site-shell";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <SiteShell>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <GithubStats />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </SiteShell>
  );
}
