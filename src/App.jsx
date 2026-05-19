import { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import SplashScreen from "./components/SplashScreen";
import LogoSplash from "./components/LogoSplash";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/HomePage"));
const DmitPage = lazy(() => import("./pages/DmitPage"));
const ParentingPage = lazy(() => import("./pages/ParentingPage"));
const CareerPage = lazy(() => import("./pages/CareerPage"));
const BlogListPage = lazy(() => import("./pages/BlogListPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isInitial, setIsInitial] = useState(true);
  const [switching, setSwitching] = useState(false);
  const { pathname } = useLocation();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Synchronous state derivation on route changes to prevent 1-frame flashes
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (!isInitial) {
      setSwitching(true);
    }
  }

  // Eagerly prefetch dynamic route chunks during the 7s splash screen to ensure instantaneous page mounting
  useEffect(() => {
    // Fire off asynchronous imports to pre-cache the chunks in the browser thread
    import("./pages/HomePage").catch(() => {});
    import("./pages/DmitPage").catch(() => {});
    import("./pages/ParentingPage").catch(() => {});
    import("./pages/CareerPage").catch(() => {});
    import("./pages/BlogListPage").catch(() => {});
    import("./pages/BlogDetailPage").catch(() => {});
    import("./pages/FaqPage").catch(() => {});
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0 });
      window.lenis?.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return (
    <>
      {/* Initial load full splash screen */}
      {loading && (
        <SplashScreen onComplete={() => { setLoading(false); setIsInitial(false); }} />
      )}

      {/* Intermediate route switching loader */}
      {switching && (
        <LogoSplash onComplete={() => setSwitching(false)} />
      )}

      {/* Main website — fades in smoothly after initial splash exits */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            key="site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SmoothScroll>
              <div className="relative min-h-screen w-full font-sans bg-white selection:bg-purple-200 selection:text-dark-lavender">
                
                {/* Global Navigation Header */}
                <Navbar />

                {/* Main Dynamic Routing Panel */}
                <Suspense fallback={null}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dmit" element={<DmitPage />} />
                    <Route path="/parenting" element={<ParentingPage />} />
                    <Route path="/career" element={<CareerPage />} />
                    <Route path="/blog" element={<BlogListPage />} />
                    <Route path="/blog/:slug" element={<BlogDetailPage />} />
                    <Route path="/faq" element={<FaqPage />} />
                  </Routes>
                </Suspense>

                {/* Global Utilities */}
                <ScrollToTop />
              </div>
            </SmoothScroll>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
