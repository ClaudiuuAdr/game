import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shop from "../Components/Shop";

function Games() {
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);
  const [warn, setWarn] = useState([]);
  const [error, setError] = useState(null);
  const url =
    "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setCards(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const test = cards?.slice(25, 49); //DE FOLOSIT
  useEffect(() => {
    window.localStorage.setItem("DATA_GAMES", JSON.stringify(test));
  }, [test]);

  const handleClick = (content) => {
    let isSomething = false;
    cart.forEach((game) => {
      if (content.id === game.id) isSomething = true;
    });
    if (isSomething) {
      setWarn(false);
      setTimeout(() => {
        setWarn(true);
      }, 1300);
      return;
    }
    setCart([...cart, content]);
  };

  return (
    <>
      <section>
        <Shop size={cart.length === 0 ? null : cart.length} />

        <h2
          className="mb-7 mt-10 px-4 text-center text-2xl font-bold md:text-4xl "
          id="Games"
        >
          Click on the game for more information
        </h2>

        {error && (
          <div className="bg-black text-center text-3xl text-white">
            <p>An error occurred when loading data from the API.</p>
            <p>{error.message}</p>
            <button
              className=" my-10 rounded-md bg-white p-3 text-black"
              onClick={() => window.location.reload()}
            >
              Relaod page
            </button>
          </div>
        )}

        <section className="mx-auto lg:max-w-[1650px]">
          <div className="relative mx-7 mb-[10px] gap-3 py-3 md:grid md:grid-cols-3 lg:grid-cols-4">
            {test.map((content) => (
              <div key={content.id} className="hover:shadow-xl md:shadow-md">
                <Link to={`/games/${content.id}`}>
                  <h3 className="mb-1 text-center font-semibold">
                    Title: {content.title}
                  </h3>
                  <div className="flex justify-center">
                    <img
                      src={content.thumbnail}
                      alt={`${content.title}`}
                      className="relative mb-3 flex w-full cursor-pointer object-cover p-2 md:duration-300 md:ease-in md:hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="mx-3 hidden">
                    <span className="font-semibold">Descripition:</span>{" "}
                    {content.short_description}
                  </p>
                  <p className="mx-3">
                    <span className="font-semibold">Publisher:</span>{" "}
                    {content.publisher}
                  </p>
                  <p className="mx-3 mb-5">
                    <span className="font-semibold">Genre:</span>{" "}
                    {content.genre}
                  </p>
                </Link>
                <div className="mb-3 flex justify-center">
                  <button
                    className="my-3 rounded-md bg-slate-700 px-3 text-white hover:text-yellow-300"
                    onClick={() => handleClick(content)}
                  >
                    Add now
                  </button>
                </div>
              </div>
            ))}
          </div>
          {warn && handleClick ? (
            <div></div>
          ) : (
            <p className="fixed top-0 flex w-full justify-center bg-slate-600 px-3 py-4 text-3xl text-white">
              This game is already in the cart
            </p>
          )}
        </section>
      </section>
    </>
  );
}

export default Games;
