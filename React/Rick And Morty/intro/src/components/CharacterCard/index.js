import React from "react";
import "./index.scss";

const CharacterCard = ({
  name,
  status,
  species,
  location,
  image,
  firstEpisodeName,
  episode,
  url,
}) => {

  let statusClass = "";
  
  if (status === "Alive") {
    statusClass = "alive";
  } else if (status === "Dead") {
    statusClass = "dead";
  } else {
    statusClass = "unknown";
  }

  return (
    <div className={`characterCard ${statusClass}`}>
      <div className="leftSide">
        <img src={image} alt={name} />
      </div>
      <div className="rightSide">
        <div>
          <h1>
            <a className="name" href={url}>{name}</a>
          </h1>
          <span>
            <span className="statusIcon"></span>
            {status} - {species}
          </span>
        </div>
        <div className="characterTraits">
          <span className="Title">Last known location :</span>
          <a className="Text" href={location.url}>
            {location.name}
          </a>
        </div>
        <div className="characterTraits">
          <span className="Title">First seen in:</span>
          {firstEpisodeName ? (
            <a className="Text" href={episode[0]}>
              {firstEpisodeName}
            </a>
          ) : (
            "No episode data available"
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;