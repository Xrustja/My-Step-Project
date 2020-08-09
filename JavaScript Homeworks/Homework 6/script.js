let arr = ['hello', 'world', 23, '23', null, true, undefined, 156, 'name'];
let type = 'string';
function filterBy (arr, type) {
  return arr.filter( item => typeof item !== type);
}
console.log(filterBy(arr, type));

