
// Uncheck radio button when custom input is clicked

function uncheck(){
    let radios = document.querySelectorAll("input[name='percent']")
    radios.forEach(element => {
        element.checked = false;
    });
}

// Remove value from custom field if a radio button is choosen 

function radioChoosen(){
    document.getElementById("custom").value = "";
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

function people() {

    let people = document.querySelector("#people"),
        error = document.querySelector(".error"),
        num = parseInt(people.value);
        
    if(num === 0){
        error.innerHTML = "Can't be Zero";
        people.classList.replace("number", "number-error")
        return 0;

    }else if(isNaN(num)){
        people.classList.replace("number-error", "number")
        error.innerHTML = "";
        return 0;
    }
    people.classList.replace("number-error", "number")
    error.innerHTML = "";
    people.value = num;

    return num;
    
}

function billSum(){

    let bill = document.querySelector("#bill");
    let num = Number(bill.value);

    if(num <= 0 || isNaN(num)){
        bill.value = 0;
        console.log(num);
        return 0;
    }
    bill.value = num;
    return num;
}

function calculate(){
    let bill = billSum(),
        numPeople = people(),
        tip = percentage(),
        tipPerson = (bill * tip) / numPeople,
        totalPerson = bill / numPeople + tipPerson;

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
