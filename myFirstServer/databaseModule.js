const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webbserver2', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

exports.storeElement = (element) => {
  element.save()
}
