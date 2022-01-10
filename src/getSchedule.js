const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function noValidParameter() {
  const schedule = {};
  Object.entries(hours).forEach((day) => {
    const exhib = species.filter((sp) => sp.availability.includes(day[0])).map((sp) => sp.name);
    let result = {
      [day[0]]: {
        officeHour: `Open from ${day[1].open}am until ${day[1].close}pm`,
        exhibition: exhib,
      },
    };
    if (Object.values(day)[0] === 'Monday') {
      result = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
      };
    }
    Object.assign(schedule, result);
  });
  return schedule;
}

function getSchedule(scheduleTarget) {
  const noParameter = noValidParameter();
  if (noParameter[scheduleTarget]) {
    const result = {
      [scheduleTarget]: noParameter[scheduleTarget],
    };
    return result;
  }
  const animalGiven = species.find((specie) => specie.name === scheduleTarget);
  if (animalGiven) {
    return animalGiven.availability;
  }
  return noParameter;
}

module.exports = getSchedule;
