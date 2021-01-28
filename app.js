// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
const teamMembers = [];
// function buildPage() {
function buildPage() {
fs.writeFileSync(outputPath, render(teamMembers), "utf8")
}


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
            type: "input",
            name: "managerName",
            message: "What is the managers name",
        },
        {
            type: "input",
            name: "mangerID",
            message: "What is the managers ID number"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your managers email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the managers office number",
        }
    ]).then(answers => {
       const Manager = new Manager
            (answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        teamMembers.push(manager);
        createTeam();
    })
}

function addEngineer(){
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the name?",
      
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id?",
        
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
        
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's GitHub username?",
        
      }
    ]).then(answers => {
      const Engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer);
      createTeam();
    });
  }

  function addIntern(){
      inquire.prompt([
          {
              type: "input",
              name: "internName",
              message: "What is the interns name?"
            },
            {
                type: "input",
                name: "internId",
                message: "What is the interns ID number?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the interns email",
            },
            {
                type: "input",
                name: "internSchool"
            }
         ]).then(answers => {
             const Intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
             teamMembers.push(intern);
             
             createTeam();
           });
         }
    
         createTeam();
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
