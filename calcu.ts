import inquirer from "inquirer";
const answer =await inquirer.prompt([{
    message:"Enter firts number",types:"number",name:"firstNamber"},
    {message:"Enter second number",types:"number",name:"secondNamber"},
    {message: "select one of the operator to perform operation",
    type:"list",
    name:"operator",
    choices:["addition","subtraction","multiplication","divison"]
}


])
console.log(answer)
// condition statement
if(answer.operator ==="addition"){
    console.log(answer.firstNamber + answer.secondNamber);
} 
else if(answer.operator ==="subtraction"){
    console.log(answer.firstNamber - answer.secondNamber);
}else if(answer.operator==="multiplication"){
    console.log(answer.firstNamber * answer.secondNamber);
}else if(answer.operator==="divison"){
    console.log(answer.firstNamber / answer.secondNamber);
}else{
    console.log("please select valid operator")
}