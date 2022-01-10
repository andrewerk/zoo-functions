const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// console.log(species);
// const northEast = [];
// const northWest = [];
// const southEast = [];
// const southWest = [];

// const result = {
//   NE: northEast, NW: northWest, SE: southEast, SW: southWest,
// };

// function noParametersGiven() {
//   species.forEach((specie) => {
//     if (specie.location === 'NE') { northEast.push(specie.name); }
//     if (specie.location === 'NW') { northWest.push(specie.name); }
//     if (specie.location === 'SE') { southEast.push(specie.name); }
//     if (specie.location === 'SW') { southWest.push(specie.name); }
//   });
//   return result;
// }

const completeMap = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};

function speciesArea(...areaInput) {
  areaInput.forEach((area) =>
    species.forEach((specie) => {
      if (specie.location === area) {
        const group = { [specie.name]: specie.residents.map((resident) => resident.name) };
        completeMap[area].push(group);
      }
    }));
}

function getAnimalMap(options) {
  const map = speciesArea('NE', 'NW', 'SE', 'SW');
}

module.exports = getAnimalMap;
