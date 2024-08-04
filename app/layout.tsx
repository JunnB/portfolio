import type { Metadata } from "next";
import { Fredoka, Happy_Monkey } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const happyMonkey = Happy_Monkey({ 
  subsets: ["latin"], 
  weight: "400",
  variable: '--font-happy-monkey',
});

const fredoka = Fredoka({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-fredoka',
});

export const metadata: Metadata = {
  title: "Portfolio de Développeur Junior",
  description: "Découvrez mon portfolio de développeur junior, présentant mes compétences, projets et expériences dans le domaine du développement web.",
  keywords: "développeur junior, portfolio, projets web, compétences en programmation",
  authors: { name: "Junior Bernard" },
  openGraph: {
    title: "Portfolio de Développeur Junior",
    description: "Explorez mes projets et compétences en développement web",
    type: "website",
    url: "https://votre-portfolio.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio de Développeur Junior",
    description: "Découvrez mes réalisations en tant que développeur web junior",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${happyMonkey.variable} ${fredoka.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <StairTransition />
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}