function solution() {
  const utcToday = new Date();
  const date = new Date(utcToday.setHours(utcToday.getHours() + 9));

  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  var dateString = year + "-" + month + "-" + day;

  return `${dateString}`;
}

console.log(solution());
