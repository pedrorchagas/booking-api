const bookingRoute = require('./bookingRoute');
const flightsRoute = require('./flightsRoute');

function handleRoutes(app) {
  app.use('/booking', bookingRoute);
  app.use('/flights', flightsRoute);
}

module.exports = handleRoutes;
