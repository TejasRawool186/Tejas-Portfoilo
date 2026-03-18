import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Tejas Rawool | Bauhaus Developer Portfolio",
  description: "Bauhaus-inspired developer portfolio for Tejas Rawool, focused on AI products, full-stack development, and bold structural UI.",
  openGraph: {
    title: "Tejas Rawool | Bauhaus Developer Portfolio",
    description: "Bauhaus-inspired AI developer portfolio with projects, skills, writing, and contact information.",
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
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
