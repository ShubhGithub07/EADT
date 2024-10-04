import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "@/styles/globals.css";

export const metadata = {
  title: "QognifyAI - Personalized Learning Platform",
  description: "AI-powered personalized learning platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
