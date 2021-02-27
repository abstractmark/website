import cheatsheet from "./cheatsheet.am";
import getstarted from "./getstarted.am";
import syntax from "./syntax.am";
import CLI from "./cli.am";
import JS from "./javascript.am";
// Register docs information here
let docs = [{title: 'AbstractMark Cheatsheet', description: "A quick reference to the Abstractmark syntax.", url: "cheatsheet", code: cheatsheet},
{title: "Getting Started | AbstractMark", description: "An overview of AbstractMark, how it works, and what you can do with it.", url: 'getting-started', code: getstarted}, 
{title: "Symtax Guide | AbstractMark", description: "AbstractMark syntax guide, what to do, and what not to do", url:"syntax", code: syntax},
{title: "Command Line Interface | AbstractMark", description: "AbstractMark Command Line Interface, CLI", url: "cli", code: CLI},
{title: "JavaScript Implementation | AbstractMark", description: "JavaScript Implementation of AbstractMark", url: "javascript-implementation", code: JS}]
export default docs;