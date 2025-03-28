const core = require('@actions/core');
const github = require('@actions/github');
const {printHello} = require('./testFunction');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  // Call a simple function from another file
  printHello(nameToGreet);
  console.log(`############### The event payload ##################### \n ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
