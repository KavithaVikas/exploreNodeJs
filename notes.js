console.log("starting notes.js");


addNote = (noteName, noteContent) => {
    console.log(`adding note name ${noteName} and note content ${noteContent}`);
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