import "./styles/date.css";
import LandingPage from "./pages/landingPage";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/dateweb/src/pages/login.js" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
