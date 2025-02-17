import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
      <div className="text-center">
        <h1 className="text-4xl font-light mb-4 text-[#2c3e50]">404</h1>
        <p className="text-[#95a5a6] mb-8">Page not found</p>
        <Button asChild className="bg-[#ab233a] hover:bg-[#811a2c] text-white">
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
