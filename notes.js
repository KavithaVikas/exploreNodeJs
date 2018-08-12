console.log("starting notes.js");

const fs = require("fs");

fetchNotes = () => {

    try {

        let existingNotes = fs.readFileSync("notes1.json");
        return JSON.parse(existingNotes);
    } catch (e) {
        return [];
    }

}

saveNotes = (notes) =>{
    fs.writeFileSync("notes1.json", JSON.stringify(notes));
}


var addNote = (noteName, noteContent) => {
    var notes = fetchNotes();
    let note = {
        title: noteName,
        body: noteContent
    }

   
    let duplicateCheck = notes.filter(element => element.title === note.title);
    console.log(`duplicate check ${duplicateCheck.length}`);

    if (duplicateCheck.length === 0) {
        console.log(typeof notes);
        notes.push(note);
        saveNotes(notes);
        console.log(`adding note name ${noteName} and note content ${noteContent}`);
        return note;
    }
}

getAllNotes = () => {
    console.log("Lists all note");
}

readNote = (noteName) => {
    let allNotes = fetchNotes();
    let filteredNode = allNotes.filter(note => note.title === noteName);
    return filteredNode;
    console.log(` name of note  ${noteName} requested for read`);
}

removeNote = (noteName) => {

    console.log(`note removed is ${noteName}`);
    let allNotes = fetchNotes();
    let removableNote = allNotes.filter(note => note.title !== noteName);
    saveNotes(removableNote);
    return allNotes.length === removableNote.length;    

}

module.exports = {
    addNote,
    getAllNotes,
    readNote,
    removeNote

}