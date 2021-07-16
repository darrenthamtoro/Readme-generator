// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is project title ?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions for the project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What do you want to use in this project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed in this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How to run the test cases:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the license for this project',
        choices: ["MIT",
            "Mozilla Public License 2.0",
            "Open Software License 3.0",
            "PostgreSQL License",
            "None"]
    },
    {
        type: 'input',
        name:  'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log(`Successfully created ${fileName}!`)
    );

}

// TODO: Create a function to initialize app
function init() { 
    console.log("Start Application ....")
    inquirer.prompt(questions).then(userInput => {
        console.log("userInput", userInput)

        //convert it into readme format using generate markdown 
       const data =  generateMarkdown(userInput);
       console.log(data);

        //create the file 
        writeToFile("README.md",data );
    })
}

// Function call to initialize app
init();
