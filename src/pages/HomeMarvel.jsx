import { useEffect, useState } from "react";
import { CardMarvel } from "../components/CardMarvel";
import { petition } from "../helpers/apiMarvel";

export const HomeMarvel = () => {
  const [characterData, setCharacterData] = useState([]);

  const fetchData = async () => {
    try {
      const characters = await petition();
      setCharacterData(characters);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container p-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <CardMarvel data={characterData} />
        </div>
      </div>
    </>
  );
};
