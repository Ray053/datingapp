import "./styles/date.css";
import LandingPage from "./pages/landingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/dateweb/src/pages/register.js" element={<Register />} />
        <Route path="/dateweb/src/pages/login.js" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
