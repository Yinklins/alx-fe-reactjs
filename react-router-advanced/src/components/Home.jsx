import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/about">Go to About</Link> | 
    <Link to="/profile">Go to Profile</Link> |
    <Link to="/post/5">View Post 5</Link>
  </div>
);

export default Home;
