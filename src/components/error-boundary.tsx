import { useRouteError } from "react-router-dom";
import { Button } from "./ui/button";

export default function ErrorBoundary() {
  const error = useRouteError() as Error;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
      <div className="text-center">
        <h1 className="text-4xl font-light mb-4 text-[#2c3e50]">Oops!</h1>
        <p className="text-[#95a5a6] mb-8">
          {error?.message || "Sorry, an unexpected error has occurred."}
        </p>
        <Button
          onClick={() => (window.location.href = "/")}
          className="bg-[#ab233a] hover:bg-[#811a2c] text-white"
        >
          Go Home
        </Button>
      </div>
    </div>
  );
}
