async function getWeather() {
    let city = document.getElementById("city").value;

    let apiKey = "e3d1a6e0168f895cc721675340bed587";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();

    if (data.cod == 200) {
        let temp = data.main.temp;
        let condition = data.weather[0].main;

        document.getElementById("result").innerHTML =
            `Temperature: ${temp}°C <br> Condition: ${condition}`;
    } else {
        document.getElementById("result").innerHTML =
            "City not found!";
    }
}