console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']

function capitalizeFirst(arr) {
  const newArr = [];
  for (let str of arr) {
    const newStr = str[0].toUpperCase() + str.slice(1, str.length);
    newArr.push(newStr);
  }
  return newArr;
}
