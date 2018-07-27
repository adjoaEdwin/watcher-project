const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
if (process.env.MODE == 'development') {
  mongoose.connect('mongodb://localhost:27017/watcher', { useNewUrlParser: true });
} else {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
}

mongoose.connection.on('error', (e) => {
  console.log("There was an error, make sure mongodb is running.");
  console.log(e);
  process.exit();
})

const server = app.listen(process.env.PORT, () => {
  console.log(`Watcher serving on port ${process.env.PORT}`)
});

module.exports = server;