import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Milestone Master",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="flex flex-col lg:flex-row min-h-screen bg-light-pink dark:bg-dark-blue">
            <Sidebar />
            <div className="flex-1">
              <Header />
              <div className="mx-4">{children}</div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
