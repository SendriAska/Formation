async function fetchPokemon() {

    const data = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log(data);

    const result = await data.json();
    console.log(result);
    const list = document.getElementById("listPokemon");
    result.results.forEach(pokemon => {
        const li = document.createElement("li");
        li.textContent = pokemon.name;
        li.style.background = "yellow";
        li.style.listStyle = "none";
        list.style.padding = "0";
        li.style.margin = "1px 0 ";
        list.appendChild(li);
    });
}

fetchPokemon();