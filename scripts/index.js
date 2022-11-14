// const animals = [
//     {name:"budi", species:"dog", class:{name:"mamalia"}},
//     {name:"nemo", species:"fish", class:{name:"invertebrata"}},
//     {name:"bayu", species:"dog", class:{name:"mamalia"}},
//     {name:"jalin", species:"dog", class:{name:"mamalia"}},
//     {name:"dory", species:"fish", class:{name:"invertebrata"}},
// ]

// const OnlyDog = []

// const myFunction = (arr) => {
//     for(el of arr){
//         if(el.species == "dog"){
//             OnlyDog.push(el);
//         }else if(el.species == "fish"){
//             el.class.name = "Ovipar";
//         }
//     }
// }


// const myFunction2 = (arr) => {
//     for (let index = 0; index < arr.length; index++) {
//         if(arr[index].species == "dog"){
//             OnlyDog.push(arr[index])
//         }else if(arr[index].species == "fish"){
//             arr[index].class.name = "Ovipar"
//         }
        
//     }
// }


// myFunction2(animals);

// console.log(animals);
// console.log(OnlyDog);

import {showPokemonDetail} from "./pokemonDetail.js"
 
$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon"
}).done(res=>{
    console.log(res.results);

    let temp = "";
    res.results.forEach((element,index) => {
        temp += `<tr>
        <th>${++index}</th>
        <td class="text-capitalize">${element.name}</td>
        <td><button class="btn btn-primary showPokemon"  data-detail-url='${element.url}' data-bs-toggle="modal" data-bs-target="#pokemon_detail">Detail</button></td>
    </tr>`
    
    $("tbody").html(temp)  
    
    });

    let showPokemonBtns =  document.querySelectorAll('.btn.showPokemon');
  
    for (const button of showPokemonBtns) {
        button.addEventListener('click', (event) => {
            showPokemonDetail(event.target.dataset.detailUrl)
        })
    }

}).fail(err=>{
    console.log(err);
})





















