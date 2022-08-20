function isPalindrome(str) {
  if (str.length % 2 === 0) return false;

  const reverseStr = reverse(str);

  if (reverseStr === str) {
    return true;
  }
  return false;
}

function reverse(str) {
  let newStr = "";

  innerReverse(str);
  function innerReverse(str) {
    if (!str) return;
    newStr += str[str.length - 1];
    return innerReverse(str.slice(0, -1));
  }
  return newStr;
}

isPalindrome("awesome"); // false
isPalindrome("foobar"); // false
isPalindrome("tacocat"); // true
isPalindrome("amanaplanacanalpanama"); // true
isPalindrome("amanaplanacanalpandemonium"); // false
