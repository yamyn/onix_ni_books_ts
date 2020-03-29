// In this file you can configure migrate-mongo
const path = require('path');
const migDirPath = path.join(__dirname, 'migrationsScripts');
const config = {
    mongodb: {
        url: 'mongodb://localhost:27017',
        databaseName: 'books_db',
        options: {
            // removes a deprecation warning when connecting
            useNewUrlParser: true,
            // removes a deprecating warning when connecting
            useUnifiedTopology: true,
            // increase connection timeout to 1 hour
            //   connectTimeoutMS: 3600000,
            // increase socket timeout to 1 hour
            //   socketTimeoutMS: 3600000,
        },
    },

    // The migrations dir, can be an relative or absolute path.
    migrationsDir: migDirPath,

    // The mongodb collection where the applied changes are stored.
    changelogCollectionName: 'booksmodel',
};

// Return the config as a promise
module.exports = config;
