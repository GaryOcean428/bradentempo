import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";
import RootLayout from "./components/layout/root-layout";
import ErrorBoundary from "./components/error-boundary";

const Home = lazy(() => import("@/pages"));
const About = lazy(() => import("@/pages/about"));
const Services = lazy(() => import("@/pages/services"));
const Contact = lazy(() => import("@/pages/contact"));
const NotFound = lazy(() => import("@/pages/not-found"));
const FindApprenticeship = lazy(() => import("@/pages/find-apprenticeship"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-[#95a5a6]">Loading...</p>
        </div>
      }
    >
      {/* Tempo routes need to be first */}
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}

      <Routes>
        <Route
          path="/"
          element={<RootLayout />}
          errorElement={<ErrorBoundary />}
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="find-apprenticeship" element={<FindApprenticeship />} />
          {/* Add Tempo route before catch-all */}
          {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
