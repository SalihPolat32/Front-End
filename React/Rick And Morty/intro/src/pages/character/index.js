import React, { useState, useEffect } from "react";

import CharacterCard from "../../components/CharacterCard";

import { getCharacters, getFirstEpisode } from "../../service/character";

import "./index.scss";

const Character = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {

    const data = async () => {

      const response = await getCharacters();
      const characters = response.data.results;

      const promises = characters.map((character) =>
      getFirstEpisode(character.episode[0])
      );

      const episodeNames = await Promise.all(promises);

      const charactersAndEpisode = characters.map(
        (character, index) => ({...character, firstEpisodeName: episodeNames[index],
        })
      );

      setCharacters(charactersAndEpisode);
    };

    data();
  }, []);

  return (
    <div className="character">
      {characters.map((character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </div>
  );
};

export default Character;