var config = require('cloud/config/config');

var Article = Parse.Object.extend('Article', {
  // Instance methods

  // NO translation from Nikkei format, this is a todo
  saveNikkeiArticle: function(nikkeiArticle) {

    // Hardcode these for now
    // Use Maps API to get lat/long later
    var locationPoint = new Parse.GeoPoint({
      latitude: 40.0,
      longitude: -30.0
    });

    this.save({
      title: nikkeiArticle.title,
      category: nikkeiArticle.uid,
      body: nikkeiArticle.body,
      source: 'Nikkei',
      sourceId: nikkeiArticle.kiji_id,
      location: locationPoint
    });
  }
}, {
  // Class methods
});

// Parse.Cloud.job('getNikkei', function(request, status) {
// });

Parse.Cloud.define('testDateParse', function(req, res) {
  var endDate = new Date();
});

Parse.Cloud.define('test', function(req, res) {
  Parse.Cloud.httpRequest({
    url: config.NIKKEI.BASEURL + 'xsearch',
    params: {
      keyword: 'Waterloo',
      date_from: '2014-03-01 00:00',
      date_to: '2014-03-08 00:00',
      fields: 'body index_images'
    },
    headers: {
      'X-Nikkei-Application-Id': config.NIKKEI.APP_ID
    },
    success: function(httpResponse) {
      console.log('Success');
      console.log(httpResponse);
      res.success(httpResponse);
    },
    error: function(httpResponse) {
      console.error('Request failed with response code ' + httpResponse.status);
      res.error(httpResponse);
    }
  });
});

module.exports = Article;