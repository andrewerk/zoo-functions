const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let children = 0;
  let adults = 0;
  let seniors = 0;
  entrants.forEach((person) => {
    if (person.age < 18) {
      children += 1;
    }
    if (person.age < 50 && person.age > 17) {
      adults += 1;
    }
    if (person.age >= 50) {
      seniors += 1;
    }
  });
  return { child: children, adult: adults, senior: seniors };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entries = countEntrants(entrants);
  const totalAmount = entries.child * prices.child
  + entries.adult * prices.adult
  + entries.senior * prices.senior;
  return totalAmount;
}

module.exports = { calculateEntry, countEntrants };
