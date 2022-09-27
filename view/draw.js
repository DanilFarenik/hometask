const notesList = document.getElementById("notesList");
const categoryList = document.getElementById("categoryList");

const icons = {
  idea: `<i class="fa-solid fa-pen"></i>`,
  quote: `<i class="fa-solid fa-quote-right"></i>`,
  random: `<i class="fa-solid fa-gear"></i>`,
  task: `<i class="fa-solid fa-list-check"></i>`,
}

const drawNotesList = (notes, listElementsNote) => {
  clearList(listElementsNote);

  notes.map(note => {
    const row = document.createElement("div");

    row.classList.add("list__row");
    listElementsNote.push(row);
    notesList.append(row);

    row.innerHTML = `
      <div class="list__name">
        <div class="list__icon">
          ${icons[note.category]}
        </div>
        <p>${note.name}</p>
      </div>
      <p>${note.dateOfCreation}</p>
      <p>${note.category}</p>
      <p>${note.text}</p>
      <p>${note.date.join(", ")}</p>
      <div>
        <button data-id="${note.id}" class="list__btn"><i class="fa-solid fa-pen"></i></button>
        <button data-id="${note.id}" class="list__btn"><i class="fa-solid fa-box-archive"></i></button>
        <button data-id="${note.id}" class="list__btn"><i class="fa-solid fa-trash"></i></button>
      </div>`;
  })
}


const drawCategoryList = (categorys, listElementsCategory) => {
  clearList(listElementsCategory);

  Object.entries(categorys).map(([nameCategory, category]) => {
    const row = document.createElement("div");

    row.classList.add("list__row");
    listElementsCategory.push(row);
    categoryList.append(row);

    row.innerHTML = `
        <div class="list__name">
          <div class="list__icon">
            ${icons[nameCategory]}
          </div>
          <p>${nameCategory}</p>
        </div>
        <p>${category.active}</p>
        <p>${category.archived}</p>`;
  })
}

const clearList = (listElements) => {
  while (listElements[0]) {
    listElements.pop().remove();
  }
}

export { drawNotesList, drawCategoryList };