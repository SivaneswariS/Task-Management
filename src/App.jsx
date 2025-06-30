import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";

function App() {
  return (
    <div className="min-h-screen bg-purple-400">
      <div className="p-6 mx-auto max-w-2xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


