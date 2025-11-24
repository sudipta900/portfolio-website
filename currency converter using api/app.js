const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";
const btn = document.querySelector("form button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


const dropDowns = document.querySelectorAll(".dropDown select")
for (let select of dropDowns) {
    for (let currCode in countryList) {
        let newOptions = document.createElement("option");
        newOptions.innerText = currCode;
        newOptions.value = currCode;
        select.append(newOptions);
        if (select.name === "from" && currCode === "USD") {
            newOptions.selected = true;
        }
        else if (select.name === "to" && currCode === "INR") {
            newOptions.selected = true;
        }
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    console.log(element.value);
    let countryCode = countryList[element.value];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`
    let img = element.parentElement.querySelector('img');
    img.src = newSrc;
}

const update_value = async() => {
    let amount = document.querySelector(".amount");
    let amountVal = amount.value;
    if (amount.value === "" || amount.value <= 0) {
        amount.value = 1;
        amountVal = 1;
    }
    console.log(amountVal);
    console.log(fromcurr.value, tocurr.value)
    const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}.json`;
    console.log(URL);
    let response = await fetch(URL);
    let data = await response.json();
    let from = fromcurr.value.toLowerCase();
    let to = tocurr.value.toLowerCase();
    console.log(data[from][to]);
    let finalAmount = amountVal * data[from][to];

    msg.innerText = `${amountVal} ${fromcurr.value} is equel to ${finalAmount} ${tocurr.value}`;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    update_value();
})

window.addEventListener("load", update_value());