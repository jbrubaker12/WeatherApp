function init(event) {
  event.preventDefault(); // prevent the default submition

  var selectCountry = document.getElementById("Country");
  var selectedCountry = selectCountry.value;
  var zipCode = document.getElementById("zip-code").value;
  const apiKey = 'dca04177ae10a85c31b9294898762e91';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${selectedCountry}&units=imperial&appid=${apiKey}`;
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Parse the data to extract the weather information you need
    document.getElementById('temperature').innerHTML=`<h4>Temperature: ${data["main"].temp}°F</h4>`;
    document.getElementById('wind-speed').innerHTML=`<h4>Wind Speed: ${data['wind'].speed} mph</h4>`;
    document.getElementById('sky').innerHTML=`<h4>The sky's are ${data['weather'][0].main} today!</h4>`;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

const button = document.getElementById('my-button');
button.addEventListener('click',init)
