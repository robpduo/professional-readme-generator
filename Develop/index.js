// TODO: Include packages needed for this application
import inquirer from "inquirer";
import ReadMeTemplate from "./src/ReadMeTemplate.js";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [];
questions.push("What is the title of your project?: ");
questions.push("Please enter a description for your project: ");
questions.push("Please enter the Installation Instructions for your project: "); //TODO create a list for instructions
questions.push("Please enter the usage information for your project: ");
questions.push("Please enter the contribution guidelines for your project: ");
questions.push("Please enter any tests done for your project: ");
questions.push("Select a applicable license from the following list: ");
questions.push("Please enter a Github Username: ");
questions.push("Please enter your email address: ");

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: questions[7],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8],
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: projTitle => {
                if (projTitle) {
                    return true;
                } else {
                    console.log("Please enter the title of your project");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
            validate: projDesc => {
                if (projDesc) {
                    return true;
                } else {
                    console.log("Please enter a description for your project");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
            validate: projInstall => {
                if (projInstall) {
                    return true;
                } else {
                    console.log("Please enter the installation instructions for your project");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
            validate: projUsage => {
                if (projUsage) {
                    return true;
                } else {
                    console.log("Please enter the usage information for your project");
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'tests',
            message: 'What tests was conducted for this application? (Check all that apply)',
            choices: ['Unit Test', 'Integration Test', 'Functional Test', 'End-to-end Test', 'Acceptance Test', 'Performance Test', 'Smoke Test']
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license is this project covered under?',
            choices: ['MIT', 'Apache', 'GNU', 'ISC', ]
        },
    ]);
};

function init() {

    promptUser()
        .then(projectData => {
            return generateMarkdown(ReadMeTemplate(projectData));
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })

};

// Function call to initialize app
init();