const createStatChart = (labels, listData, element) => {
    const data = {
        labels: labels,
        datasets: [{
          label: 'Stat',
          data: listData,
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
    
        }]
      };
    
      const config = {
        type: 'radar',
        data: data,
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          },
          plugins:{
            // title:{
            //     display:true,
            //     text: 'Base Stats',
            //     position: 'top',
            //     font: {
            //         size: 30
            //     }
            // },
            legend: {
                display: false,
            }
          },
          scales: {
            r: {
                max: 100,
                ticks:{
                    stepSize: 10
                }
            }
        }
        },
      };
     
      
      const pokemonStatChart = new Chart(
        element,
        config
      );
}

export {createStatChart}