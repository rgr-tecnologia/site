import { Theme } from "@/themes/Theme";
import "./globals.css";
import type { Metadata } from "next";

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
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
