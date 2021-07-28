// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "github",
        message: "Please provide GitHub user name",
    },
    {
        type: "list",
        name: "license",
        message: "What license/s does project have?",
        choices: ["APACHE 2.0", "MIT", "GPL 3.0", "BSB 3", "NONE"],
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install the project?",
        default: "npm i",
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this project?",
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed to this project?",
    },
    {
        type: "input",
        name: "test",
        message: "How is the project tested?",
        default: "nmp test",
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
        console.log("generating ReadMe");
        writeToFile("README.md", generateMarkdown({ ...responses })
        );
    })
 }

// Function call to initialize app
init();
