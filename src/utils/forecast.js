const request = require("postman-request");

function forecast(lat, lon, callback) {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6341498968e30608a6f2eb396a8b35c5`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Connect to network", undefined);
    } else if (body.error) {
      callback("Cant able to find temp", undefined);
    } else {
      callback(undefined, response.body.weather[0].description);
    }
  });
}

module.exports = forecast;
