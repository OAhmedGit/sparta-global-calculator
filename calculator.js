// get the user inputs
var functionSelect = prompt('Which feature would you like to use (c)alculator, (b)mi calculator')

if(functionSelect == "c"){
    calculator();
} 

if(functionSelect == "b"){
    bmi();
}


function calculator(){
    var value1 = parseFloat(prompt('enter first value'));
    var value2 = parseFloat(prompt('enter the second value'));
    var calculatorChoice = prompt('Which type of calculator: (b)asic or (a)dvanced');

    if(calculatorChoice == 'b'){
        var operationChoice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (mo)dulus') || "a";
        basic(value1, value2, operationChoice);
    }

    if(calculatorChoice == 'a'){
        var operationChoice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (mo)dulus (p)ower (sq)root') || "a";
        advanced(value1, value2, operationChoice)
    }

    function basic(num1, num2, userOp){
        switch(userOp){
            case "a":
                console.log(num1 + num2);
                break;
            case "s":
                console.log(num1 - num2);
                break;
            case "m":
                console.log(num1 * num2);
                break;
            case "d":
                console.log(num1 / num2);
                break;
            case "mo":
                console.log(num1 % num2);
                break;
            default:
                console.log(num1 + num2);
        }
    }

    function advanced(num1, num2, userOp){
        switch(userOp){
            case "a":
                console.log(num1 + num2);
                break;
            case "s":
                console.log(num1 - num2);
                break;
            case "m":
                console.log(num1 * num2);
                break;
            case "d":
                console.log(num1 / num2);
                break;
            case "mo":
                console.log(num1 % num2);
                break;
            case "p":
                console.log(Math.pow(num1, num2));
                break;
            case "sq":
                console.log(Math.sqrt(num1));
                console.log(Math.sqrt(num2));
                break;
            default:
                console.log(num1 + num2);
        }
    }
}

function bmi(){
    var bmiChoice = prompt("(m)etric or (i)mperial");

    if(bmiChoice == "m"){
        var weight = parseFloat(prompt("Enter your weight in KG"));
        var height = parseFloat(prompt("Enter your height in Meters"));
        metric(weight, height);
    }

    if(bmiChoice == "i"){
        var weight = parseFloat(prompt("Enter your weight in Pounds"));
        var height = parseFloat(prompt("Enter your height in Inches"));
        imperial(weight, height);
    }

    function metric(w, h){
        var bmi = parseFloat(w / (h*h));
        console.log("Metric BMI = " + bmi);
    }

    function imperial(w, h){
        var bmi = parseFloat((w/(h*h)) * 703);
        console.log("Imperial BMI = " + bmi);
    }
}







