import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../contexts/theme-provider";
import TopNav from "@/components/ui/nav/top-nav";
import { ResumeProvider } from "@/contexts/resumeContext";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  //src: "./fonts/ravi-100.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  //src: "./fonts/ravi-800.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ResumeProvider>
              <TopNav />
              <div className="w-screen">{children}</div>
            </ResumeProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
