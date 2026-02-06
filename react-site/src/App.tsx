import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Plugins } from "@/pages/Plugins";
import { Donate } from "@/pages/Donate";
import { Support } from "@/pages/Support";
import { FAQ } from "@/pages/FAQ";
import { NotFound } from "@/pages/NotFound";

const APP_BASE_PATH = "/shad/"

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={APP_BASE_PATH}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="plugins" element={<Plugins />} />
            <Route path="donate" element={<Donate />} />
            <Route path="support" element={<Support />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
