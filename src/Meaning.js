import React from "react";

export default function Meaning(props) {
  console.log(props.meanings[0]);
  return (
    <div className="Meaning">
      <h3>{props.meanings[0].partOfSpeech}</h3>
      <div>
        <p>
          {props.meanings[0].definition}
          <br />
          <em>{props.meanings[0].example}</em>
        </p>
      </div>
    </div>
  );
}
