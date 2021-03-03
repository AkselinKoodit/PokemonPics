console.log("Hi it's me, your friend Javascript here!");

let listNames = document.getElementById("listNames");
let listLinks = document.getElementById("listLinks");
let pokemons = [];
let names = [];
let links = [];

fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
  .then((response) => response.json())
  .then((json) => {
    pokemons = json.results;
    console.log(pokemons[0]);
    pokemons.forEach((element) => names.push(element.name));
    pokemons.forEach((element) => links.push(element.url));
    pokemons.forEach((element) => addPokemon(element));
  });
console.log(links);

function addPokemon(pokeObj) {
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${pokeObj.name}</td>
    <td> <a href = "link">${pokeObj.url}</a></td>`;
  document.getElementById("table-content").appendChild(newRow);
}
