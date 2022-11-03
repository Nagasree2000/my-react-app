const core = require('@actions/core');
const github = require('@actions/github');
try{
const name = core.getInput('who-to-greet')
console.log(`Hello ${name}`);
const date = new Date();
core.setOutput('Date',date.toTimeString());

console.log(JSON.stringify(github, null, '\t'));
} catch(error)
{
    core.setFailed(error.message);
}
