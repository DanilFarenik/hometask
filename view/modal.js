const name = document.getElementById("name");
const date = document.getElementById("date");
const category = document.getElementById("category");
const text = document.getElementById("text");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");

const open = (type = "add", dataNote, id) => {
  modal.style.display = "flex";

  switch (type) {
    case "add": {
      modalTitle.innerText = "Add Note";

      break;
    }
    case "edit": {
      modalTitle.innerText = "Edit Note";

      modalTitle.dataset.id = id;

      name.value = dataNote.name;
      date.value = dataNote.date[dataNote.date.length - 1];
      category.value = dataNote.category;
      text.value = dataNote.text;

      break;
    }
    default: {
      close()
    }
  }
}

const close = () => {
  modal.style.display = "none";

  modalTitle.dataset.id = null;

  cleaning()
}

const error = (element) => {
  element.style.borderColor = "#ff0000"
}

const beckNormal = (element) => {
  element.style.borderColor = "#000000"
}

const cleaning = () => {
  name.value = "";
  date.value = "";
  category.value = "task";
  text.value = "";
}

export { open, close, error, beckNormal };