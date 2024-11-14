import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import AdDetails from "./pages/AdDetails";
import Category from "./pages/Category";
import AdEditor from "./pages/AdEditor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ad/:id" element={<AdDetails />} />
          <Route path="ad/:id/edit" element={<AdEditor />} />
          <Route path="category/:category" element={<Category onClick={() => {}} />} />
          <Route path="ad/new" element={<AdEditor />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
