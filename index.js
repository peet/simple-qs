var cache = {};

module.exports = {
  parse: function(querystring) {
    if (/^[?#]/.test(querystring)) {
      querystring = querystring.substring(1);
    }

    return cache[querystring] || (cache[querystring] = querystring.split('&').reduce(function(a, pair) {
      var parts = pair.split('=');
      a[parts[0]] = decodeURIComponent(parts[1]);
      return a;
    }, {}));
  }
};