import "@/app/globals.css";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header/>
        
        <main className="min-h-screen flex flex-col items-center justify-center text-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
