import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="py-4 border-b border-slate-900/10 dark:border-slate-300/10 mx-4 lg:mx-0">
          <header className="relative flex items-center max-w-4xl m-auto">
            <div className="font-sans text-xl font-semibold text-slate-500">
              飞书妙秘 - 小A
            </div>
          </header>
        </div> */}
        <div className="flex items-center justify-center my-8">
          <Image
            className="rounded mr-2"
            src="/logo.jpeg"
            width={60}
            height={60}
            alt="logo"
          />
          <h1 className="font-mono text-4xl">FeishuMinutesGPT</h1>
        </div>

        <main className="m-auto max-w-5xl">{children}</main>
      </body>
    </html>
  );
}
