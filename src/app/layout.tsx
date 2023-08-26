import "./globals.css";
import "../sass/main.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alvin Okoro",
  description: "Senior Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
