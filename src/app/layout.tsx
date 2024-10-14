import { JetBrains_Mono } from "next/font/google"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/ui/header";
import PageTransition from "@/components/ui/PageTransition";
import { StairTransition } from "@/components/ui/stairTransition";
import Services from "./services/page";


const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'] ,weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
         
        </PageTransition>

      </body>
    </html>
  );
}
