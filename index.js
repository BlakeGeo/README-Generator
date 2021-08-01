// Import all required modules
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateReadme = require('./Utils/generateReadme');

// Use promises to write to file
const writeFileAsync = util.promisify(fs.writeFile);

// Prompt the user with questions to populate the README.md file
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation process for this project',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is this application used for?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the appropriate license from the list:',
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
            name: 'tests',
            message: 'What does the user need to know about how to run any tests, if any?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
    ]);
};

const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('./new/README.md', generateReadme(answers)))
        .then(() => console.log('Successfully generated README.md'))
        .catch((err) => console.error(err));
};

init();