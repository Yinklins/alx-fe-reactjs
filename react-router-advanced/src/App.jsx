// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost"; // ✅ Make sure this file exists
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        {/* ✅ Dynamic Route for Blog Posts */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Profile (can include nested/protected routes) */}
        <Route path="/profile/*" element={<Profile />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
