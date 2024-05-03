import { useEffect, useState } from "react";

function Favorites() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    function loadIMovieList() {
      const listLocalStorage = localStorage.getItem("@filmetso");
      const listItems = JSON.parse(listLocalStorage);
      setMovie(listItems);
    }
    loadIMovieList();
  }, []);

  function removeMovie(movie) {
    const itemsLocalStorage = localStorage.getItem("@filmetso");
    const itemMovie = JSON.parse(itemsLocalStorage);

    const indiceMovie = itemMovie.filter((item) => item.id === movie);

    if (itemMovie.length === 0) {
      alert("Vazio, adicione Filmes !");
      return;
    }

    itemMovie.splice(indiceMovie, 1);
    localStorage.setItem("@filmetso", JSON.stringify(itemMovie));
    setMovie(itemMovie);
  }

  return (
    <>
      <div id="list-movies" className="mt-5 px-5 w-full max-w-[1200px] mx-auto">
        <h1 className="text-center text-4xl font font-bold mb-4">
          Minha Lista
        </h1>
        {movie.map((item) => {
          return (
            <section key={item.id} className="gap-2 border-t-[1px] p-2 ">
              <article className="flex justify-between items-center">
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt={item.title}
                  className="object-contain rounded-full h-[80px] md:h-[100px]"
                />
                <button
                  onClick={() => removeMovie(item.id)}
                  className="bg-red-500 text-white py-3 px-4 hover:bg-red-600 ease-in-out duration-200 transition-all rounded-full"
                >
                  Remover
                </button>
              </article>

              <p>{item.title}</p>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default Favorites;
