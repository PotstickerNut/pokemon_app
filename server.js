const express = require("express");
const pokemon = require("./models/pokemon");
require("dotenv").config();
const mongoose = require("mongoose");
const PokemonModel = require("./models/PokemonModel");

//* ============ SETUP
const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.set("views", "./views");

//* ============= MIDDLEWARE
app.use(express.json()); // pare the req into json
app.use(express.urlencoded({ extended: false })); // parse into javascript

//* ============== ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", async (req, res) => {
  try {
    //  fetch data from database
    const pokemons = await PokemonModel.find();

    console.log(pokemons.forEach((pokemon) => console.log(pokemon._id)));

    res.render("Index", {
      data: pokemons,
      pageTitle: "Pokemon",
      pageHeader: "See all the Pokemon!",
    });
  } catch (error) {
    console.log(error);
  }
});
// });

app.get("/pokemon/new", (req, res) => {
  res.render("newPokemon");
});

//* POST REQUEST HANDLER
app.post("/pokemon", async (req, res) => {
  const newPokemon = req.body; // create a newPokemon variable
  // add img property to the object
  newPokemon.img = `http://img.pokemondb.net/artwork/${req.body.name.toLowerCase()}`;

  console.log(newPokemon);

  //* Save new pokemon to the db
  await PokemonModel.create(newPokemon, (error, result) => {
    if (error) {
      console.log(error);
    }
    console.log(result);
  });
  // More stuff
  res.redirect("/pokemon");
});

app.get("/pokemon/:id", async (req, res) => {
  try {
    const pokemon = await PokemonModel.findById(req.params.id);
    console.log("Pokemon found!", pokemon);

    res.render("Show", {
      pokemon: pokemon,
      pageTitle: "Pokemon",
      pageHeader: "Gotta Catch 'Em All!",
    });
  } catch (error) {
    console.log(error);
  }
});

//* ============ Listener
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
  mongoose.connect(process.env.MONGODB_URI); // Connects to MongoDB
  console.log("MongoDB connected!");
});
