import { useState, useEffect, useId } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
function Game() {
  const params = useParams();
  const [cards, setCards] = useState([]);
  const [rating, setRating] = useState(null);
  const [coll, setColl] = useState(null);
  const [error, setError] = useState(null);
  const id = useId(null);

  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${params.title}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const date = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json(
          window.localStorage.getItem("SINGLE_GAME"),
        );
        setCards(result);
      } catch (error) {
        setError(error);
      }
    };

    date();
  }, [params.title]);
  // console.log(params);

  useEffect(() => {
    window.localStorage.setItem("SINGLE_GAME", JSON.stringify(cards));
  });

  useEffect(() => {
    window.localStorage.setItem("RATE_GAME", JSON.stringify(rating));
  });

  return (
    <>
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
      <div className="xs:max-w-[650px] mx-auto mt-3 px-3 hover:shadow-xl xl:shadow-md">
        <h2 className="  pb-5 pt-6 text-3xl font-semibold md:text-4xl">
          {cards.title}
        </h2>
        <div className="xs:flex items-center gap-5">
          <img src={cards.thumbnail} alt={cards.title} className="w-full" />

          <div>
            <p>
              <span className="font-semibold">Gerne:</span> {cards.genre}
            </p>
            <p>
              <span className="font-semibold">Publisher:</span>{" "}
              {cards.publisher}
            </p>
            <p>
              <span className="font-semibold">Relase date:</span>{" "}
              {cards.release_date}
            </p>
          </div>
        </div>
        <p className="mb-3">
          <span className="font-semibold">Description:</span>{" "}
          {cards.short_description}
        </p>
        <div className="mb-3 flex gap-3 pb-3">
          <p className="font-semibold">Rate the game: </p>
          {[...Array(5)].map((star, index) => {
            const currRate = index + 1;
            return (
              <div key={index}>
                <label htmlFor={id + "-Rate"}>
                  <FaStar
                    size={23}
                    color={currRate <= (coll || rating) ? "blue" : "gray"}
                    onClick={() => setRating(currRate)}
                    className="cursor-pointer transition duration-700 ease-in-out"
                  />
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Game;
