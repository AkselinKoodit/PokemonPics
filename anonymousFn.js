//here I try to do the same js functionality as in script.js cleaner, using anonymous function
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded, lets get coding!");
    let pokemons = [];

    async function getData() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"
      );
      const json = await response.json();
      pokemons = json.results;

      pokemons.forEach(addPokemon);

      attachInfo();
    }

    function addPokemon(pokemon) {
      console.log(pokemon.name);
      let newLi = document.createElement("li");
      newLi.innerText = `${pokemon.name}`;
      document.getElementById("pokeList").appendChild(newLi);
    }
    getData();

    function attachInfo() {
      let pokemonNamesList = document.querySelectorAll("li");
      console.log(pokemonNamesList.length);
      for (let i = 0; i < pokemonNamesList.length; i++) {
        pokemonNamesList[i].onclick = function () {
          showInfo(i);
        };
        // addEventListener("click", showInfo(pokemons[i]));
      }
    }

    function showInfo(index) {
      document.getElementById("infoboard").innerHTML = "";
      console.log("You clicked " + pokemons[index].name);
      fetch(pokemons[index].url)
        .then((response) => response.json())
        .then((json) => {
          let pokemon = json;
          console.log(pokemon.sprites.front_default);

          let imageDiv = document.createElement("div");
          imageDiv.innerHTML = `<div>                    <p>Name: ${
            pokemon.name
          }</p>
          <p>Weight: ${pokemon.weight / 10} kg  </p>
          <div><img src="${
            pokemon.sprites.front_default
          }"alt = "#"></img></div>`;
          document.getElementById("infoboard").appendChild(imageDiv);
        });
    }
  });
})();
