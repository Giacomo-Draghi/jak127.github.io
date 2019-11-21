var apiURL ='https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=2b91a52d5a023d1d2b5394b4e8268e24';
//var apiURL2 ='https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=2b91a52d5a023d1d2b5394b4e8268e24';
var chill, chillValue;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let data = jsObject;
    let current = data.weather[0].main;
    document.querySelector('span#current').append(current);
    let temperature = data.main.temp;
    document.querySelector('span#temperature').append(temperature);
    let humidity = data.main.humidity;
    document.querySelector('span#humidity').append(humidity);
    let speed = data.wind.speed;
    document.querySelector('span#speed').append(speed);
    
    /*temperature = parseFloat(document.getElementById('temperature').innerHTML);
    speed = parseFloat(document.getElementById('speed').innerHTML);*/
    chill = document.getElementById('chill');
    chillValue = compute_wind_chill(temperature, speed);

    if (temperature <= 50 && speed > 3) {
      chill.innerHTML = chillValue;
    } else {
      chill.innerHTML = 'N/A';
    }
    function compute_wind_chill(temperature, speed) {
      const T = temperature;
      const W = speed;
      const WC = 35.74 + (0.6215 * T) - (35.75 * speed ** 0.16) + (0.4275 * T * W ** 0.16)
  
      return Math.floor(WC)
  }
});

/*function compute_wind_chill(temperature, speed) {
    const T = temperature;
    const W = speed;
    const WC = 35.74 + (0.6215 * T) - (35.75 * speed ** 0.16) + (0.4275 * T * W ** 0.16)

    return Math.floor(WC)
}*/

/*fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let forecast_list = jsObject.list;
    let count = 1;
    let weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < (forecast_list.length); i++) {
     let text = forecast_list[i].dt_txt.split(" ");
      if (text[1] == '18:00:00'){ 
        const date = new Date(forecast_list[i].dt_txt);
        const day = weekdays[date.getDay()];

        let imagesrc = '//openweathermap.org/img/w/' + forecast_list[i].weather[0].icon + '.png';
        let imagealt = '//openweathermap.org/img/w/' + forecast_list[i].weather[0].description;


        document.getElementById("day " + count).textContent = day;
        document.getElementById("img " + count).setAttribute('src', imagesrc);
        document.getElementById("img " + count).setAttribute('alt', imagealt);
        document.getElementById("tem " + count).textContent = forecast_list[i].main.temp + "°F";
        
              
        count += 1;  
      }
    }
  }); */