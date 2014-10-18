var config = require('cloud/config/config');

var Article = Parse.Object.extend('Article', {
  // Instance methods
}, {
  // Class methods
});

Parse.Cloud.httpRequest({
  url: config.NIKKEI.BASEURL + 'xsearch?',
  params: {
    keyword: '',
    fields: ''
  }
  headers: {
    'X-Nikkei-Application-Id': config.NIKKEI.APP_ID
  },
  success: function(httpResponse) {

  },
  error: function(httpResponse) {
    console.error('Request failed with response code ' + httpResponse.status);

  }
});

module.exports = Article;