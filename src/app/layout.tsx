import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Footer from "~/components/footer";

export const metadata = {
  title: "Bee.dev",
  description: "Projects, blog, and more from Bee.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} dark`}>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#100a18] to-[#131431] text-indigo-200">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
