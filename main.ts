#! /usr/bin/env node

import inquirer from "inquirer";
const currency:any={
    USD:1,
    EUR:0.88,
    GBP:0.74,
    INR:74.57,
    PKR:280

}
let user_answer = await inquirer.prompt([{
    name:"from",
    message:"Enter from currency: ",
    type:"list",
    choices:["USD","EUR","GBP","INR","PKR"]

},
{
    name:"to",
    message:"Enter To currency: ",
    type:"list",
    choices:["USD","EUR","GBP","INR","PKR"]
},
{
    name:"amount",
    message:"Enter your amount: ",
    type:"number"
}


])
let fromAmount=currency[user_answer.from];
let toAmount=currency[user_answer.to];
let amount=user_answer.amount;
let baseCurrency=amount / fromAmount;
let convertedAmount=baseCurrency*toAmount; 
console.log("Your amount in",user_answer.to,"is :",convertedAmount);














