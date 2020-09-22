#! /usr/bin/env node
const breaktime = require("./breaktime")

const [executable, scriptFile, command] = process.argv

// console.log("Executable: " + executable);
// console.log("Script File: " + scriptFile);
// console.log("Command: " + command);

if (command == "start") {
  breaktime.start();
}
else if (command == "end") {
  breaktime.end();
}
else {
  console.log(breaktime.log());
}
