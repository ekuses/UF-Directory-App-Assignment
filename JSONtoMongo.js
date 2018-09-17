'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config.js'),
    data = require('./listings');

/* Connect to your database */
mongoose.connect(config.db.uri, { useMongoClient: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    //do somthin
});
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
for (var i = 0; i < data.entries.length;i++)
{
    var obj = data.entries[i];
    var listing = new Listing(obj).save(function (err) {
        //do smthing
    });
}

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */

// node.js needs to wait for mongoose to finish operations before closing connection, give it 1sec
setTimeout(function () {
    mongoose.connection.close();
}, 1000)