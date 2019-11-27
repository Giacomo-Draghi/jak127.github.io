const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL) .then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const towns = jsonObject['towns'];
    const eve = towns[4].events;
    let h3 = document.createElement('h3');
    h3.textContent = 'Upcoming Events in Preston: ';
    document.querySelector('div.events').appendChild(h3);
    for (let i = 0; i < eve.length; i++ ) {
        let event = document.createElement('section');
        let p1 = document.createElement('p');

        p1.textContent = towns[4].events[i];

        event.appendChild(p1);

        document.querySelector('div.events').appendChild(event);
    } 
});

let date_today = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dececember"];
let days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let is_friday = date_today.getDay();

window.onload = function () {
    document.getElementById('Year').innerHTML = date_today.getFullYear();
    document.getElementById('date').innerHTML = days_of_the_week[date_today.getDay()] +', '+ date_today.getDate() + ' ' + months[date_today.getMonth()] + ' ' + date_today.getFullYear()

    let friday_banner = document.getElementById('friday-banner');

    if (is_friday == 5) {
        friday_banner.style.display = "block";
        on_resize()
    }
}
