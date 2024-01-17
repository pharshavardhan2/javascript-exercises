const findTheOldest = function(people) {
  return people.sort((a, b) => {
    yearOfDeathA = "yearOfDeath" in a ? a.yearOfDeath : new Date().getFullYear();
    yearOfDeathB = "yearOfDeath" in b ? b.yearOfDeath : new Date().getFullYear();
    return (yearOfDeathA - a.yearOfBirth) - (yearOfDeathB - b.yearOfBirth);
  }).at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
