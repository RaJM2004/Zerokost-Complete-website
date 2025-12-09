import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold font-display mb-4">
            <span className="bg-gradient-ai bg-clip-text text-transparent">404</span>
          </h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-foreground/60 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            style={{
              background: 'var(--gradient-ai)',
              boxShadow: 'var(--glow-cyan-strong)',
              display: 'inline-block'
            }}
            className="px-8 py-3 rounded-lg font-semibold text-black hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
