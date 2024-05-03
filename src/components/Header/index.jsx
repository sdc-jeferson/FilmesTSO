import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="bg-[#182049] py-5 px-4 flex items-center justify-between w-full max-w-[1200px] mx-auto">
        <Link
          to="/"
          id="logo"
          className="text-white font-bold text-3xl md:text-4xl"
        >
          FilmeTSO
        </Link>

        <Link
          to="/favorites"
          id="btn-favorites"
          className="cursor-pointer bg-white p-1 text-[#000] rounded-md"
        >
          Meus Filmes
        </Link>
      </header>
    </>
  );
}

export default Header;
