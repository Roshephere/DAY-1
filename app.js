let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");

let string = ""; // to store the user input.

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        console.log(e.target);
        let buttonText =  e.target.innerHTML;
        if(buttonText ==="AC"){
            string = "";
            display.innerText = "0";
        }else if(buttonText ==="⌫"){
            string = string.slice(0, -1);
            display.innerText = string.length > 0? string: "0" ; // To show 0 when empty.
        }else if(buttonText === "="){
            string = eval(string.replaceAll("X","*").replaceAll("÷", "/"));
            display.innerText = string;
        }else if(buttonText === "OO"){
            string += "00";
            display.innerText = string;
        }
        else{

            if(display.innerText ==="0"){
                display.innerText = buttonText;
            }else{
                display.innerText +=buttonText;
            }
            string = display.innerText;
        }
        
    });
});