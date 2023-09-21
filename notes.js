const fs = require('fs')
const chalk = require('chalk');  
// const getNotes = ()=>{             //const getNotes = function(){
//     return "Your Notes";
// }
const addNote = (title,body)=>{              //const addNote = function(title,body){
    const notes = loadNotes();
    // const duplicateNotes =notes.filter(function(note){
    //     return note.title === title
    // })
    // const duplicateNotes = notes.filter((note)=>note.title===title)
    const duplicateNote = notes.find((note)=>note.title===title)
    if(!duplicateNote){     //    if(duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        // console.log(notes);
        saveNotes(notes);
        console.log(chalk.green.inverse.bold('note added'));
    }else{
        console.log(chalk.red.inverse.bold('note title taken'));
    }
    
}
const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON)

}

const loadNotes = ()=>{      //const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    }catch (e){
        return [];
    }
   
}
const removeNote = (title)=>{         //const removeNote = function(title){
    const notes = loadNotes();
    const notesToKeep = notes.filter((note)=>note.title!==title);
    // const notesToKeep =notes.filter(function(note){
    //     return note.title !== title
    // })
    saveNotes(notesToKeep);
    if(notes.length!==notesToKeep.length){
        console.log(chalk.green.inverse.bold('note removed'));
    }
    else{
        console.log(chalk.red.inverse.bold('no such node found'));
    }
    
}
const listNotes =()=>{
    const notes = loadNotes();
    console.log(chalk.cyan.inverse('Your notes'))
    notes.forEach((note)=>{
        console.log(note.title);
    })
 
}
const readNotes =(title)=>{
    const notes = loadNotes();
    const noteToRead = notes.find((note)=>note.title===title)
    if(!noteToRead){
        return  console.log(chalk.inverse.red("No Note Found"))
    }
    else{
        // console.log(`Title: ${noteToRead.title}`);
        // console.log(`Body:${noteToRead.body}`);
        console.log(chalk.inverse(noteToRead.title));
        console.log(noteToRead.body);
    }
}
module.exports  ={
    // getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes:readNotes
}