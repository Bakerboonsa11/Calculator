
    // second 

const form = document.querySelector(".form");

function sum(arg) {
  return arg[0] + arg[2];
}

function subtract(arg) {
  return arg[0] - arg[2];
}

function divide(arg) {
  return arg[0] / arg[2];
}

function multiply(arg) {
  return arg[0] * arg[2];
}

function modulo(arg) {
  return arg[0] % arg[2];
}

let result;
let array = [];

function processArrayInGroups(array) {
//  setupping the initial three numbers
    const initialGroup = array.slice(0, 3);
  initialGroup[0] = parseInt(initialGroup[0]);
  initialGroup[2] = parseInt(initialGroup[2]);
  if (initialGroup[1] === "+") {
    result = sum(initialGroup);
  } else if (initialGroup[1] === "-") {
    result = subtract(initialGroup);
  } else if (initialGroup[1] === "/") {
    result = divide(initialGroup);
  } else if (initialGroup[1] === "*") {
    result = multiply(initialGroup);
  } else if (initialGroup[1] === "%") {
    result = modulo(initialGroup);
  }
// start of the left arrays element
  for (let i = 3; i < array.length; i += 2) {
    const group = array.slice(i, i + 2);
    group.unshift(result);
    group[0] = parseInt(group[0]);
    group[2] = parseInt(group[2]);

    if (group[1] === "+") {
      result = sum(group);
    } else if (group[1] === "-") {
      result = subtract(group);
    } else if (group[1] === "/") {
      result = divide(group);
    } else if (group[1] === "*") {
      result = multiply(group);
    } else if (group[1] === "%") {
      result = modulo(group);
    }
  }

  return result;
}

form.addEventListener("click", function (e) {
    let current_value = e.target.value;

    if (current_value !== "=") {
      if (!isNaN(parseInt(current_value))) {
        if (array.length > 0 && !isNaN(parseInt(array[array.length - 1]))) {
          array[array.length - 1] += current_value;
        } else {
          array.push(current_value);
        }
      } else {
        array.push(current_value);
      }
    }

    if (current_value === "=") {
      console.log(array);
      console.log(processArrayInGroups(array));
    }
  });
console.table(array)


