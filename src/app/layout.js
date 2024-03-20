import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavigationBar from "@/components/Navigation/Navigation Bar/NavigationBar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Business Record</title>
        <link rel="icon" href="/main-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={cn(
          "min-h-screen p-4 flex justify-between bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
