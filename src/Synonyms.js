import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms"> 
      <strong>Synonyms:</strong>
        {props.synonyms.map(function (synonyms, index) {
          return <li key={index}> <strong>{synonyms},</strong> </li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
