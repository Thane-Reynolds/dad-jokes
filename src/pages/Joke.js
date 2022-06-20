import * as React from "react";

import DisplayedJoke from "../components/DisplayedJoke/DisplayedJoke";
import DefaultContent from "../components/DefaultContent/DefaultContent";

export default function Joke() {
  const [curatedTerm, setCuratedTerm] = React.useState("cows");

  return (
    <div className="px-6">
      <DisplayedJoke
        curatedTerm={curatedTerm}
        setCuratedTerm={setCuratedTerm}
      />
      <DefaultContent setCuratedTerm={setCuratedTerm} />
    </div>
  );
}
