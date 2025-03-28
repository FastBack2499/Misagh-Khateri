import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Misagh Khateri",
  description: "Misagh Khateri Financial Advisor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
