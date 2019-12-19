const requestURL = 'https://jak127.github.io/final_project/temple.json';
fetch(requestURL) .then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const temple = jsonObject['temple'];
    for (let i = 0; i < temple.length; i++ ) {
        
        let json = document.createElement ('section');
        

        
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