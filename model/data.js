import defaultNotes from "./defoultNotes.js"

let notes = []

const getDataStorege = () => {

  if (!localStorage.notes) {
    localStorage.notes = JSON.stringify(defaultNotes)
  }

  try {
    notes = [...JSON.parse(localStorage.notes)]
  } catch {
    notes = defaultNotes;
    localStorage.notes = JSON.stringify(defaultNotes)
  }
}

const saveNotes = () => {
  localStorage.notes = JSON.stringify(notes)
}

const deleteNoteData = (id) => {
  notes = [...notes.slice(0, id), ...notes.slice(id + 1, notes.length)]

  saveNotes()
}

const editNoteData = (data, id) => {
  let dates;

  if (notes[id].date[0] && data.date[0] && notes[id].date[notes[id].date.length - 1] !== data.date[0]) {
    dates = [...notes[id].date, ...data.date]
  } else if (notes[id].date[0]) {
    dates = notes[id].date
  } else {
    dates = data.date
  }

  notes = [...notes.slice(0, id), { ...data, date: dates }, ...notes.slice(id + 1, notes.length)]

  saveNotes()
}

const archiveNoteData = (id) => {
  notes = [...notes.slice(0, id), { ...notes[id], archived: !notes[id].archived }, ...notes.slice(id + 1, notes.length)]

  saveNotes()
}

const addNoteData = (note) => {
  notes.push(note);

  saveNotes()
}

const getCategoryData = () => {
  return notes.reduce((accumulate, note) => {
    if (!accumulate[note.category]) {
      accumulate[note.category] = { active: 0, archived: 0 }
    }

    !note.archived ? ++accumulate[note.category].active : ++accumulate[note.category].archived;

    return accumulate;
  }, {})
}


export { notes, getDataStorege, deleteNoteData, editNoteData, archiveNoteData, addNoteData, getCategoryData };