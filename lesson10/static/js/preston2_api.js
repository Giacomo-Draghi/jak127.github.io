var apiURL2 ='https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=2b91a52d5a023d1d2b5394b4e8268e24';

fetch(apiURL2)
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


        document.getElementById("day" + count).textContent = day;
        document.getElementById("img" + count).setAttribute('src', imagesrc);
        document.getElementById("img" + count).setAttribute('alt', imagealt);
        document.getElementById("tem" + count).textContent = forecast_list[i].main.temp + "°F";
        
              
        count += 1;  
      }
    }
  });