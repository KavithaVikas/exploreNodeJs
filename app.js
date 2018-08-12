const yargs = require("yargs");
const notes = require("./notes");

let parameters = yargs.argv;
console.log(parameters);

let noteAction = parameters._[0];

switch (noteAction) {
    case "ADD":
        console.log("ADD");
        notes.addNote(parameters.title, parameters.body);
        break;
    case "LIST":
        console.log("LIST NOTES");
        notes.getAllNotes();
        break;
    case "READ":
        console.log("READ NOTES");
        notes.readNote(parameters.title);
        break;
    case "REMOVE":
        notes.removeNote(parameters.title);
        console.log("REMOVE NOTES");
        break;
    default:
        console.log("NO COMMAND LINE ARGS OR INVALID ARGS");

}