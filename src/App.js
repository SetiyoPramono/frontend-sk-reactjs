import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
import LadingPages from "./pages/LadingPages";
import Produk from "./pages/Produk";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={ <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LadingPages />} />
        <Route path="/produk" element={<Produk />} />
      </Routes>
    </Router>
  );
}

export default App;
