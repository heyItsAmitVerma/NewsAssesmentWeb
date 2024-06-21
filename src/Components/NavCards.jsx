import React from "react";
import img from "../Components/images/newspick.png";

function NavCards({ title, description, src, url }) {
  return (
    <div
      className="card mb-3 d-inline-block mx-3 my-3 px-2 py-2"
      style={{ maxWidth: "330px", height: "450px" }}
    >
      <img
        src={src ? src : img}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5
          className="card-title"
          style={{ height: "60px", overflow: "hidden" }}
        >
          {title.length > 50 ? `${title.slice(0, 50)}...` : title}
        </h5>
        <p
          className="card-text"
          style={{ height: "100px", overflow: "hidden" }}
        >
          {description
            ? description.length > 90
              ? `${description.slice(0, 90)}...`
              : description
            : "NEW YORK — Cedric Mullins hit a two-run homer to spark a six-run second inning, Gunnar Henderson reached base four times and the Baltimore Orioles knocked out rookie pitcher Luis Gil early in a 17-5 rout of the New York Yankees on Thursday. On a 90-degree day, the Orioles improved to 5-2 against the Yankees [...]"}
        </p>
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default NavCards;
