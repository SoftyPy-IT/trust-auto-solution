import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2 className="flex items-center justify-center text-5xl font-bold  mt-32">
      <Link to='/dashboard'>Trust Auto Solution</Link>
      </h2>
    </div>
  );
};

export default Home;
