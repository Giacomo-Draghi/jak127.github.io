const requestURL = 'https://jak127.github.io/final_project/temple.json';
fetch(requestURL) .then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const temple = jsonObject['temple'];
    for (let i = 0; i < temple.length; i++ ) {
        
        let div = document.createElement ('div');
        div.setAttribute('class', 'box');
        let sec = document.createElement ('section');
        let div2 = document.createElement ('div');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
        let h4 = document.createElement('h4');
        let p6 = document.createElement('p');
        let p7 = document.createElement('p');
        let p8 = document.createElement('p');
        let hh4 = document.createElement('h4');
        let img = document.createElement('img');
        img.setAttribute ('src', temple[i].imageurl);
        img.setAttribute ('alt', temple[i].name);

        h2.textContent = temple[i].name;
        p1.textContent = 'Address: ' + temple[i].address;
        p2.textContent = 'Telephone: '+ temple[i].telephone;
        p3.textContent = 'E-mail: ' + temple[i].email;
        p4.textContent = 'Services: ' + temple[i].services;
        p5.textContent = 'Dedicated on: ' + temple[i].history;
        h4.textContent = 'Ordinance Schedule:';
        p6.textContent = temple[i].session1;
        p7.textContent = temple[i].session2;
        hh4.textContent ='Closure:';
        p8.textContent = temple[i].closure;
        
        sec.appendChild(h2);
        sec.appendChild(p2);
        sec.appendChild(p3);
        sec.appendChild(p4);
        sec.appendChild(p5);
        sec.appendChild(h4);
        sec.appendChild(p6);
        sec.appendChild(p7);
        sec.appendChild(hh4);
        sec.appendChild(p8);
        div2.appendChild(img);
        div.appendChild(div2);
        div.appendChild(sec);

        document.querySelector('div.json').appendChild(div);

    }  
    
});




/*
let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = temple[i].name + ' ' + temple[i].lastname;
        p1.textContent = 'Date of Birth: ' + temple[i].birthdate;
        p2.textContent = 'Place of Birth: ' + temple[i].birthplace;
        image.setAttribute('src', temple[i].imageurl);
        image.setAttribute('alt',temple[i].name +' '+ temple[i].lastname + '-'+ temple[i].order);

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
        */