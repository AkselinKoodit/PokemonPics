let listNames = document.getElementById("listNames");
let listLinks = document.getElementById("listLinks");
let pokemons = [];
let names = [];
let links = [];

//Let's fetch info from api:
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

//Adding info to html list:
function addPokemon(pokeObjList) {
  let newLi = document.createElement("li");
  newLi.innerText = `${pokeObjList.name}`;
  document.getElementById("pokeList").appendChild(newLi);
  //adding functionality to display info when clicking list element:
  showInfo();
}

function showInfo() {
  console.log("Fn showInfo started");

  let pokemonBtns = document.querySelectorAll("li");

  for (let i = 0; i < pokemonBtns.length; i++) {
    pokemonBtns[i].onclick = function () {
      clicked(i);
    };
  }

  function clicked(index) {
    console.log("Fn clicked started");
    document.getElementById("infoboard").innerHTML = "";
    console.log("You clicked " + pokemons[index].name);
    console.log("It's url: " + pokemons[index].url);

    fetch(pokemons[index].url)
      .then((response) => response.json())
      .then((json) => {
        let pokemon = json;
        console.log(pokemon.sprites.front_default);

        let imageDiv = document.createElement("div");
        imageDiv.innerHTML = `<div>Pokemon info: Name: ${pokemons[index].name} Weight: ${pokemon.weight}<img src="${pokemon.sprites.front_default}"alt = "eweq"></img></div>`;
        document.getElementById("infoboard").appendChild(imageDiv);
      });
  }
}
