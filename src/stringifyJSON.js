// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  return helper(obj);
};

function helper(obj) {
  if (typeof obj === 'number') {
    return '' +obj;
  }
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
  if (typeof obj === 'boolean') {
    return ''+ obj;
  }
  if (obj === null) {
    return '' + obj;
  }
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    var result = '[';
    for (var i = 0; i < obj.length; i++) {
      if (result !== '[') {
        result += ',';
      }
      result += helper(obj[i]);
    }
    result += ']';
    return result;
  }
  if (typeof obj === 'object') {
    var result = '{';
    for (var key in obj) {
      if (result !== '{') {
        result += ',';
      }
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        return '{}';
      }
      result += helper(key) + ':' + helper(obj[key]);
    }
    result += '}';
    return result;
  }
  
}