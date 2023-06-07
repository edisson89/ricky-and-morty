const favs = require("../utils/favs.js")

function postFav(req,res) {
    favs.push(req.body);
    res.status(201).json(favs);
}

function getFav(req,res) {
    res.status(200).json(favs);
    
}
function removeFav(req,res) {
    let {id} = req.params
    favs = favs.filter((ch)=> ch.id !== Number(id));
    res.status(200).json(favs)
}

module.exports = {postFav, getFav,removeFav}