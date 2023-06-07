const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharDetails(req, res) {
  try {
    const { id } = req.params;
    const { data } = axios.get(URL + id);

    const character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      image: data.image,
      species: data.species,
      origin: data.origin?.name,
      status: data.status,
    };
    res.status(200).json(character);
  } catch (error) {
    (error) => res.status(500).json(error.message);
  }
}

module.exports = { getCharDetails };
