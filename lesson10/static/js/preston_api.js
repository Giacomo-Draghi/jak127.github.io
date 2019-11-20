var apiURL ='https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=2b91a52d5a023d1d2b5394b4e8268e24';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let data = jsObject;
    let current = data.weather[0].main;
    document.querySelector('span#current').append(current);
    let temperature = data.main.temp_max;
    document.querySelector('span#temperature').append(temperature);
    let humidity = data.main.humidity;
    document.querySelector('span#humidity').append(humidity);
    let speed = data.wind.speed;
    document.querySelector('span#speed').append(speed);
  });