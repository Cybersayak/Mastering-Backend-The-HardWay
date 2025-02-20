const note = require('./demonotes')

let totalPages= note.notesSize
console.log(totalPages);

let result = note.addNum(totalPages+5 ,5)
console.log(`Result is  ${result}`);
