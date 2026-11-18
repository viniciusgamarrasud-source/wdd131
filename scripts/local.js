const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent =
`Última Modificação: ${document.lastModified}`;

const temperature = 8;
const windSpeed = 10;

function calcularSensacaoTermica(temp, vento) {
    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(vento, 0.16)) +
        (0.3965 * temp * Math.pow(vento, 0.16))
    );
}

const windChill = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent =
        `${calcularSensacaoTermica(
            temperature,
            windSpeed
        ).toFixed(1)} °C`;
} else {
    windChill.textContent = "N/A";
}