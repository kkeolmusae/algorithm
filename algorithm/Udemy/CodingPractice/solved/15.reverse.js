function reverse(str) {
  let newStr = "";

  innerReverse(str);
  function innerReverse(str) {
    if (!str) return;
    newStr += str[str.length - 1];
    return innerReverse(str.slice(0, -1));
  }
  return newStr;
  // add whatever parameters you deem necessary - good luck!
}

reverse("awesome"); // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
