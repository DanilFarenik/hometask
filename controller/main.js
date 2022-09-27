import { open, close } from "../view/modal.js";
import getData from "../model/modal.js";
import validator from "./validator.js";

import {
  notes,
  getDataStorage,
  deleteNoteData,
  editNoteData,
  archiveNoteData,
  addNoteData,
  getCategoryData
} from "../model/data.js";

import { drawNotesList, drawCategoryList } from "../view/draw.js";

const CreateNoteBTN = document.getElementById("createNote");

const saveBTN = document.getElementById("save");
const modalCloseBTN = document.getElementById("modalClose");

const archiveBTN = document.getElementById("archive");

const listElementsNote = [];
const listElementsCategory = [];

let archiveFlag = false;

CreateNoteBTN.addEventListener("click", () => open());

archive.addEventListener("click", () => {
  archiveFlag = !archiveFlag;

  archiveFlag ? (archiveBTN.innerText = "Active") : (archiveBTN.innerText = "Archive");

  rebootLists();
})

saveBTN.addEventListener("click", (e) => {
  e.preventDefault();

  const { data, id } = getData();

  if (!validator(data)) return;

  id || id === 0 ? editNoteData(data, id) : addNoteData(data);

  close();
  rebootLists();
})

modalCloseBTN.addEventListener("click", close);

const addEventsOnBTN = () => {
  listElementsNote.map(noteElement => {
    const buttons = noteElement.querySelectorAll("button");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", eventNoteBTN[i]);
    }
  })
}


function deleteNote() {
  deleteNoteData(searchIndexNote(+this.dataset.id));

  rebootLists();
}

function editNote() {
  const id = searchIndexNote(+this.dataset.id);

  open("edit", notes[id], id);
}

function archiveNote() {
  archiveNoteData(searchIndexNote(+this.dataset.id));

  rebootLists();
}

const eventNoteBTN = [editNote, archiveNote, deleteNote];

const rebootLists = () => {
  archiveFlag ?
    drawNotesList(notes.filter(note => note.archived), listElementsNote) :
    drawNotesList(notes.filter(note => !note.archived), listElementsNote);

  const category = getCategoryData();

  drawCategoryList(category, listElementsCategory);

  addEventsOnBTN();
}

const searchIndexNote = (uuid) => {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === uuid) return i;
  }
}

getDataStorage();
rebootLists();
addEventsOnBTN();