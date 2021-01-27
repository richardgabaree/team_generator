const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { choices } = require("yargs");


// Write code to use inquirer to gather information about the development team members,
const teamMembers = [];
function buildTeam() {
    fs.writeFileSync(outputPath, render(teamMembers), "utf8")
}
// and to create objects for each team member (using the correct classes as blueprints!)
function createTeam(){

    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "What type of team member do you want to add",
            choices: ["Manager", "Engineer", "Intern", "No more team members to add"]
        }
    ]).then(userChoice => {
        switch(userChoice.memberChoice) {
            case "Manager":
                addManager();
                    break;
            case "Employee":
                addEmployee();
                    break;
            case "Engineer":
                addEngineer();
                    break;
            case "Intern":
                addIntern();
                    break;
        }
    });
}

function addManager(){
    inquirer.prompt([
        {
            type = "input",
            name = "managerName",
            message = "What is the managers name",
        },
        {
            type = "input",
            name = "mangerID",
            message = "What is the managers ID number"
        },
        {
            type = "input",
            name = "officeNumber",
            message = "What is the managers office number",
        }
    ]
    )
}


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to cDheck if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
