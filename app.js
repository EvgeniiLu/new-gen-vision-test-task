let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function filteredCourses(arr) {
  if (arr[0] !== null && arr[1] === null)
    return courses.filter((value) => {
      if (value.prices[0] !== null) return value.prices[0] >= arr[0];
      else if (value.prices[1] !== null) return value.prices[1] > arr[0];
      else return value;
    });

  if (arr[1] !== null && arr[0] === null)
    return courses.filter((value) => {
      if (value.prices[1] !== null) return value.prices[1] <= arr[1];
      else if (value.prices[0] !== null) return value.prices[0] <= arr[1];
      else return value;
    });

  if (arr[0] !== null && arr[1] !== null)
    return courses.filter((value) => {
      if (value.prices[0] !== null && value.prices[1] !== null)
        return value.prices[0] >= arr[0] && value.prices[1] <= arr[1];
      if (value.prices[0] === null && value.prices[1] !== null)
        return value.prices[1] <= arr[1] && value.prices[1] >= arr[0];
      if (value.prices[0] !== null && value.prices[1] === null)
        return value.prices[0] >= arr[0] && value.prices[0] <= arr[1];
    });
}

console.log(filteredCourses(requiredRange3));
