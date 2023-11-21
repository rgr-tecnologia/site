import { Theme } from "@/themes/Theme";
import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollTopFab } from "@/components/ScrollTopFab";

export const metadata: Metadata = {
  title: "RGR",
  description: "Site RGR",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <body>
        <Theme>
          <Header />
          {children}
          <ScrollTopFab />
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
