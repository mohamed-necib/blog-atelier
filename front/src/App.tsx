import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="about" element={<h1>About</h1>} />
          <Route path="blog" element={<h1>Blog</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
