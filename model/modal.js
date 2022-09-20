const name = document.getElementById("name");
const date = document.getElementById("date");
const category = document.getElementById("category");
const text = document.getElementById("text");

const modalTitle = document.getElementById("modalTitle");

const uuid = () => Math.floor(Math.random() * Date.now());

const getDateOfCreation = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const mounth = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();

  return year + '-' + mounth + '-' + day;
}


const getData = () => {
  return {
    id: +modalTitle.dataset.id,
    data: {
      name: name.value.trim(),
      date: [date.value.trim()],
      category: category.value.trim(),
      text: text.value.trim(),
      dateOfCreation: getDateOfCreation(),
      archived: false,
      id: uuid()
    }
  }
}

export default getData;