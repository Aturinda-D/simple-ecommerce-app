import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-64px)] p-20 flex flex-col gap-5 justify-center items-end bg-[url('/assets/images/backgroud-image.png')] bg-no-repeat bg-cover bg-center">
      <h1 className="text-white font-black text-6xl capitalize">
        Landing page
      </h1>
      <p className="text-white text-lg font-semibold">
        Discover the best products in the market with us!
      </p>
      <button
        className="bg-white mt-5 inline-flex items-center gap-2 px-6 py-3 font-bold text-xl text-[var(--accent-1)] rounded-full"
        onClick={() => navigate("products")}
      >
        Get started
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Home;
