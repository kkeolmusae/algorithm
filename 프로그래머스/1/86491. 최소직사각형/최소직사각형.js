function solution(sizes) {
  let w = 0; // width;
  let h = 0; // height;
  sizes.map((size) => {
    size.sort((a,b)=> {return Number(a) - Number(b)});
    w = Math.max(size[0], w);
    h = Math.max(size[1], h);
  });
  return w * h;
}