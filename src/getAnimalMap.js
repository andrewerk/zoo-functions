const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const northEast = [];
const northWest = [];
const southEast = [];
const southWest = [];

const result = {
  NE: northEast, NW: northWest, SE: southEast, SW: southWest,
};

function noParametersGiven() {
  species.forEach((specie) => {
    if (specie.location === 'NE') { northEast.push(specie.name); }
    if (specie.location === 'NW') { northWest.push(specie.name); }
    if (specie.location === 'SE') { southEast.push(specie.name); }
    if (specie.location === 'SW') { southWest.push(specie.name); }
  });
  return result;
}

function getAnimalMap(options) {
  if (!options) {
    return noParametersGiven();
  }
  if (options.sex === 'male' || options.sex === 'female') {
    return 
  }
}

module.exports = getAnimalMap;
