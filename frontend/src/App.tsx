import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NameList from "./components/name/NameList";
import NameDetail from "./components/name/NameDetail";
import NameForm from "./components/name/NameForm";
import NotFound from "./components/NotFound";
import { ThemeProvider } from "./store/ThemeContext";
import Layout from "./components/Layout";

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/names" element={<NameList />} />
            <Route path="/names/new" element={<NameForm />} />
            <Route path="/names/:slug" element={<NameDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  )
}

export default App
