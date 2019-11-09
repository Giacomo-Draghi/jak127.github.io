function compute_wind_chill(temperature, speed) {
    const T = temperature;
    const W = speed;
    const WC = 35.74 + (0.6215 * T) - (35.75 * speed ** 0.16) + (0.4275 * T * W ** 0.16)

    return Math.floor(WC)
}

let temperature, speed, chill, chillValue;
temperature = parseFloat(document.getElementById('temperature').innerHTML);
speed = parseFloat(document.getElementById('speed').innerHTML);
chill = document.getElementById('chill');
chillValue = compute_wind_chill(temperature, speed);

if (temperature <= 50 && speed > 3) {
    chill.innerHTML = chillValue;
} else {
    chill.innerHTML = 'N/A';
}