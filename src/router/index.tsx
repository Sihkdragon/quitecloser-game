import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CardChoosePage from "../pages/CardChoosePage";
import CardPage from "../pages/CardPage";
import AllCardPage from "../pages/AllCardPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="play" element={<CardChoosePage />} />
        <Route path="/play/:id" element={<CardPage />} />
        <Route path="/all" element={<AllCardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
