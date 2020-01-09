fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

const addNotes = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New Note Added!')
    } else {
        console.log('Note title taken!')
    }

   
}

const removeNotes = function (title) {
    const notes = loadNotes()
    const check = notes.filter(function (note) {
        return note.title === title
    })
    if (check.length === 0) {
        console.log(chalk.red('Note not present'))
    } else {
        var index = notes.indexOf(check[0])
        if (index !== -1) notes.splice(index, 1)
        saveNotes(notes)
        console.log(chalk.green('The Note with the title',check[0].title,'is successfully removed!'))
    }
    
} 

const saveNotes = function (notes) {
const data = JSON.stringify(notes)
fs.writeFileSync('notes.json',data)

}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
}

   

}


module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
}