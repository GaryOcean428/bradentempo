import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "@/components/ui/logo";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="hover:opacity-90 transition-opacity">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-[#2c3e50] hover:text-[#ab233a] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#2c3e50] hover:text-[#ab233a] transition-colors"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-[#2c3e50] hover:text-[#ab233a] transition-colors"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-[#2c3e50] hover:text-[#ab233a] transition-colors"
          >
            Contact
          </Link>
        </nav>
        <Button
          variant="outline"
          className="hidden md:inline-flex border-[#cbb26a] text-[#cbb26a] hover:bg-[#cbb26a] hover:text-white"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}
