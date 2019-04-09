// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  function parsing(obj){
    if(obj === 'false') {
      return false
    } 
    if (obj === 'true') {
      return true
    } 
    if (obj === 'null') {
      return null
    } 
    
    if(!isNaN(obj)) {
      return +obj
    }
    if(obj === '[]') {
      let arr = []
      return arr
    }
    if(obj === '{}') {
      return {}
    }
    if(obj[0] === '"' && obj[obj.length-1] === '"') {
      return `${obj.slice(1, obj.length-1)}`
    }
    if(obj[0] === '[') {
      obj = obj.slice(1, obj.length-1)
      let myRegexp = /\[([^)]+)\]/
      console.log(myRegexp.exec(obj)) 
      let arr = []
      obj = obj.split(',')
      for(let i=0; i<obj.length; i++) {
        arr.push(parsing(obj[i]))
      }
      return arr
    }
    if(obj[0] === '{') {
      let newObj = {}
      obj = obj.slice(1, obj.length-1)
      var pairs = obj.split(',')
    //  console.log(pairs)
      for(let j=0; j<pairs.length; j++) {
        var indivs = obj.split(':')
        newObj[parsing(indivs[0])] = parsing(indivs[1])
     }
      return newObj
    }
  }
  return parsing(json)
};

console.log(parseJSON('["boo",["foo"]]'))