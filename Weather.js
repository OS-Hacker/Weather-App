
// img url: http://openweathermap.org/img/wn/10d@2x.png


const btn = document.querySelector('.form');

btn.addEventListener('submit', async (e) => {

    document.querySelector('.weather').innerHTML = `Loding...`

    let search = document.querySelector('#search').value;

    e.preventDefault();

    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7ca3a0b808715b03596d73a120524ead&units=metric`)

    let data2 = await data.json();


    console.log(data2);


    if (data2.cod == 404) {

        const weather = document.querySelector('.weather').innerHTML = `Sorry City Not Found*`

    }


    let weather = document.querySelector('.weather').innerHTML = `
      
      <div class="weather" >

      <div class="img"><img src="http://openweathermap.org/img/wn/${data2.weather[0].icon}@2x.png" alt=""></div>

      <div class="temp">${data2.main.temp}°C</div>

     <h2>${data2.weather[0].description}</h2>

     </div>

     </div>
      
      `

})
