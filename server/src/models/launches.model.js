const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer ISI',
  launchDate: new Date('December 27, 2030'),
  destination: 'Kepler-442 b',
  customer: ['SPACEX', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    launch.flightNumber,
    Object.assign(launch, {
      customers: ['Space X', 'NASA'],
      flightNumber: latestFlightNumber,
    })
  );
}

module.exports = {
  getAllLaunches,
};
