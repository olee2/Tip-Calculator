
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

function calculate(){
    let bill = document.querySelector("#bill").value,
        tip = percentage(),
        numPeople = document.querySelector("#people").value, 
        tipPerson = (bill * tip) / numPeople;
        totalPerson = bill / numPeople + tipPerson;

        document.querySelector("#tipPerson").innerHTML = `$${tipPerson.toFixed(2)}`;
        document.querySelector("#totalPerson").innerHTML = `$${totalPerson.toFixed(2)}`;
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
