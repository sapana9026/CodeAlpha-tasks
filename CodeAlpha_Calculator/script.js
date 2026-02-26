const screen=document.getElementById("screen");
const buttons=document.querySelectorAll("btn");

let expression="";

//Button Click Handling
buttons.forEach(button => {
    button.addEventListener("click",() => {
        const value=button.textContent;

        if (button.classList.contains("clear")) {
            expression="";
            screen.value="";
        }
        else if (button.classList.contains("delete")) {
            expression=expression.slice(0, -1);
            screen.value=expression;
        }
        else if (button.classList.contains("equal")) {
            try {
                expression=eval(expression).toString();
                screen.value=expression;
            } catch {
                screen.value="Error";
                expression="";
            }
        }
        else {
            expression+=value;
            screen.value=expression;
        }
    });
});

//Keyboard Support (Bonus)
document.addEventListener("keydown",(e) =>{
    const key=e.key;

    if (!isNaN(key) || "+-*/.".includes(key)){
        expression +=key;
        screen.value=expression;
    }
    else if (key === "Enter"){
        try{
            expression=eval(expression).toString();
            screen.value=expression;
        } catch{
            screen.value="Error";
            expression="";
        }
    }
    else if (key==="Backspace"){
        expression=expression.slice(0,-1);
        screen.value=expression;
    }
    else if (key==="Escape") {
        expression="";
        screen.value="";
    }
});
