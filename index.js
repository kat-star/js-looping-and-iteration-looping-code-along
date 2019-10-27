// Code your solutions in this file

function writeCards(arr, event) {
  const new_arr = []
  for (let i = 0; i < arr.length; i++) {
    new_arr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
  }
  return new_arr;
}

function countDown(num) {
  let i = 0
  while (i <= num) {
    console.log(i);
    i ++;
  }
}

