import * as React from "react";
import Search from "./Search";
import CurrentJoke from "./CurrentJoke";

export default function DisplayedJoke({ curatedTerm, setCuratedTerm }) {
  const [currentJoke, setCurrentJoke] = React.useState("");

  function fetchInitalJoke() {
    const params = new URLSearchParams({
      limit: 30,
      term: curatedTerm
    });

    const init = {
      headers: {
        Accept: "application/json"
      }
    };

    fetch(`https://icanhazdadjoke.com/search?${params}`, init)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        setCurrentJoke(
          response.results[Math.floor(Math.random() * response.results.length)]
            .joke
        );
      });
  }

  React.useEffect(() => {
    fetchInitalJoke();
    console.log("ON PAGE LOAD");
  }, []);

  React.useEffect(() => {
    fetchInitalJoke();
    console.log("ON CURRENT TERM UPDATE");
  }, [curatedTerm]);

  return (
    <div className="mt-12">
      <Search curatedTerm={curatedTerm} setCuratedTerm={setCuratedTerm} />
      <CurrentJoke currentJoke={currentJoke} />
    </div>
  );
}
