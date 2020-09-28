const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=9bdf00c4def029700be74f09d2d02c3f&query=' +
    longitude +
    ',' +
    latitude +
    '&units=m';

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to forecast services.', undefined);
    } else if (body.error) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      const { weather_descriptions, temperature, feelslike } = body.current;
      callback(
        undefined,
        weather_descriptions +
          '. Current temperature is ' +
          temperature +
          ' degrees and it feels like ' +
          feelslike +
          ' degrees out.'
      );
    }
  });
};

module.exports = forecast;
