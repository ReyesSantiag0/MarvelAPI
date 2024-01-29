/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const CardMarvel = ({ data }) => {
  return (
    <>
      {data.map((character) => (
        <Link
          key={character.id}
          to={`/marvel/${character.id}`}
          style={{ textDecoration: "none" }}
          className="col-md-3 mb-3"
          title="Ir a la descripción"
        >
          <div className="card h-100" style={{ border: "2px solid #ff4848" }}>
            <img
              src={`${character.thumbnail}.${character.extension}`}
              className="card-img-top h-100"
              alt={character.name}
            />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
