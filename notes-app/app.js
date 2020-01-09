const yargs = require('yargs')
const notes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

// add, remove, read, list

// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds the note',
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
    handler: function(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removes the notes',
    builder: {
        title: {
            describe: 'The title of the note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNotes(argv.title)
    }
})

// create list command
yargs.command({
    command:'list',
    describe: 'Lists out all the notes',
    handler: function() {
        console.log('Listing out all the notes')
    }
})

// create a read command\
yargs.command({
    command:'read',
    describe:'Reads the note',
    handler: function() {
            console.log('Reading the note')
    }
})

yargs.parse()

