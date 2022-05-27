import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CardChoosePage from "../pages/CardChoosePage";
import CardPage from "../pages/CardPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="play" element={<CardChoosePage />} />
        <Route path="/play/:id" element={<CardPage />} />
      </Routes>
      {/* <Routes>
        <Route path="play" element={<CardChoosePage />}>
          <Route path=":id" element={<CardPage />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/play/:id" element={<CardPage />} />
      </Routes> */}
    </BrowserRouter>
  );
};

export default Router;
