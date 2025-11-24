let buttons = document.querySelectorAll("button");
let display = document.getElementById("display");

buttons.forEach(btn =>{
    btn.addEventListener("click", () =>{
        let value = btn.value;
        if(btn.value === "C"){
            display.innerText ='0';
        }
        else if(btn.value == 'k'){
            if (display.innerText.endsWith("%")) {
            // Remove % and divide the number by 100
            display.innerText = display.innerText.slice(0, -1);
            display.innerText += '/100';
            }
            let result = eval(display.innerText); //for evaluating the reasult from text
            console.log(result);
            display.innerText = `${result}`;
    }
        else if(btn.value == 'B'){
            display.innerText = display.innerText.slice(0, -1);
            if(display.innerText == ''){
                display.innerText == "0";    //you have to look into this
            }
        }
        else{
            if(display.innerText == 0){
                display.innerText = "";
            }
            display.innerText += value;
        }
    })
})