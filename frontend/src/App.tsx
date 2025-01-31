import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NameDetail from "./components/name/NameDetail";
import NameForm from "./components/name/NameForm";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import { ThemeProvider } from "./store/ThemeContext";
import { NamesProvider } from "./store/NamesContext";

const App = () => {
  return (
    <ThemeProvider>
      <NamesProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/names/new" element={<NameForm />} />
              <Route path="/names/:slug" element={<NameDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </NamesProvider>
    </ThemeProvider>
  )
}

export default App
