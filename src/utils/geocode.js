const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoiYmFydGVrbW9nIiwiYSI6ImNrZmpnOG95aDA5MWEydW56ZzhkZmQweWQifQ.JkI1ElQocmnXFGEb2vVYSw&limit=1';

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to location services.', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      const { features } = body;
      callback(undefined, {
        latitude: features[0].center[1],
        longitude: features[0].center[0],
        location: features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
