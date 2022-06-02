const express = require("express");
const pokemon = require("./models/pokemon");

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", (req, res) => {
  res.render("Index", {
    data: pokemon,
    pageTitle: "Pokemon",
    pageHeader: "See all the Pokemon!",
  });
});

app.get("/pokemon/new", (req, res) => {
  res.render("newPokemon");
});

app.post("/pokemon", (req, res) => {
  pokemon.push(req.body);
  res.redirect("/pokemon");
});

app.get("/pokemon/:id", (req, res) => {
  res.render("Show", {
    pokemon: pokemon[req.params.id],
    pageTitle: "Pokemon",
    pageHeader: "Gotta Catch 'Em All!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
