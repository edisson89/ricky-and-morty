const express = require("express");
const { getCharById } = require("../controllers/getCharById");
const { getCharDetails } = require("../controllers/getCharDetails");
const {postFav, getFav,removeFav} = require("../controllers/postFav");
const router = express.Router();

router.get("/onsearch/:id", getCharById)
router.get("/detail/:id",getCharDetails)

router.post("/favs", postFav)
router.get("/favs", getFav)
router.post("/favs/:id", removeFav)

module.exports  = {router}