const input = document.querySelector('#input');
const button = document.querySelector("#button");
const container = document.querySelector("#container");

button.addEventListener('click', () => {
  if (input.value.trim() === "+") {
  input.style.display = "none";
  button.style.display = "none";

  // create new fields and button
  const newButton = document.createElement('button');
  newButton.textContent = "Calculate";
  newButton.style.marginTop = "0.7rem";
  newButton.style.width = "5rem";
  newButton.style.height = "2rem";
  newButton.style.borderRadius = "12%";
  container.appendChild(newButton);
  
  const firstInput = document.createElement('input');
  firstInput.id = "firstInput";
  firstInput.type = "number";
  firstInput.placeholder = "First Number";
  container.insertBefore(firstInput, newButton);

  const secondInput = document.createElement('input');
  secondInput.id = "secondInput"
  secondInput.type = "number";
  secondInput.placeholder = "Second Number";
  container.insertBefore(secondInput, newButton);

  // style new fields  
  container.style.display = "flex";
  container.style.flexDirection = "column";
  button.style.marginTop = "1rem";
  secondInput.style.marginTop = "0.5rem";

    // get result
    newButton.addEventListener('click', () => {
      if (firstInput.value !== "" && secondInput.value !== "") {
    newButton.disabled = true;
    const result = (Number(firstInput.value) + Number(secondInput.value));
    const showResult = document.createElement('h1');
    showResult.textContent = `The result is ${result} . `
    container.appendChild(showResult);
    
    // reset
    const resetBtn = document.createElement('button');
    resetBtn.textContent = "Reset";
    resetBtn.style.marginTop = "0rem";
    resetBtn.style.width = "5rem";
    resetBtn.style.height = "2rem";
    resetBtn.style.borderRadius = "12%";
    container.appendChild(resetBtn);

    resetBtn.addEventListener('click', () => {
      newButton.remove();
      firstInput.remove();
      secondInput.remove();
      showResult.remove();
      resetBtn.remove();
      
      input.value = "";
      input.style.display = "";
      button.style.display = "";
      button.style.marginTop = "0.2rem"
      button.style.marginLeft = "1.2rem"
      button.style.padding = "7px";
      container.style.flexDirection = "row";
    }) } else {
      alert("You must provide numbers for both fields.")
    }
  
  }) 

} else if (input.value.trim() === "-") {
  input.style.display = "none";
  button.style.display = "none";

  // create new fields and button
  const newButton = document.createElement('button');
  newButton.textContent = "Calculate";
  newButton.style.marginTop = "0.7rem";
  newButton.style.width = "5rem";
  newButton.style.height = "2rem";
  newButton.style.borderRadius = "12%";
  container.appendChild(newButton);
  
  const firstInput = document.createElement('input');
  firstInput.id = "firstInput";
  firstInput.type = "number";
  firstInput.placeholder = "First Number";
  container.insertBefore(firstInput, newButton);

  const secondInput = document.createElement('input');
  secondInput.id = "secondInput"
  secondInput.type = "number";
  secondInput.placeholder = "Second Number";
  container.insertBefore(secondInput, newButton);

  // style new fields  
  container.style.display = "flex";
  container.style.flexDirection = "column";
  button.style.marginTop = "1rem";
  secondInput.style.marginTop = "0.5rem";

    // get result
    newButton.addEventListener('click', () => {
      if (firstInput.value !== "" && secondInput.value !== "") {
    newButton.disabled = true;
    const result = (Number(firstInput.value) - Number(secondInput.value));
    const showResult = document.createElement('h1');
    showResult.textContent = `The result is ${result} . `
    container.appendChild(showResult);
    
    // reset
    const resetBtn = document.createElement('button');
    resetBtn.textContent = "Reset";
    resetBtn.style.marginTop = "0rem";
    resetBtn.style.width = "5rem";
    resetBtn.style.height = "2rem";
    resetBtn.style.borderRadius = "12%";
    container.appendChild(resetBtn);

    resetBtn.addEventListener('click', () => {
      newButton.remove();
      firstInput.remove();
      secondInput.remove();
      showResult.remove();
      resetBtn.remove();
      
      input.value = "";
      input.style.display = "";
      button.style.display = "";
      button.style.marginTop = "0.2rem"
      button.style.marginLeft = "1.2rem"
      button.style.padding = "7px";
      container.style.flexDirection = "row";
    }) } else {
      alert("You must provide numbers for both fields.")
    }
  
  }) 

} else if (input.value.trim() === "*") {
  input.style.display = "none";
  button.style.display = "none";

  // create new fields and button
  const newButton = document.createElement('button');
  newButton.textContent = "Calculate";
  newButton.style.marginTop = "0.7rem";
  newButton.style.width = "5rem";
  newButton.style.height = "2rem";
  newButton.style.borderRadius = "12%";
  container.appendChild(newButton);
  
  const firstInput = document.createElement('input');
  firstInput.id = "firstInput";
  firstInput.type = "number";
  firstInput.placeholder = "First Number";
  container.insertBefore(firstInput, newButton);

  const secondInput = document.createElement('input');
  secondInput.id = "secondInput"
  secondInput.type = "number";
  secondInput.placeholder = "Second Number";
  container.insertBefore(secondInput, newButton);

  // style new fields  
  container.style.display = "flex";
  container.style.flexDirection = "column";
  button.style.marginTop = "1rem";
  secondInput.style.marginTop = "0.5rem";

    // get result
    newButton.addEventListener('click', () => {
      if (firstInput.value !== "" && secondInput.value !== "") {
    newButton.disabled = true;
    const result = (Number(firstInput.value) * Number(secondInput.value));
    const showResult = document.createElement('h1');
    showResult.textContent = `The result is ${result} . `
    container.appendChild(showResult);
    
    // reset
    const resetBtn = document.createElement('button');
    resetBtn.textContent = "Reset";
    resetBtn.style.marginTop = "0rem";
    resetBtn.style.width = "5rem";
    resetBtn.style.height = "2rem";
    resetBtn.style.borderRadius = "12%";
    container.appendChild(resetBtn);

    resetBtn.addEventListener('click', () => {
      newButton.remove();
      firstInput.remove();
      secondInput.remove();
      showResult.remove();
      resetBtn.remove();
      
      input.value = "";
      input.style.display = "";
      button.style.display = "";
      button.style.marginTop = "0.2rem"
      button.style.marginLeft = "1.2rem"
      button.style.padding = "7px";
      container.style.flexDirection = "row";
    }) } else {
      alert("You must provide numbers for both fields.")
    }
  
  }) 

} else if (input.value.trim() === "/") {
  input.style.display = "none";
  button.style.display = "none";

  // create new fields and button
  const newButton = document.createElement('button');
  newButton.textContent = "Calculate";
  newButton.style.marginTop = "0.7rem";
  newButton.style.width = "5rem";
  newButton.style.height = "2rem";
  newButton.style.borderRadius = "12%";
  container.appendChild(newButton);
  
  const firstInput = document.createElement('input');
  firstInput.id = "firstInput";
  firstInput.type = "number";
  firstInput.placeholder = "First Number";
  container.insertBefore(firstInput, newButton);

  const secondInput = document.createElement('input');
  secondInput.id = "secondInput"
  secondInput.type = "number";
  secondInput.placeholder = "Second Number";
  container.insertBefore(secondInput, newButton);

  // style new fields  
  container.style.display = "flex";
  container.style.flexDirection = "column";
  button.style.marginTop = "1rem";
  secondInput.style.marginTop = "0.5rem";

    // get result
    newButton.addEventListener('click', () => {
      if (firstInput.value !== "" && secondInput.value !== "") {
    newButton.disabled = true;
    const result = (Number(firstInput.value) / Number(secondInput.value));
    const showResult = document.createElement('h1');
    showResult.textContent = `The result is ${result} . `
    container.appendChild(showResult);
    
    // reset
    const resetBtn = document.createElement('button');
    resetBtn.textContent = "Reset";
    resetBtn.style.marginTop = "0rem";
    resetBtn.style.width = "5rem";
    resetBtn.style.height = "2rem";
    resetBtn.style.borderRadius = "12%";
    container.appendChild(resetBtn);

    resetBtn.addEventListener('click', () => {
      newButton.remove();
      firstInput.remove();
      secondInput.remove();
      showResult.remove();
      resetBtn.remove();
      
      input.value = "";
      input.style.display = "";
      button.style.display = "";
      button.style.marginTop = "0.2rem"
      button.style.marginLeft = "1.2rem"
      button.style.padding = "7px";
      container.style.flexDirection = "row";
    }) } else {
      alert("You must provide numbers for both fields.")
    }
  
  }) 

} else {
  input.value = "";
  alert("Invalid operator. You must choose +, -, *, or / .");
}
} );
