import { Link } from "react-router-dom";
import { BiSolidErrorAlt } from "react-icons/bi";

function Error() {
  return (
    <div className="flex flex-col justify-center items-center mt-20" id="error">
      <BiSolidErrorAlt className="text-6xl" />
      <h1 className="text-8xl">404</h1>
      <p className="text-5xl">Página não encontrada</p>
      <Link
        to="/"
        className="mt-4 text-white bg-[#67159C] p-3 rounded-xl hover:bg-[#3f2452] transition-all duration-200 ease-in-out"
      >
        Voltar a Home
      </Link>
    </div>
  );
}

export default Error;
