const request = require("postman-request");

const geocode = (address, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=6341498968e30608a6f2eb396a8b35c5`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (body.coord === undefined) {
      callback("Unable to find location try another search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.coord.lat,
        longtitude: response.body.coord.lon,
        location: response.body.name,
      });
    }
  });
};

module.exports = geocode;
