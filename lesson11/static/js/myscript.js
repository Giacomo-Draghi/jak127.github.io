//Function to get current year
document.getElementById('Year').innerHTML = new Date().getFullYear();

function toggleMenu() {
	document.getElementsByClassName("menu-ul")[0].classList.toggle("responsive");
}

function on_resize() {
    let header_element = document.getElementById('headerElement');
    let int_viewport_width = window.innerWidth;

    if (is_friday == 5) {
        if (int_viewport_width < 630) {
            header_element.style.paddingTop = "70px";
        } else if (int_viewport_width >= 630 && int_viewport_width <= 700) {
            header_element.style.paddingTop = "50px";
        } else {
            header_element.style.paddingTop = "30px";
        }
    }
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}