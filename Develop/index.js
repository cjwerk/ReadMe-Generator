const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');
const generateMarkdown = require("./utils/generateMarkdown")
const util = require("util");



// array of questions for user
function promptUser() {
    return inquirer.prompt([


        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },

        {
            type: 'input',
            name: 'Installation',
            message: 'Describe the installation process:'
        },
        {
            type: 'input',
            name: 'usage',
            message: "What is this project usage for?"
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose an appropriate license for this project:',
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: 'input',
            name: 'contributor',
            message: 'Who are the contributors to this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Is there a test included?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What do I do if i have an issue?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address?'
        }

    ]);
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    try {
        const data = promptUser();
        const generateContent = generateMarkdown(data);
         writeToFile('README.md', generateContent);
        console.log("Success!");
    } catch (err) {
        console.log(err);
    }
}


// function call to initialize program
init();
