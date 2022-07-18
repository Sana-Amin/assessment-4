const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller.js');
const {getDessert} = require('./controller.js');
const {getAllDesserts} = require('./controller.js');

app.get("/api/compliment", getCompliment);
app.get("/api/dessert", getDessert);
app.get('/api/desserts', getAllDesserts);



app.listen(4000, () => console.log("Server running on 4000"));
