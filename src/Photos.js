import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
      return (
          <section className="Photos">
        <div className="row">
        {props.photos.map(function (photo, index) {
          console.log(photo);
            return (
              <div className="col-12" key={index}>
                <a
                  href={photo.src.original}
                  rel="noreferrer"
                  target="_blank"
                >
                <img
                  alt={photo.alt}
                  src={photo.src.tiny}
                  className="img-fluid"
                />
                </a>
              </div>
            );
        })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
