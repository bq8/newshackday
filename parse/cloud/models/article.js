var config = require('cloud/config/config');

var Article = Parse.Object.extend('Article', {
  // Instance methods
  // saveNikkeiArticle: function(nikkeiArticle) {
  //   this.save({
  //     title: nikkeiArticle.title,
  //     location: nikkeiArticle.location
  //   });
  // }
}, {
  // Class methods
});

// Parse.Cloud.job('getNikkei', function(request, status) {
// });

Parse.Cloud.define('test', function(req, res) {
  Parse.Cloud.httpRequest({
    url: config.NIKKEI.BASEURL + 'xsearch',
    params: {
      keyword: 'エボラ',
      baitai_id: '20141016', // Date?
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