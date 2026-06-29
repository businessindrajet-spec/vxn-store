import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vxn Store - Buy and sell real businesses",
  description: "A premium marketplace for SaaS, agencies, e-commerce and media businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
