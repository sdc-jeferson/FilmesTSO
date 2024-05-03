import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

function Home() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function listMovies() {
      const getNowPlaying = await api
        .get("/movie/now_playing", {
          params: {
            api_key: "489f74f922cd9fcb726f3a3f41bb20a8",
            language: "pt-BR",
          },
        })
        .then((response) => response.data.results)
        .catch((error) =>
          console.error({ error: "Error ao carregar os encontrados" }, error)
        );
      setMovie(getNowPlaying.slice(0, 10));
      setLoading(false);
    }
    listMovies();
  }, []);

  if (loading) {
    return (
      <>
        <h1 className="text-3xl font-bold mt-4">Carregando filmes ...</h1>
      </>
    );
  }

  return (
    <div
      id="container-wrapper-movies"
      className="w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center text-center"
    >
      {movie.map((item) => {
        return (
          <>
            <article
              key={item.id}
              className="mt-2 flex flex-col justify-center items-center p-5"
            >
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path} `}
                alt={item.title}
                className="w-[65vw]  md:max-w-[550px] rounded-t-[15px]"
              />

              <Link
                to={`/movie/${item.id}`}
                className="bg-[#182049] text-white mt-[-1.5rem] w-[65vw] md:max-w-[550px] p-3 rounded-b-[15px]"
              >
                Acessar filme
              </Link>
            </article>
          </>
        );
      })}
    </div>
  );
}

export default Home;
