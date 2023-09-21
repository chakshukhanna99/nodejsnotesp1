const fs = require('fs')
// const validator = require('validator')
const chalk = require('chalk');
// import chalk from 'chalk';
const yargs = require('yargs');
const note = require('./notes.js');
// const msg = getNotes();
// console.log(msg);
// console.log(chalk.blue.inverse.bold('hello world'));
// console.log(validator.isEmail('chakshu@gmail.com'));
// console.log(validator.isURL("https://google.com"));
// const command = process.argv[2];
// if(command === 'add'){
//     console.log('Adding note')
//     console.log(chalk.green.inverse.bold('Note added'));
// }else if(command === 'remove'){
//     console.log('removing note');
//     console.log(chalk.red.inverse.bold('Note removed'));
// }
// console.log(process.argv);
//creating the commands
// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){           //  handler: function (argv) {
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
        note.addNote(argv.title,argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('Removing the note')
        note.removeNote(argv.title);
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(argv){
        note.listNotes();
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('Reading a note')
        note.readNotes(argv.title)
        
    }
})

yargs.parse()
// console.log(yargs.argv);