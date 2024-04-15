#! /usr/bin/env node
import inquirer from "inquirer";
console.log(`WELCOME TO MONEY EXCHANGER!`);
const currency = {
    USD: 1, //Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_input = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter Your amount",
        type: "number"
    }
]);
let fromAmount = currency[user_input.from]; //Exchange Rate
let toAmount = currency[user_input.to]; //Exchange Rate
let amount = user_input.amount;
let baseAmount = amount / fromAmount; // USD Base Currency
let convertAmount = baseAmount * toAmount;
console.log(`Conversion Amount From ${user_input.from} TO ${user_input.to} is : ${Math.floor(convertAmount)}`);
