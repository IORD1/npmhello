#!/usr/bin/env node
const minimist = require('minimist')
const pkg = require('.')

const options = {
  alias: { json: 'j' }
}
const argv = minimist(process.argv.slice(2), options)

console.log(pkg(argv))
// const data = {
//     name: chalk.bold.green("             Prathmesh Ingole"),
//     handle: chalk.white("@pratham_ii"),
//     work: `${chalk.white("Software Developer & Computer Engineering Student at")} ${chalk
//         .hex("#2b82b2")
//         .bold("I2IT Pune")}`,
//     twitter: chalk.gray("https://twitter.com/") + chalk.cyan("pratham_ii"),
//     github: chalk.gray("https://github.com/") + chalk.green("iord1"),
//     linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("prathmesh-ingole-28028a215"),
//     web: chalk.cyan("https://prathmeshingole.co"),
//     npx: chalk.red("npx") + " " + chalk.white("iord"),

//     labelWork: chalk.white.bold("       Work:"),
//     labelTwitter: chalk.white.bold("    Twitter:"),
//     labelGitHub: chalk.white.bold("     GitHub:"),
//     labelLinkedIn: chalk.white.bold("   LinkedIn:"),
//     labelWeb: chalk.white.bold("        Web:"),
//     labelCard: chalk.white.bold("       Card:")
// };

// import('chalk').then(chalk => {
//     // Now you can use chalk here
//     console.log(chalk.blue('Hello, world!'));
//   }).catch(error => {
//     // Handle the error if the import fails
//     console.error('Error importing chalk:', error);
//   });
  




// #!/usr/bin/env node

// 'use strict'
// const boxen = require("boxen");
// const chalk = require("chalk");
// const inquirer = require("inquirer");
// const clear = require("clear");
// const open = require("open");
// const fs = require('fs');
// const request = require('request');
// const path = require('path');
// const ora = require('ora');
// // const cliSpinners = require('cli-spinners');
// clear();

// const prompt = inquirer.createPromptModule();

// const questions = [
//     {
//         type: "list",
//         name: "action",
//         message: "What you want to do?",
//         choices: [
//             {
//                 name: `Send me an ${chalk.green.bold("email")}?`,
//                 value: () => {
//                     open("mailto:hi@anmolsingh.me");
//                     console.log("\nDone, see you soon at inbox.\n");
//                 }
//             },
//             {
//                 name: `Download my ${chalk.magentaBright.bold("Resume")}?`,
//                 value: () => {
//                     // cliSpinners.dots;
//                     const loader = ora({
//                         text: ' Downloading Resume',
//                         spinner: cliSpinners.material,
//                     }).start();
//                     let pipe = request('https://anmolsingh.me/api/resume').pipe(fs.createWriteStream('./anmol-resume.html'));
//                     pipe.on("finish", function () {
//                         let downloadPath = path.join(process.cwd(), 'anmol-resume.html')
//                         console.log(`\nResume Downloaded at ${downloadPath} \n`);
//                         open(downloadPath)
//                         loader.stop();
//                     });
//                 }
//             },
//             {
//                 name: `Schedule a ${chalk.redBright.bold("Meeting")}?`,
//                 value: () => {
//                     open('https://calendly.com/anmol098/30min');
//                     console.log("\n See you at the meeting \n");
//                 }
//             },
//             {
//                 name: "Just quit.",
//                 value: () => {
//                     console.log("Hasta la vista.\n");
//                 }
//             }
//         ]
//     }
// ];

// const data = {
//     name: chalk.bold.green("             Anmol Pratap Singh"),
//     handle: chalk.white("@anmol098"),
//     work: `${chalk.white("Lead Software Engineer at")} ${chalk
//         .hex("#2b82b2")
//         .bold("FootLoose Labs")}`,
//     twitter: chalk.gray("https://twitter.com/") + chalk.cyan("misteranmol"),
//     github: chalk.gray("https://github.com/") + chalk.green("anmol098"),
//     linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("anmol098"),
//     web: chalk.cyan("https://anmolsingh.me"),
//     npx: chalk.red("npx") + " " + chalk.white("anmol"),

//     labelWork: chalk.white.bold("       Work:"),
//     labelTwitter: chalk.white.bold("    Twitter:"),
//     labelGitHub: chalk.white.bold("     GitHub:"),
//     labelLinkedIn: chalk.white.bold("   LinkedIn:"),
//     labelWeb: chalk.white.bold("        Web:"),
//     labelCard: chalk.white.bold("       Card:")
// };

// const me = boxen(
//     [
//         `${data.name}`,
//         ``,
//         `${data.labelWork}  ${data.work}`,
//         ``,
//         `${data.labelTwitter}  ${data.twitter}`,
//         `${data.labelGitHub}  ${data.github}`,
//         `${data.labelLinkedIn}  ${data.linkedin}`,
//         `${data.labelWeb}  ${data.web}`,
//         ``,
//         `${data.labelCard}  ${data.npx}`,
//         ``,
//         `${chalk.italic(
//             "I am currently looking for new opportunities,"
//         )}`,
//         `${chalk.italic("my inbox is always open. Whether you have a")}`,
//         `${chalk.italic(
//             "question or just want to say hi, I will try "
//         )}`,
//         `${chalk.italic(
//             "my best to get back to you!"
//         )}`
//     ].join("\n"),
//     {
//         margin: 1,
//         float: 'center',
//         padding: 1,
//         borderStyle: "single",
//         borderColor: "green"
//     }
// );

// console.log(me);
// const tip = [
//     `Tip: Try ${chalk.cyanBright.bold(
//         "cmd/ctrl + click"
//     )} on the links above`,
//     '',
// ].join("\n");
// console.log(tip);

// prompt(questions).then(answer => answer.action());