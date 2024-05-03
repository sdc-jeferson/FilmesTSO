import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdArrowBackIos } from "react-icons/md";

function Movie() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [loading, setLoding] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function movieDetail() {
      const showMovieDetail = await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "489f74f922cd9fcb726f3a3f41bb20a8",
            language: "pt-BR",
          },
        })
        .then((response) => response.data)
        .catch(() => {
          navigate("/", { replace: "true" });
        });
      setMovieDetail(showMovieDetail);
      setLoding(false);
    }
    movieDetail();
  }, [id, navigate]);

  function handleSave() {
    //Salvar filme na lista
    const myList = localStorage.getItem("@filmetso");
    const movieSaveds = JSON.parse(myList) || [];

    // Verificar se o filme salvo ja existe na lista
    const hasMovie = movieSaveds.some(
      (movieSaved) => movieSaved.id === movieDetail.id
    );

    if (hasMovie) {
      toast.info("Este filme ja existe na lista", {
        autoClose: 2000,
      });
      return;
    }

    movieSaveds.push(movieDetail);
    localStorage.setItem("@filmetso", JSON.stringify(movieSaveds));
    toast.success("Filme salvo com sucesso", {
      autoClose: 2000,
    });
  }

  if (loading) {
    return (
      <>
        <h1 className="text-3xl font-bold mt-4">
          Carregando o Filme, aguarde ...
        </h1>
      </>
    );
  }

  return (
    <>
      <ToastContainer />

      <div
        id="container-wrapper-movie-detail"
        className="w-full max-w-[1200px] mx-auto grid justify-center md:flex md:justify-center"
      >
        <article
          id="card-detail"
          className="flex flex-col justify-center items-center m-5 gap-3 w-[70vw] max-w-[600px]"
        >
          <Link to="/" className="flex items-center my-4 mx-auto text-lg">
            <MdArrowBackIos />
            Back
          </Link>

          <img
            src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
            alt={movieDetail.title}
            className="rounded-t-[10px]"
          />
          <h3 className="text-2xl font-semibold">{movieDetail.title}</h3>
          <p className="text-justify">{movieDetail.overview}</p>
          <div
            id="footer-card"
            className="flex justify-between items-center w-full text-white bg-orange-700 p-2 rounded-b-[10px] text-center"
          >
            <section>
              {movieDetail.vote_average.toFixed(1)} / 10
              <p className="text-[#C4C4CC]">Imdb</p>
            </section>
            <section>
              {movieDetail.popularity}
              <p className="text-[#C4C4CC]">População</p>
            </section>
            <section>
              {movieDetail.vote_count}
              <p className="text-[#C4C4CC]">Votos</p>
            </section>
          </div>
        </article>

        <article className="flex flex-col mt-6 gap-2 items-center">
          <button
            onClick={handleSave}
            className="cursor-pointer boder-none bg-[#3249CB] py-1 px-3 rounded-[10px] 
        text-white hover:bg-[#353d68] ease-in-out duration-200 w-full max-w-[300px] text-center md:py-4 md:px-6"
          >
            Salvar
          </button>
          <Link
            to={`https://youtube.com/results?search_query=${movieDetail.title} Trailer`}
            className="cursor-pointer boder-none bg-[#3249CB] py-1 px-3 rounded-[10px] 
          text-white hover:bg-[#353d68] ease-in-out duration-200 w-full max-w-[300px] text-center md:py-4 md:px-6"
            target="blank"
          >
            Trailer
          </Link>
        </article>
      </div>
    </>
  );
}

export default Movie;
