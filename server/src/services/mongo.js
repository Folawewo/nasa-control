const mongoose = require('mongoose');

const MONGO_URL =
  'mongodb+srv://nasa-api:w7gBHa1srPjhPI57@nasacluster.vntv8zj.mongodb.net/nasa?retryWrites=true&w=majority';

mongoose.connection.once('open', () => {
  console.log('Database Connected!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
