import { useLocation } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import  axios  from 'axios'
import "./App.css";

axios.get("http://localhost:8000/api")
.then((res) => console.log(res))


function App() {
  const location = useLocation();
  const loginUrl = location.pathname === "/login" ? "/" : "/login";
  return (
    <div>
      <div className="title">Project</div>
      <Link to={loginUrl}>Login</Link>
      <Outlet />
    </div>
  );
}

export default App;
