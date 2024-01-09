import React from "react";
import Meaning from "./Meaning";


export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1>{props.results.word}</h1>
       <h2>( {props.results.phonetic} )</h2> 
       <br />
        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meaning meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
