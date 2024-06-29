#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//displaying welcome message
console.log(chalk.green.yellow(`\n  \t\t <<<================================================>>>`));
console.log(chalk.bold.blue(`<<<=========>>>  ${chalk.green.bold("Welcome To 'Hafeez Siddiqui' - Quiz System")}  <<<=========>>>`));
console.log(chalk.bold.yellow(`\t\t <<<===============================================>>>\n`));
console.log(chalk.blackBright(`\nYou are required to attempt all 5 questions. Each question carry equal marks.`));
console.log(chalk.blackBright(` minimum passing marks : 4`));
let points = 0;
//question 1
let question1 = await inquirer.prompt([{
        name: "one",
        type: "list",
        message: chalk.magenta("1.TypeScript is a super set of ?"),
        choices: ["HTML", "CSS", "JavaScript", "Python"]
    }]);
if (question1.one == "JavaScript") {
    console.log(chalk.green(`Your Answer is correct!\n`));
    points++;
}
else {
    console.log(chalk.red(`Incorrect Answer!\n`));
}
//question 2
let question2 = await inquirer.prompt([{
        name: "two",
        type: "list",
        message: chalk.magenta("2.Who is the owner of Microsoft ?"),
        choices: ["Elon Musk", "Mark Zuckerberg", "Bill Gates", "Larry Frink"]
    }]);
if (question2.two == "Bill Gates") {
    console.log(chalk.green(`Your Answer is correct!\n`));
    points++;
}
else {
    console.log(chalk.red(`Incorrect Answer!\n`));
}
//question 3
let question3 = await inquirer.prompt([{
        name: "three",
        type: "list",
        message: chalk.magenta("3.Who is the Current CEO of Google ?"),
        choices: ["Elon Musk", "Mark Zuckerberg", "Mukesh Ambani", "Sundar Pichai"]
    }]);
if (question3.three == "Sundar Pichai") {
    console.log(chalk.green(`Your Answer is correct!\n`));
    points++;
}
else {
    console.log(chalk.red(`Incorrect Answer!\n`));
}
//question 4
let question4 = await inquirer.prompt([{
        name: "four",
        type: "list",
        message: chalk.magenta("4.What is TypeScript primarily used for?"),
        choices: ["Creating and managing databases", "Managing computer networks", "Writing and running web applications", "Analyzing and visualizing dat"]
    }]);
if (question4.four == "Writing and running web applications") {
    console.log(chalk.green(`Your Answer is correct!\n`));
    points++;
}
else {
    console.log(chalk.red(`Incorrect Answer!\n`));
}
//question 5
let question5 = await inquirer.prompt([{
        name: "five",
        type: "list",
        message: chalk.magenta("5.TypeScript is compiled in which of the following language"),
        choices: ["HTML", "CSS", "JavaScript", "Python"]
    }]);
if (question5.five == "JavaScript") {
    console.log(chalk.green(`Your Answer is correct!\n`));
    points++;
}
else {
    console.log(chalk.red(`Incorrect Answer!\n`));
}
if (points >= 4) {
    console.log(chalk.yellow(`Your Points : ${points}`));
    console.log(chalk.greenBright(`\n\t\tCongratulations, you aced the  quiz!\n`));
}
else {
    console.log(chalk.yellow(`Your Points : ${points}`));
    console.log(chalk.red("\n\t\tYou didn't quite qualify this time, but keep trying! You'll get there with practice.\n"));
}
