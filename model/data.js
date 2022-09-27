import defaultNotes from "./defaultNotes.js"

let notes = [];

const getDataStorage = () => {

  if (!localStorage.notes) {
    localStorage.notes = JSON.stringify(defaultNotes);
  }

  try {
    notes = [...JSON.parse(localStorage.notes)];
  } catch {
    notes = defaultNotes;
    localStorage.notes = JSON.stringify(defaultNotes);
  }
}

const saveNotes = () => {
  localStorage.notes = JSON.stringify(notes);
}

const deleteNoteData = (id) => {
  notes = [...notes.slice(0, id), ...notes.slice(id + 1, notes.length)];

  saveNotes();
}

const editNoteData = (data, id) => {
  notes = [...notes.slice(0, id), data, ...notes.slice(id + 1, notes.length)];

  saveNotes();
}

const archiveNoteData = (id) => {
  notes = [...notes.slice(0, id), { ...notes[id], archived: !notes[id].archived }, ...notes.slice(id + 1, notes.length)];

  saveNotes();
}

const addNoteData = (note) => {
  notes.push(note);

  saveNotes();
}

const getCategoryData = () => {
  return notes.reduce((accumulate, note) => {
    if (!accumulate[note.category]) {
      accumulate[note.category] = { active: 0, archived: 0 };
    }

    !note.archived ? ++accumulate[note.category].active : ++accumulate[note.category].archived;

    return accumulate;
  }, {})
}


export { notes, getDataStorage, deleteNoteData, editNoteData, archiveNoteData, addNoteData, getCategoryData };