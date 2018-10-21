let mongoose = require('mongoose');
let gracefulShotdown;
let dbURL = 'mongodb://localhost/Loc8r';


if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}
mongoose.connect(dbURL, {
        useNewUrlParser: true,
        useCreateIndex: true
        });


mongoose.connection.on('connected',function () {
    console.log('Mongoose connected to:' + dbURL );
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error:' + err );
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

gracefulShotdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through' + msg);
        callback();
    })
};

process.once('SIGUSR2', function () {
    gracefulShotdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', function () {
    gracefulShotdown('app termination', function () {
        process.exit(0);
    });
});

process.on('SIGTERM', function () {
    gracefulShotdown('Heroku app shutdown', function () {
        process.exit(0);
    });
});
