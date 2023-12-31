
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./_conponents/common/AuthProviders";
import ThemeRegistry from "./_conponents/ThemeRegistry/ThemeRegistry";
import ReduxProvider from "./_conponents/common/ReduProvider";




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
        <ReduxProvider>
          <AuthProvider>
            <ThemeRegistry>
              {children}
            </ThemeRegistry>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}