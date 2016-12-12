var lodash = require('lodash');
var feed = require('feedparser');
var request = require('request');
var router = require('express').Router();
var pg = require('pg');


var fetchUrl = function (url, callback) {
	var req = request(url);
	req.on('error', callback);
	req.on('response', function (resp) {
		if (resp.statusCode != 200) {
			return callback(new Error(
				'Bad status code ' +
				resp.statusCode +
				' for ' + url
			));
		}
		return callback(null, this);
	});
};
//...run
//...fetchUrl
var fetchItems = function (stream, callback) {
	var parser = new feed(),
		items = [];
	parser.on('error', callback);
	parser.on('end', function (err) {
		if (err) {
			return callback(err);
		}
		return callback(null, items);
	});
	parser.on('readable', function () {
		var item;
		while ((item = this.read())) {
			items.push(item);
		}
	});
	stream.pipe(parser);
};

//...requires
var run = function (step) {
	//...inputs
	this.fetchUrl(url, function (err, stream) {
		if (err) {
			return self.fail(err);
		}
		//Let the parser grab the data
		self.fetchItems(stream, function (err, items) {
			var response = [];
			if (err) {
				return self.fail(err);
			}
			lodash.each(items, function (item) {
				response.push({
					url: item.link,
					title: item.title,
					summary: item.summary,
					author: item.author
				});
			});
			return self.complete(response);
		});
	});
};
//...fetchUrl
//...fetchItems

// {
// 	"inputs": [
// 		{
// 			"id": "url",
// 			"title": "Feed URL"
//       }
//   ],
// 	"outputs": [
// 		{
// 			"id": "url",
// 			"title": "Article URL"
//       }, {
// 			"id": "title",
// 			"title": "Article title"
//       }, {
// 			"id": "summary",
// 			"title": "Article summary"
//       }, {
// 			"id": "author",
// 			"title": "Author"
//       }
//   ]
// }
module.exports = router;
