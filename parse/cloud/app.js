var ArticleHandler = require('cloud/controllers/article');

Parse.Cloud.define('testmain', function(request, response) {
  console.log('Hello world!');
});

/*
 * getArtcile
 *
 * Returns an entire article.
 *
 * Expected input (in request.params):
 *   articleId      : String, the objectId of the item
 */
Parse.Cloud.define('getArticle', function(request, response) {

});