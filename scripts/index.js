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




// function showPokemonDetail(detailPokeUrl){
//     $.ajax({
//         url: detailPokeUrl
//     }).done(res => {
//         console.log(res.stats)

  

        

//         $(".modal-body").html(`<h2 class="text-capitalize h1    ">${res.name}</h2>    
//         <div style="width: 18.75rem;height: 18.75rem;overflow: hidden;" class="frame rounded-circle shadow d-flex justify-content-center align-items-centerd">
//             <img style="width: 70%;height:auto;" src="${res.sprites.other.dream_world.front_default}" alt="">
//         </div>
       
//         <div>
//           <p class="h3 fw-bold">Type</p>
//           <div class="detail-type h4">
         
//           </div>
//           <p class="h3 fw-bold">Abilities</p>
//           <ul class="list-inline">
               
//            </ul>

         
//        </div>

//        <p class="h3 fw-bold">Stats</p>
        

          
//         <div class="container">
//             <div class="row justify-content-center">
//                 <div class="col-lg-9">
//                     <div class="card">
//                         <div class="card-body">
//                             <canvas id="statsChart"></canvas>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>


   
//         `)


//         let typeBadges = "";
//         let abilityList = "";


//         res.types.forEach((element,index)=>{
//             typeBadges += `<span style="background-color:var(--color-${element.type.name});" class="badge rounded-pill">${element.type.name}</span>`
//         })

//         res.abilities.forEach((element,index) =>{
//             abilityList += `<li class="list-inline-item">${element.ability.name}</li> `
//         })

     
//         $(".detail-type").html(typeBadges)

//         $(".list-inline").html(abilityList);

//         //Setup and config chart
//         const statsLabel = [];
//         const statsData = [];
        
//         res.stats.forEach(element =>{
//             statsData.push(element.base_stat);
//             statsLabel.push(element.stat.name.toUpperCase())
//         })

//         const data = {
//             labels: statsLabel,
//             datasets: [{
//               label: 'Stat',
//               data: statsData,
//               fill: true,
//               backgroundColor: 'rgba(255, 99, 132, 0.2)',
//               borderColor: 'rgba(255, 99, 132, 1)',
        
//             }]
//           };
        
//           const config = {
//             type: 'radar',
//             data: data,
//             options: {
//               elements: {
//                 line: {
//                   borderWidth: 3
//                 }
//               },
//               plugins:{
//                 // title:{
//                 //     display:true,
//                 //     text: 'Base Stats',
//                 //     position: 'top',
//                 //     font: {
//                 //         size: 30
//                 //     }
//                 // },
//                 legend: {
//                     display: false,
//                 }
//               },
//               scales: {
//                 r: {
//                     max: 100,
//                     ticks:{
//                         stepSize: 10
//                     }
//                 }
//             }
//             },
//           };
         
          
//           const pokemonStatChart = new Chart(
//             document.querySelector("#statsChart"),
//             config
//           );
        


    
       
//     })


// }


















