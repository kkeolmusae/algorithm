validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false) // false
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true

function validAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const checkedArr1 = {};
  const checkedArr2 = {};
  for (const data of arr1) {
    checkedArr1[data] = (checkedArr1[data] || 0) + 1;
  }
  for (const data of arr2) {
    checkedArr2[data] = (checkedArr2[data] || 0) + 1;
  }

  for (const data in checkedArr1) {
    if (!checkedArr2[data] || checkedArr1[data] !== checkedArr2[data]) return false;
  }
  return true;
}
