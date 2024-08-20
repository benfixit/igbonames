import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NameList from "./components/name/NameList";
import NameDetail from "./components/name/NameDetail";
import NameForm from "./components/name/NameForm";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/names" element={<NameList />} />
        <Route path="/names/new" element={<NameForm />} />
        <Route path="/names/:slug" element={<NameDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
