import { Inter } from "next/font/google";
import "./globals.css";

import ToastProvider from "./hooks/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ICON x ETIMS",
  description: "ETIMS fully intergrated software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
