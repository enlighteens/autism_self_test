import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Autism Self-Assessment",
  description:
    "Answer 20 yes/no questions to understand autistic traits and get a summary you can discuss with a professional."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <h1 className="site-title">Autism Self-Assessment</h1>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>Use this self-assessment as a conversation starter with a qualified professional.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
