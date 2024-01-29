// PETICIÓN GENERAL (20 ELEMENTOS)
export const petition = async () => {
  const url =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=9812892ec8ccda6c3b645b7e2e272100&hash=67a922d669b57a009d1e320844a6acf4";
  const resp = await fetch(url);
  const { data } = await resp.json();
  const marvelCharacter = data.results.map((results) => ({
    id: results.id,
    name: results.name,
    description: results.description,
    thumbnail: results.thumbnail.path,
    extension: results.thumbnail.extension,
  }));
  console.log(marvelCharacter);
  return marvelCharacter;
};

// PETICIÓN POR ID

export const petitionId = async (id) => {
  const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=9812892ec8ccda6c3b645b7e2e272100&hash=67a922d669b57a009d1e320844a6acf4`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  if (data && data.results && data.results.length > 0) {
    const firstResult = data.results[0];
    const marvelCharacter = {
      id: firstResult.id,
      name: firstResult.name,
      description: firstResult.description,
      thumbnail: firstResult.thumbnail.path,
      extension: firstResult.thumbnail.extension,
    };

    console.log(marvelCharacter);
    return marvelCharacter;
  } else {
    console.error("No se encontraron resultados para el ID proporcionado.");
    return null;
  }
};
