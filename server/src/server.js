const express = require("express");
const server = express();
const morgan = require("morgan");
const { router } = require("./routes/index");
const cors = require("cors")
const PORT = 3001

server.use(express.json());
server.use(morgan("dev"));
server.use(cors())
server.use("/rickandmorty",router)

server.listen(PORT,()=>{

  console.log(`server raised in port: ${PORT}`)
})