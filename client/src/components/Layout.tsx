import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Global Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
