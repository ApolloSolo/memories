import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Posts from "./Pages/Posts";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main className="h-[calc(screen-64px)] w-full bg-black">
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="posts" element={<Posts />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
