const requestURL = 'https://jak127.github.io/final_project/temple.json';
fetch(requestURL) .then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const temple = jsonObject['temple'];
    for (let i = 0; i < temple.length; i++ ) {
        
        let div = document.createElement ('div');
        div.setAttribute('class', 'box-' + [i]);
        let sec = document.createElement ('section');
        let div2 = document.createElement ('div');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let br = document.createElement('br');
        let img = document.createElement('img');
        //img.setAttribute('src', 'img/image-placeholder1.jpg');
        img.setAttribute ('src', temple[i].imageurl);
        img.setAttribute ('alt', temple[i].name);

        h2.textContent = temple[i].name;
        p1.textContent = 'Address: ' + temple[i].address + '<br>' +'Telephone: '+ temple[i].telephone + br + 'E-mail: ' + temple[i].email + br + 'Services: ' + temple[i].services + br +
            'Dedicated on: ' + temple[i].hystory + br + 'Ordinance Schedule: ' + br + temple[i].session1 + br + temple[i].session2 + br + 'Closure: ' + br + temple[i].closure;
        
        sec.appendChild(h2);
        sec.appendChild(p1);
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