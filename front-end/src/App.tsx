import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <div className="title">Project</div>
      <Link to="/user">Login</Link>
      <Outlet />
    </div>
  );
}

export default App;
