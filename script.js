
const delete_part = document.querySelectorAll(".delete_part");
const form_iteam = document.querySelectorAll(".form_iteam");
const curent_display = document.querySelector(".current_display");
const result_diplay = document.querySelector(".result");
const sqrt_btn = document.querySelector(".sqrt");
const root = document.documentElement;


console.log(typeof sqrt_btn.value);

let result;
let array = [];
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
    } 
    else {
          if(current_value===".") {
            console.table(array)
            console.log(array[array.length-1]= array[array.length-1]+current_value);
        
            console.log(array)
          
            
          
          }
          else{array.push(current_value);}
   
   
      // 
    }
  }

  curent_display.placeholder= array.join("");

  if (current_value === "=") {
    // curent_display.textContent = "0.00";
    root.classList.toggle("result_color");
    root.classList.toggle("result_color2");
    
    final_result = processArrayInGroups(array);
    result_diplay.placeholder = final_result;
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
  initialGroup[0] = parseFloat(initialGroup[0]);
  initialGroup[2] = parseFloat(initialGroup[2]);
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
    group[0] = parseFloat(group[0]);
    group[2] = parseFloat(group[2]);

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
      if(array.length===0){
        curent_display.placeholder ="0.00"
        result_diplay.placeholder="0.00"
      } else{
        curent_display.placeholder = array.join("");
        result_diplay.placeholder=processArrayInGroups(array);
        
      }
     
      if (!isNaN(parseInt(array[array.length - 1]))) {
        if(array.length===1){
          //  curent_display.textContent=
           result_diplay.textContent=array[0];
         }
         else{
          final_result = processArrayInGroups(array);
          result_diplay.placeholder = final_result;
         }
     
      }
      else if(isNaN(parseInt(array[array.length - 1]))){
       

         if(array.length===2){
          //  curent_display.textContent=
           result_diplay.placeholder=array[0];
         } else{
          // array.pop()
           
          result_diplay.placeholder = processArrayInGroups(array);
         }
        
      }
    } else if (e.target.value === "AC") {
      array.splice(0);
      curent_display.placeholder = "0.00";
      result_diplay.placeholder= "0.00";
    }
  });
});

sqrt_btn.addEventListener("click",function(e){
      
      if(array.length===1){
         sqrt_result=Math.sqrt(parseInt(array[0]))
         result_diplay.placeholder=sqrt_result;
      }else{
        result=processArrayInGroups(array);
        sqrt_result=Math.sqrt(result)
        result_diplay.placeholder= Math.floor(parseInt(sqrt_result));
      }
});
