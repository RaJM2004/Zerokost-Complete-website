import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Customers from "./pages/Customers";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Defence from "./pages/Defence";
import AIOverview from "./pages/AIOverview";
import AIDetail from "./pages/AIDetail";
import ContactPage from "./pages/ContactPage";
import ConsultingOverview from "./pages/ConsultingOverview";
import ConsultingDetail from "./pages/ConsultingDetail";
import IndustriesOverview from "./pages/IndustriesOverview";
import IndustriesDetail from "./pages/IndustriesDetail";
import AboutOverview from "./pages/AboutOverview";
import AboutDetail from "./pages/AboutDetail";
import ScrollToTop from "@/components/ScrollToTop";

// Using HashRouter for static hosting environments (like Hostinger)
// so client-side routes work without server-side rewrite rules.

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/customers" element={<Customers />} />
      <Route path="/products" element={<Products />} />
      <Route path="/defence" element={<Defence />} />
          <Route path="/product/:productName" element={<ProductDetail />} />
          <Route path="/ai" element={<AIOverview />} />
          <Route path="/ai/:slug" element={<AIDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/consulting" element={<ConsultingOverview />} />
          <Route path="/consulting/:slug" element={<ConsultingDetail />} />
          <Route path="/industries" element={<IndustriesOverview />} />
          <Route path="/industries/defence" element={<Defence />} />
          <Route path="/industries/:slug" element={<IndustriesDetail />} />
          <Route path="/about" element={<AboutOverview />} />
          <Route path="/about/:slug" element={<AboutDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
