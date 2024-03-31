import inquirer from "inquirer";
let myBalance = 10000;
let mypin = 1123;
let mypinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin Number",
        type: "number",
    }
]);
if (mypinanswer.pin === mypin) {
    console.log(" Correct pin Number!!!");
    let operatoranswer = await inquirer.prompt([
        {
            name: "amount2",
            message: "Please Select Option",
            type: "list",
            choices: ["withdraw", "Check Balance"],
        }
    ]);
    if (operatoranswer.amount2 === "withdraw") {
        let amountA = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            }
        ]);
        myBalance -= amountA.amount;
        console.log("Your remainig balance is :" + myBalance);
    }
    else if (operatoranswer.amount2 === "Check Balance") {
        console.log("Your Current Balance is :" + myBalance);
        console.log("How much do you want to take it? :");
    }
}
else {
    console.log("Incorrect pin Number");
}
