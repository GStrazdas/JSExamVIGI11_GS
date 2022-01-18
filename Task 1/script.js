/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const form = document.querySelector('form');
const convertion = [
    {unit: "pounds", rate: 2.2046, sign: "lb"},
    {unit: "grams", rate: 1000, sign: "g"},
    {unit: "ounces", rate: 35.274, sign: "oz"},
];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    inputValue = document.getElementById("search").value;

    if(positiveNumber(inputValue)) {
        if(!elementExists("results")) createResultEl(convertion);
        resultOutput(convertion, inputValue);
    } else alert("Wrong input");
})

function positiveNumber(value) {
    if(Number(value) > 0 && !isNaN(Number(value))) return true;
    else return false;
}

function elementExists(id) {
    return document.getElementById(id);
}

function createResultEl(array) {
    const outputEl = document.getElementById("output");
    const divEl = document.createElement("div");
    divEl.id = "results";
    divEl.style.width = "80%";
    divEl.style.margin = "50px auto";
    outputEl.append(divEl);
    array.forEach(element => {
        const childEl = document.createElement("h1");
        childEl.id = element.unit;
        divEl.append(childEl);
    });
}

function resultOutput(array, value) {
    array.forEach(element => {
        document.getElementById(element.unit).textContent = `Weight in ${element.unit}: ${Math.round(value * element.rate * 10) / 10} ${element.sign}`;
    });
};