/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { petitionId } from "../helpers/apiMarvel";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const CardMaverlInfo = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState({});

  const fetchData = async (id) => {
    try {
      const characters = await petitionId(id);
      setCharacterData(characters);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, []);

  useEffect(() => {
    console.log("Informacion marvel:", characterData.id);
    console.log("Nombre:", characterData.name);
    console.log("Descripción:", characterData.description);
  }, [characterData]);

  return (
    <>
      <div
        className="card mx-auto my-5"
        style={{ maxWidth: "500px", border: "2px solid #ff4848" }}
      >
        <div className="d-flex align-items-center" style={{ margin: "10px" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              marginRight: "10px",
              color: "#ff4848",
            }}
            title="Regresar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-left-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
          </Link>

          <div className="row g-0 d-flex align-items-center">
            <div className="col-md-4 text-center py-5 p-3">
              <img
                src={`${characterData.thumbnail}.${characterData.extension}`}
                alt={characterData.name}
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8 mx-auto">
              <div className="card-body">
                <h1
                  className="card-title text-center"
                  style={{ color: "#ff4848" }}
                >
                  {characterData.id}
                </h1>
                <div>
                  <p
                    style={{
                      color: "#ff4848",
                      display: "inline",
                      marginRight: "5px",
                    }}
                  >
                    Nombre:
                  </p>
                  <p style={{ display: "inline" }}>{characterData.name}</p>
                </div>
                <div>
                  <p
                    style={{
                      color: "#ff4848",
                      display: "inline",
                      marginRight: "5px",
                    }}
                  >
                    Descripción:
                  </p>
                  <p style={{ display: "inline" }}>
                    {characterData.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
