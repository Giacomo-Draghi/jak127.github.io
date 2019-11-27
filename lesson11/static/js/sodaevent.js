const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL) .then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const towns = jsonObject['towns'];
    const eve = towns[5].events;
    let h3 = document.createElement('h3');
    h3.textContent = 'Upcoming Events in Preston: ';
    document.querySelector('div.events').appendChild(h3);
    for (let i = 0; i < eve.length; i++ ) {
        let event = document.createElement('section');
        let p1 = document.createElement('p');
        const txt = 'Upcoming Events in Soda Springs: ';

        p1.textContent = towns[5].events[i];

        event.appendChild(p1);

        document.querySelector('div.events').appendChild(event);
    } 
});