import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepages/Homepage";
import Shoppages from "./pages/Shoppages/Shoppages";
import ShoePage from "./pages/Shoepages/ShoePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shoppages />} />
          <Route path="/shoe/:id" element={<ShoePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
