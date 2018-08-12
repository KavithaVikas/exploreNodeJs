const yargs = require("yargs");
const notes = require("./notes");

let parameters = yargs.command("ADD", "adds a note", {
    title :{
        describe:"title of a note",
        demand:true,
        alias:"t"
    },
    body:{
        describe:"content of a note",
        demand:true,
        alias:"b"
    }
}).help().argv;
console.log(parameters);

let noteAction = parameters._[0];

switch (noteAction) {
    case "ADD":
        console.log("ADD");
        let note= notes.addNote(parameters.title, parameters.body);
        if(note){
            console.log(`Notes named ${note.title} and ${note.body} save  was success`)
        }
        else{
            console.log("Failed to save probably duplicate title or something went wrong  please check");
        }
        break;
    case "LIST":
        console.log("LIST NOTES");
        notes.getAllNotes();
        break;
    case "READ":
        console.log("READ NOTES");
        let noteRead = notes.readNote(parameters.title);
        if(noteRead.length > 0){
            console.log(`the data to read is ${noteRead[0].body}`);
        }
        break;
    case "REMOVE":
        let noteRemoval = notes.removeNote(parameters.title);
        if(noteRemoval){
            console.log(`Note ${noteRemoval} remove was success`);
        }
        else{
            console.log("note remove is success");
        }
        console.log("REMOVE NOTES");
        break;
    default:
        console.log("NO COMMAND LINE ARGS OR INVALID ARGS");

}