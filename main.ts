import inquirer from "inquirer"

const randomNumber:number = Math.floor(10000 + Math.random() * 90000);
//console.log(randomNumber);

let myBalance: number = 0

let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "enter student name",
        validate: function(value){
            if(value.trim() !== ""){
                return true
            }
            return "please enter a non-empty value."
        },
    },
    {
        name: "courses",
        type: "list",
        message: "please select a course to enroll?",
        choices: ["frontend development" , "python" , "c++" , "typescript"]
    }
])

const courseFee : {[key:string]:number} = {
    "frontend development": 5000,
    "python" : 10000,
    "c++" : 15000,
    "typescript": 20000,
};
console.log(`\n tuition fee: ${courseFee[answer.courses]}/-`);
console.log(`\n Balance: ${myBalance}`);


let paymentType = await inquirer.prompt([
    {
        name: "payment",
        message: "select payment type?",
        type: "list",
        choices: ["bank transfer" , "jazzcash" , "easy paisa"]
    },
    {
        name: "amount",
        type: "input",
        message: "enter amount to transfer:",
        validate: function(value){
            if(value.trim() !== ""){
                return true
            }
            return "please enter a non-empty value."
        },
    }
])

console.log(` \n you've selected payment type ${paymentType.payment} \n`);

const tuitionFees = courseFee[answer.courses];

const paymentAmount = parseFloat(paymentType.amount)

if(tuitionFees === paymentAmount){
    console.log(`Congratulations you have successfully enrolled in ${answer.courses} \n`);

    let ans = await inquirer.prompt(
        [
            {
                name: "select",
                type: "list",
                message: "what would you like to do next?",
                choices: ["veiw status" , "exit"],
            }
        ]
    )

  if(ans.select === "veiw status"){
    console.log("\n-----> student's Status <-----\n");
    console.log(`student name: ${answer.student}.`)
    console.log(`student id: ${randomNumber}`);
    console.log(`course: ${answer.courses}`);
    console.log(`paid course fee: ${paymentAmount}`);
    console.log(`balance: ${myBalance += paymentAmount}`)
    
  }else{
     console.log("Exiting student management system.")
  }



}else{
    console.log(`invalid amount! \n`)
}





