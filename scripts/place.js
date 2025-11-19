// FOOTER DATE SETTINGS
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

// WEATHER VARIABLES (STATIC FOR NOW)
const temperature = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wind").textContent);

// WINDCHILL FUNCTION
function calculateWindChill(tempC, windKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(windKmh, 0.16) +
        0.3965 * tempC * Math.pow(windKmh, 0.16)
    ).toFixed(1);
}

// CHECK CONDITIONS
let windChillValue = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChillValue = calculateWindChill(temperature, windSpeed) + " °C";
}

document.getElementById("windchill").textContent = windChillValue;
