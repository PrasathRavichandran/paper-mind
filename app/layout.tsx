import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/nav-bar";
import { AuthProvider } from "@/components/auth-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Papermind",
  description:
    "Upload, chat, and extract insights from your PDFs effortlessly. Let AI turn your documents into conversations!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            `${inter.variable} antialiased`,
            "font-sans min-h-screen"
          )}
        >
          <ThemeProvider
            attribute={"class"}
            defaultTheme={"light"}
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
