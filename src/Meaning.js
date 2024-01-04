import React from "react";
import Synonyms from "./Synonyms"
import Example from "./Example"

export default function Meaning(props) {
  console.log(props.meanings);
  return (
    <div className="Meaning">
      <h3>{props.meanings.partOfSpeech}</h3>
      <div>
        <p>
          <strong>Definition:</strong> {props.meanings.definition}
          <br />
          <Example example={props.meanings.example} />
          <br />
          <Synonyms synonyms={props.meanings.synonyms} />
        </p>
      </div>
    </div>
  );
}
