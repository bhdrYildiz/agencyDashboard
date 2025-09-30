import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Acenta Dashboard",
  description: "Turizm acenta yönetim sistemi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
