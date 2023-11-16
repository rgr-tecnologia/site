import "./globals.css";
import type { Metadata } from "next";
import { Saira } from "next/font/google";

const saira = Saira({ subsets: ["latin"] });

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
      <body className={saira.className}>{children}</body>
    </html>
  );
}
