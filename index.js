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



$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon"
}).done(res=>{
    console.log(res.results);

    let temp = "";
    res.results.forEach((element,index) => {
        temp += `<tr>
        <td>${++index}</td>
        <td>${element.name}</td>
        <td><button class="btn btn-primary" onclick="showPokemonDetail('${element.url}')" data-bs-toggle="modal" data-bs-target="#pokemon_detail">Detail</button></td>
    </tr>`

    $("tbody").html(temp)  
    });
}).fail(err=>{
    console.log(err);
})




function showPokemonDetail(detailPokeUrl){
    $.ajax({
        url: detailPokeUrl
    }).done(res => {
        console.log(res.sprites.other.dream_world.front_default )

        

        $(".modal-body").html(`<h2>${res.name}</h2>
        <img style="width: 200px;height:200px" class="shadow  rounded-circle" src="${res.sprites.other.dream_world.front_default}" alt="">
        <div>
          <p class="fw-bold">Type</p>
          <div class="detail-type">
         
          </div>
          <p class="fw-bold">Abilities</p>
          <ul class="list-inline">
               
            </ul>
        </div>`)


        let typeBadges = "";
        let abilityList = "";


        res.types.forEach((element,index)=>{
            typeBadges += `<span class="badge bg-secondary">${element.type.name}</span>`
        })

        res.abilities.forEach((element,index) =>{
            abilityList += `<li class="list-inline-item">${element.ability.name}</li> `
        })

     
        $(".detail-type").html(typeBadges)

       $(".list-inline").html(abilityList);

       
    })

   
 
}









