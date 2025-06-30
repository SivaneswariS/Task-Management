import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="mb-4 flex space-x-4">
      <Link to="/">Home</Link>
      <Link to="/create">Create Task</Link>
    </nav>
  );
}
