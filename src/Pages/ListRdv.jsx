import Cards from "../Components/Cards";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ListRdv() {
  return (
    <div className="p-4 bg-amber-100 h-screen">
      <div className="absolute right-5 top-5 text-white bg-amber-500 p-2 rounded-full cursor-pointer transition-all hover:bg-amber-600">
        <Link to="/">
          <FaArrowLeft />
        </Link>
      </div>

      <Cards />
    </div>
  );
}
