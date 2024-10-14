// Weather Fetch Script (Using OpenWeather API)
const weatherElement = document.getElementById('weather');

// Toggle sidebar
document.getElementById('toggleSidebar').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('d-none');
});

// Function to fetch weather data
function fetchWeather() {
    const apiKey = '2801e5c79a7a720c5f9fade426db3084'; // Replace with your actual API key
    const city = 'New Delhi'; // Set city to New Delhi
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const temp = data.main.temp;
            const description = data.weather[0].description;
            weatherElement.innerHTML = `<p> ${city}: ${temp}°C - ${description}</p>`;
        })
        .catch(error => {
            console.error('Fetch error: ', error);
            weatherElement.innerHTML = '<p>Unable to fetch weather data</p>';
        });
}

// Fetch weather on page load
fetchWeather();
