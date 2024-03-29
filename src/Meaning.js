import React from "react";
import Synonyms from "./Synonyms"
import Example from "./Example"
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meanings);
  return (
    <div className="Meaning">
      <h3>{props.meanings.partOfSpeech}</h3>
      <div >
        <p>
          {props.meanings.definition}
          <br />
          <Example className="Example" example={props.meanings.example} />
          <Synonyms synonyms={props.meanings.synonyms} />
        </p>
      </div>
    </div>
  );
}
