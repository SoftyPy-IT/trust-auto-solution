import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h3>this is home page</h3>
      <Link to='/dashboard'>dashboard</Link>
    </div>
  );
};

export default Home;
