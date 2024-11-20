const boutonPokemon=document.querySelector(".buttonPokemon");
boutonPokemon.addEventListener("click",()=>{
    for(let i=1;i<21;i++){
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            const rowAPokemon=document.querySelector(".row");

            let nomPokemon=(data.forms[0].name).toLocaleUpperCase();//--> récupération du nom du pokemon
            let premiereAttaquePokemon=data.abilities[0].ability.name;//--> récupération du nom de la première attaque de ce pokemon
            let deuxiemeAttaquePokemon=data.abilities[1].ability.name;//--> récupération du nom de la deuxième attaque de ce pokemon

            let textNomPokemon=document.createElement("p");
            textNomPokemon.innerHTML=nomPokemon;

            let textAttaquePokemon=document.createElement("p");
            textAttaquePokemon.innerHTML=`Attaque 1: ${premiereAttaquePokemon}`;

            let textAttaqueDeuxPokemon=document.createElement("p");
            textAttaqueDeuxPokemon.innerHTML=`Attaque 2: ${deuxiemeAttaquePokemon}`;

            let col3Card=document.createElement("div");
            col3Card.classList.add('col-3');

            let cardPokemon = document.createElement("div");
            cardPokemon.classList.add('card-pokemon');


            cardPokemon.appendChild(textNomPokemon);
            cardPokemon.appendChild(textAttaquePokemon);
            cardPokemon.appendChild(textAttaqueDeuxPokemon);
            col3Card.appendChild(cardPokemon);
            rowAPokemon.appendChild(col3Card);

        })
    }
})