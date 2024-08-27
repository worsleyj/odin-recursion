console.log("test");

function fibs(num) {
  let index = 2;
  const arr = [0, 1];
  while (index < num) {
    arr[index] = arr[index - 1] + arr[index - 2];
    index++;
  }
  return arr;
}

console.log(fibs(8));
