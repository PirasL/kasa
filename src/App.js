import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import RoomPage from "./pages/RoomPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/room/:id" element={<RoomPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
