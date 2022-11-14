import {createStatChart} from "./chart.js"

const showPokemonDetail = (detailPokeUrl) => {
    $.ajax({
        url: detailPokeUrl
    }).done(res => {
        console.log(res.stats)



        $(".modal-body").html(`<h2 class="text-capitalize h1    ">${res.name}</h2>    
        <div style="width: 18.75rem;height: 18.75rem;overflow: hidden;" class="frame rounded-circle shadow d-flex justify-content-center align-items-centerd">
            <img style="width: 70%;height:auto;" src="${res.sprites.other.dream_world.front_default}" alt="">
        </div>
       
        <div>
          <p class="h3 fw-bold">Type</p>
          <div class="detail-type h4">
         
          </div>
          <p class="h3 fw-bold">Abilities</p>
          <ul class="list-inline">
               
           </ul>

         
       </div>

       <p class="h3 fw-bold">Stats</p>
        

          
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <div class="card">
                        <div class="card-body">
                            <canvas id="statsChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>


   
        `)


        let typeBadges = "";
        let abilityList = "";


        res.types.forEach((element,index)=>{
            typeBadges += `<span style="background-color:var(--color-${element.type.name});" class="badge rounded-pill">${element.type.name}</span>`
        })

        res.abilities.forEach((element,index) =>{
            abilityList += `<li class="list-inline-item">${element.ability.name}</li> `
        })

     
        $(".detail-type").html(typeBadges)

        $(".list-inline").html(abilityList);

        //Setup and config chart
        const statsLabel = [];
        const statsData = [];
        
        res.stats.forEach(element =>{
            statsData.push(element.base_stat);
            statsLabel.push(element.stat.name.toUpperCase())
        })

        const statsChartElement = document.getElementById('statsChart')


        createStatChart(statsLabel, statsData, statsChartElement)

        
       
    }).fail(err => console.log(err))


}


export {showPokemonDetail}