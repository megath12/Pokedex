
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("https://i.imgur.com/haeXMBJ.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let ha1 = data.abilities[0].ability.name;   // Habilidades
            let ha2 = data.abilities[1].ability.name;
            console.log(ha1);
            console.log(ha2);
            phab(ha1,ha2);

            let sp = data.species.name;                 // Especie
            pnom(sp);
            console.log(sp);


            let tpo=data.types[0].type.name;             // Tipo   
            pesp(tpo)
            console.log(tpo)
            
            let ind=0;                                  // Estadisticas
            let k=[];                                   //      id
            let k2=[];                                  //      valor
            for (ind; ind <= 5 ; ind++) {
                k.push("&nbsp&nbsp&nbsp" + data.stats[ind].stat.name + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
                k2.push("&nbsp&nbsp&nbsp" + data.stats[ind].base_stat + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
            }
            pstat(k);
            pstat2(k2);
            console.log(k);
            console.log(k2);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pnom = (x1) =>{
    const poknom = document.getElementById("pokeNombre");
    poknom.innerHTML = "Name: "+ x1;
}

const pesp = (x4) => {
    let pokEs = document.getElementById("pokEspecie");
    pokEs.innerHTML = "Spieces: "+ x4;
}


const phab = (x2,x3) =>{
    const pokhab = document.getElementById("pokeHabilidad");
    pokhab.innerHTML = `Abilities: ${x2} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp \n ${x3}`;
}

const pstat = (x5) =>{
    const pokeStat = document.getElementById("pokeStats");
    pokeStat.innerHTML = x5;
}

const pstat2 = (x5) =>{
    const pokeStat = document.getElementById("pokeStats2");
    pokeStat.innerHTML = x5;
}


