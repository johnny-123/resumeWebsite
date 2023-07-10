import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomeComponent from "./components/home-component";
import AboutComponent from "./components/about-component";
import "./styles/style.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponent />} />
          <Route path="about" element={<AboutComponent />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
