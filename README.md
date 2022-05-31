# Pokemon App

## Poke Express

![pokemon image] (https://i.imgur.com/rRKtN1B.jpg)

Purpose from Curriculum Development Team: Make a Pokemon app that displays data inside server-side rendered views, learners will gain a deeper understanding of what they built in class and should have some fun with doing it. Encourage students to review class material and use it as a guide also encourage them to use the express documentation. Discourage them from using online tutorials to help them with this because they will have difficulty finding an online tutorial that is at the same level as this assignment, it will be either be too advanced or too simple and will in most cases confuse learners away from this assignments purpose.

### Learning Objectives

- Practicing index and show routes with express

### Prerequisites

- JavaScript
- Express
- Node
- EJS

## The User Stories

- When a user goes to the /pokemon route they will see an index of pokemon: the names of each pokemon rendered to the page.
- When a user clicks on the name of the pokemon, they will be taken to that pokemon's show page, and will see the pokemon's name and image.

## Let's Start Catching 'em All!

### Set up the file structure

#### In terminal 1 at a time:

inside your homework folder:

- mkdir pokemon_app

- cd pokemon_app

- mkdir views

- touch views/Index.ejs

- touch views/Show.ejs

- mkdir models

- touch models/pokemon.js

- touch server.js

- touch .gitignore

- npm init -y

Approximate File Structure

## 🔴 Commit:

## "All my files are created"

### Install NPM packages

#### In terminal:

- Make sure that you are on the same directory level as your package.json (why?)

- npm i express

- npm i ejs

- check your package.json

Approximate package.json

## 🔴 Commit:

## "All my npm packages are added"

### Set up your server

-In your server.js file, set up your server

- require express
- set express() to a variable
- set a variable of port to 3000
- set your app to listen to the port and include a console.log(), so that you can tell when your server is running
- include a get route / that will res.send('Welcome to the Pokemon App!'); so that when you got to localhost:3000, you will see Welcome to the Pokemon App!
- In terminal
- nodemon or nodemon server.js (if you set your package.json to start server.js you don't need to put it after nodemon )
- - GOTCHA! : nodemon will only work if you run it from the same location as your package.json
- In the browser
- go to localhost:3000
- check that you have your Welcome to the Pokemon App! message displaying

## 🔴 Commit:

## "My server is set up and running"

### Set up your 'database'

- You have created a file called pokemon.js
- Inside of this file, put the following array of pokemon objects. This is your 'database' for tonight's homework, copy and paste it as is! You'll notice the image url's are missing something, this is intentional, do not edit anything directly inside the 'database'!
  const pokemon = [
  {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
  {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
  {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
  {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
  {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
  {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
  {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
  ];
- Set up your 'database' so that it can be exported to your server.js and then be required by your server.js
- Set this 'database' to a variable called pokemon in your server.js file
- Create a get route /pokemon that will res.send(pokemon), which will display your pokemon data as json in the browser

## 🔴 Commit:

## "Connected my database, can see json in the browser"

### Set up your index view

- Instead of displaying json at your /pokemon route, you should serve the Index.ejs file you created that will display your pokemon

- You will have to set up your ejs file

- Start with your html boilerplate code

- Add an <h1> that describes this page, i.e. 'See All The Pokemon!'

- Change your /pokemon route to res.render your Index.ejs file

- In your browser, go to localhost:3000/pokemon and be sure to see your Index.ejs view with an h1 tag

### 🔴 Commit:

### "index.ejs view rendered at pokemon route"

- Set up your index view to show your pokemon data
  -Continue working on your Index.ejs view so that you can see:
- The name of each pokemon, as a list item, inside an unordered list
- This list should be dynamically rendered by ejs based on your data from your 'database'
- You'll notice the pokemon names aren't properly capitalized! Let's fix that! Manipulate the data programmatically to capitalize the first letter of their names

## 🔴 Commit:

## "I can view a list of all my pokemon in the browser"

### Setting up your show route

- Inside your server.js, add a new get route /pokemon/:id
- That will res.send(req.params.id);
- So, when you go to localhost:3000/pokemon/whatever
  whatever will show up in the browser

## 🔴 Commit:

## "Show view shows req.params.id "

### Link your Index.ejs to your Show.ejs

- Inside your Index.ejs,
- For each pokemon, add an <a> tag that will have an href that goes to the route /pokemon/x, where x is the array position of the pokemon in the data array. This should be set dynamically with jsx
- When you click the link you should go to your show route and the index number corresponding to the pokemon's array position should be displayed

## 🔴 Commit:

## "Added dynamic anchor tags to index.ejs "

### Render your individual pokemon in the show view

- Copy/paste your code from your Index.jsx into your Show.ejs`
- Change all your html code inside your Show.ejs file so that
- - Your h1 tag says "Gotta Catch 'Em All"
- - Add an h2 tag that will display the name of the pokemon
- - Add an image tag that will display an image of the pokemon
    Add an anchor tag with the text of back, that will take you back to your Index.ejs view
    Update the route in the server.js to render the show view with the pokemon data
    Oh no! The image is broken because in our database the image links don't have the .jpg ending, let's fix that programmatically! Without going back to the database and editing it there, add on .jpg to the end of the pokemon's image data

🔴 Commit:
"Created show views of each pokemon"

Hungry for More?
Learn about express static in order to learn how to link a css file to your app (we'll be covering it tomorrow, but if you're interested in looking into it now: read those docs! (Links to an external site.) Go ahead and dive right in! Style your application with Bootstrap or any other CSS framework! Or really jazz up your app by adding some hand-rolled flourishes with css animations, jQuery and more!
Sign up for Code Wars (Links to an external site.) and try out a challenge (or a few!) in order to keep honing your JavaScript skills!
