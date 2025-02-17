import { Outlet } from "react-router-dom";
import Header from "./header";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
