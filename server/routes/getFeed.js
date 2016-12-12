var router = require('express').Router();
var pg = require('pg');
var feed = require('feedparser');
var request = require('request');
var config = require('../config/dbconfig');

var pool = new pg.Pool({
	database: config.database
});

router.get('/', function (req, res, next) {
	pool.connect()
		.then(function (client) {
			// make query
			client.query(
					'SELECT * FROM rss_url')
				.then(function (result) {
					client.release();
					next();
					// res.send(result.rows);
					var req = request(result)
					var feedparser = new feed([]);
					feedparser.on('error', callback);
					feedparser.on('readable', function () {
						var stream = this
						var meta = this.meta
						var item;

						while (item = stream.read()) {
							console.log(item);
						}
					});
				})
				.catch(function (err) {
					// error
					client.release();
					res.sendStatus(500);
				});
		});
});


["api", "twitter", "facebook", "maps", "flickr", "delicious", "meme", "yahoo", "google"]

'{api, twitter, facebook, maps, flickr, delicious, meme, yahoo, google}'






module.exports = router;
