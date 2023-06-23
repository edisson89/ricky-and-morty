const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharacterData(req, res) {
  try {
    const response = await axios.get(URL);
    const { data } = response;

    res.status(200).json(data);
  } catch (error) {
     (error) => res.status(500).json({ error: error.message });
  }
}

module.exports = { getCharacterData };
