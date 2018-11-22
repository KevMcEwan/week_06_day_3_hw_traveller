const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const starts = this.journeys.map((journey) => {
    const journeyStart = journey.startLocation;
    return journeyStart;
  })
  return starts;
};


Traveller.prototype.getJourneyEndLocations = function () {
  const ends = this.journeys.map((journey) => {
    const journeyEnd = journey.endLocation;
    return journeyEnd;
  })
  return ends;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey) => {
    if (journey.transport === transport) {
      return journey;
    }
  });
  return result;
};


Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    if (journey.distance >= minDistance ) {
      return journey;
    }
  });
  return result;
};

Traveller.prototype.distancesArray = function () {
  const distances = this.journeys.map((journey) => {
    const distance = journey.distance;
    return distance;
  })
  return distances
};


Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.distancesArray().reduce((accum, distance) => {
    return accum + distance;
  }, 0);
  return totalDistance;
};



Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
