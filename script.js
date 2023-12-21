
//  

// second
const delete_part = document.querySelectorAll(".delete_part");
const form_iteam = document.querySelectorAll(".form_iteam");
const curent_display = document.querySelector(".current_display");
const result_diplay = document.querySelector(".result");
const sqrt_btn = document.querySelector(".sqrt");
console.log(typeof sqrt_btn.value);

let result;
let array = [];
// declaare variable for last result
let final_result;

function to_array(e) {
  e.preventDefault();
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

  curent_display.textContent = array.join("");
  if (current_value === "=") {
    curent_display.textContent = "0.00";
    final_result = processArrayInGroups(array);
    result_diplay.textContent = final_result;
  }
}

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

function sqrts(arg) {
  return Math.sqrt(result);
}

function processArrayInGroups(array) {
  // set up the initial three numbers
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
  // start of the left array elements
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

form_iteam.forEach(function (element) {
  element.addEventListener("click", to_array);
});

delete_part.forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    // remove the last element from the curent_display
    if (e.target.value === "DEL") {
      array.pop();
      curent_display.textContent = array.join("");
      if (!isNaN(parseInt(array[array.length - 1]))) {
        // array.pop()
        
        final_result = processArrayInGroups(array);
        result_diplay.textContent = final_result;
      }
      else if(isNaN(parseInt(array[array.length - 1]))){
         if(array.length===1){
           result_diplay.textContent===array[1];
         } else{
          final_result = processArrayInGroups(array);
          result_diplay.textContent = final_result;
         }
        
      }
    } else if (e.target.value === "AC") {
      array.splice(0);
      curent_display.textContent = "0.00";
      result_diplay.textContent = "0.00";
    }
  });
});