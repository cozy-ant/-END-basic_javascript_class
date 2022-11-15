
let s = ppyy;
const arr = s.toLowerCase().split('');
for (let set of arr) {
  let case1 = 0;
  let case2 = 0;
  if (set === 'p') {
    case1++;
  } else if (set === 'y') {
    case2++;
  }
  if (case1 === case2 || (case1 === 0 && case2 === 0)) {
    return 'true';
  } else {
    return false;
  }
}
case1 = 0;
case2 = 0;



console.log();