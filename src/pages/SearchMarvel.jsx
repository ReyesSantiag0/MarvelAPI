/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { petition } from "../helpers/apiMarvel";
import { useEffect, useState } from "react";
import { CardMarvel } from "../components/CardMarvel";

export const SearchMarvel = () => {
  const { name } = useParams();
  const [characterData, setCharacterData] = useState([]);

  const fetchData = async () => {
    try {
      const characters = await petition();

      const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(name.toLowerCase())
      );

      setCharacterData(filteredCharacters);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {characterData.length === 0 ? (
        <h1>Sin Resultados</h1>
      ) : (
        <div className="container p-5">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <CardMarvel data={characterData} />
          </div>
        </div>
      )}
    </>
  );
};
