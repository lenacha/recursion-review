// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  let result = [];
  let body = $('body')['0'];
  function findClass (parent) {
    if(parent.classList !== undefined && parent.classList.length !== 0){
      for(let i = 0; i < parent.classList.length; i++){
        if(parent.classList[i] === className) {
          result.push(parent);
        }
      }
    }
    let j=0;
    while(j < parent.childNodes.length) {
      findClass(parent.childNodes[j]);      
      j++
    }
  }
  findClass(body);
  return result;
};
