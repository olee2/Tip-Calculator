let btn = document.querySelector(".btn");
let bill,
    numPeople,
    tip,
    tipPerson,
    totalPerson;

// Uncheck radio button when custom input is clicked

function uncheck(){
    let radios = document.querySelectorAll("input[name='percent']");
    if (!document.querySelector("#custom").value){
        tip = 0;
        buttonState();
    }
    radios.forEach(element => {
        element.checked = false;
    });
}

// Remove value from custom field if a radio button is choosen 

function radioChoosen(){
    document.getElementById("custom").value = "";
}

function buttonState(){
    isInput = () => Boolean(!tip && !bill && !numPeople);

    if(isInput()){
        btn.disabled = true;
        btn.classList.replace("bg-cyan", "btn-disabled");
    }else{
        btn.disabled = false;
        btn.classList.replace("btn-disabled", "bg-cyan");
    }
}

// Return the choosen tip %

function percentage(){
    try{
        let radio = Number(document.querySelector("input[name='percent']:checked").id);
        return radio / 100;
    }
    catch{
        let custom = Number(document.getElementById("custom").value);
        if(custom){
            return custom / 100;
        }
    }
}

//Reset all values when button i clicked
btn.onclick = function() {
    document.querySelector("#bill").value = "";
    document.querySelector("#people").value = "";
    radioChoosen();
    uncheck();
    calculate();
}


// Validate the input for Bill || People
// If valid return the input
// If zero display error
// If other input return 0

function validateInput(numInput, errorContainer) {
    numInput = numInput;
    error = errorContainer;
    let num = parseInt(numInput.value);

    if(num === 0){
        error.innerHTML = "Can't be Zero";
        numInput.classList.replace("number", "number-error")
        return 0;

    }else if(isNaN(num)){
        numInput.classList.replace("number-error", "number")
        error.innerHTML = "";
        return 0;
    }

    numInput.classList.replace("number-error", "number")
    error.innerHTML = "";
    numInput.value = num;

    return num;
}

// Calculate and display results

function calculate(){
    
    bill = validateInput(document.querySelector("#bill"), document.querySelector(".bill-error")),
    numPeople = validateInput(document.querySelector("#people"), document.querySelector(".people-error")),
    tip = percentage();
    
    let tipPerson = (bill * tip) / numPeople;
    let totalPerson = bill / numPeople + tipPerson;

    buttonState();

    if(tipPerson === Infinity || isNaN(tipPerson)){
        document.querySelector("#tipPerson").innerHTML = "$0.00";
        document.querySelector("#totalPerson").innerHTML = "$0.00";
    }else{
        document.querySelector("#tipPerson").innerHTML = `$${tipPerson.toFixed(2)}`;
        document.querySelector("#totalPerson").innerHTML = `$${totalPerson.toFixed(2)}`;
    }
}

let radios = document.querySelectorAll("input[type='radio']");

for (let i = 0; i < radios.length; i++){
    radios[i].addEventListener("click", function() {
        calculate();
        radioChoosen();
    })
}

let numbers = document.querySelectorAll("input[type='number']");

for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("input", function() {
        calculate();
    })
}
