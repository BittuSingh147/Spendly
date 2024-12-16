import Header from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spendly",
  description: "Wealth Tracking App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors/>
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center">
              <p
                className="text-3xl font-extrabold bg-gradient-to-br 
                 from-purple-500 via-pink-500 to-yellow-500 
                 text-transparent bg-clip-text
                 drop-shadow-[3px_3px_4px_rgba(0,0,0,0.3)] 
                 hover:drop-shadow-[5px_5px_6px_rgba(0,0,0,0.4)]
                 transition-all duration-300 ease-in-out"
              >
                🚀 Made by Bittu Singh
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
