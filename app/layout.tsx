import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Tejas Rawool | Developer Portfolio",
  description: "Futuristic developer portfolio for Tejas Rawool, focused on AI, full-stack development, and open-source work.",
  openGraph: {
    title: "Tejas Rawool | Developer Portfolio",
    description: "AI developer portfolio with projects, skills, achievements, and contact information.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
