console.log("starting notes.js");

const fs = require("fs");


var addNote = (noteName, noteContent) => {
    var notes = [];
    let note = {
        title: noteName,
        body: noteContent
    }
    try {

        let existingNotes = fs.readFileSync("notes1.json");
        notes = JSON.parse(existingNotes);
    } catch (e) {

    }

    let duplicateCheck = notes.filter(element => element.title === note.title);
    console.log(`duplicate check ${duplicateCheck.length}`);

    if (duplicateCheck.length === 0) {
        console.log(typeof notes);
        notes.push(note);
        fs.writeFileSync("notes1.json", JSON.stringify(notes));
        console.log(`adding note name ${noteName} and note content ${noteContent}`);
    }
}

getAllNotes = () => {
    console.log("Lists all note");
}

readNote = (noteName) => {
    console.log(` name of note  ${noteName} requested for read`);
}

removeNote = (noteName) => {

    console.log(`note removed is ${noteName}`);

}

module.exports = {
    addNote,
    getAllNotes,
    readNote,
    removeNote

}