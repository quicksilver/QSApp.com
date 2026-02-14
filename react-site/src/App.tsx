import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "@/components/Layout";
import { LanguageRoute } from "@/components/LanguageRoute";
import { Home } from "@/pages/Home";
import { Plugins } from "@/pages/Plugins";
import { Donate } from "@/pages/Donate";
import { Support } from "@/pages/Support";
import { FAQ } from "@/pages/FAQ";
import { QuicksilverVsAlfred } from "@/pages/QuicksilverVsAlfred";
import { NotFound } from "@/pages/NotFound";

const APP_BASE_PATH = "/"

// Define all page routes
const pageRoutes = [
  { path: "", element: <Home /> },
  { path: "plugins", element: <Plugins /> },
  { path: "donate", element: <Donate /> },
  { path: "support", element: <Support /> },
  { path: "faq", element: <FAQ /> },
  { path: "quicksilver-vs-alfred", element: <QuicksilverVsAlfred /> },
];

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={APP_BASE_PATH}>
        <Routes>
          {/* Default English routes (no prefix) */}
          <Route path="/" element={<LanguageRoute lang="en"><Layout /></LanguageRoute>}>
            {pageRoutes.map(({ path, element }) => (
              <Route key={path || "index"} index={path === ""} path={path || undefined} element={element} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Chinese routes with /zh-cn prefix */}
          <Route path="/zh-cn" element={<LanguageRoute lang="zh"><Layout /></LanguageRoute>}>
            {pageRoutes.map(({ path, element }) => (
              <Route key={path || "index"} index={path === ""} path={path || undefined} element={element} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
