import { useLocation } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { useQuery } from "react-query"
import { getUsers } from "./query-functions/get-users";
import "./App.css";

function App() {
  const location = useLocation();
  const { data, isLoading, isError } = useQuery('users', getUsers)

  if (isLoading) return <div>Loding...</div>
  if (isError) return <div>Error fetching data</div>
  console.log(data)

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
