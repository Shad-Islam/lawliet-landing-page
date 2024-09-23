let arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let target = 25;
let left = 0;
let right = arr.length - 1;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    console.log(`Find the target value ${target} at index ${mid}`);
    break;
  } else if (arr[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
