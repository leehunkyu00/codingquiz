// 535. Encode and Decode TinyURL
// https://leetcode.com/problems/encode-and-decode-tinyurl/


var urlDict = {};
var baseUrl = "http://tinyurl.com/";
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    var randomKey = getRandomUrl();
    urlDict[randomKey] = longUrl;

    return baseUrl + randomKey;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    var key = shortUrl.split(baseUrl)[1];

    return urlDict[key];
};

var getRandomUrl = function() {
    var keys = Object.keys(urlDict);
    var ranKey;
    while (1) {
        var ranKey = makeid(6);
        if (keys.indexOf(ranKey) == -1) {
            break;
        }
    }

    return ranKey;
}

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

//encode("https://leetcode.com/problems/design-tinyurl");
console.log(decode(encode("https://leetcode.com/problems/design-tinyurl")));