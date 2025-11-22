document.addEventListener("DOMContentLoaded", () => {
    const temp = 7; // °C
    const wind = 12; // km/h

    // Wind chill calculation (one line)
    function calculateWindChill(tempC, windKmh) {
        return Math.round(
            13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)
        );
    }

    // Display wind chill if conditions are met
    const windChillEl = document.getElementById("windchill");
    if (temp <= 10 && wind > 4.8) {
        windChillEl.textContent = calculateWindChill(temp, wind) + " °C";
    } else {
        windChillEl.textContent = "N/A";
    }

    // Display footer info
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastmodified").textContent = document.lastModified;
});
