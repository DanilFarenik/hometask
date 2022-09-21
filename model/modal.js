const name = document.getElementById("name");
const category = document.getElementById("category");
const text = document.getElementById("text");

const modalTitle = document.getElementById("modalTitle");

const uuid = () => Math.floor(Math.random() * Date.now());

const getDateOfCreation = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const mounts = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();

  return  day + '.' + mounts + '.' +year;
}

const getDatesOfString=(text)=>{
  const dates= text.match(/(0?[1-9]|[12][0-9]|3[01])([\-/ \.])(0?[1-9]|1[012])[\-/ \.][0-9]{4}/g);

  if(!dates) return [];

  return dates.map(date=>date.replaceAll(/\/|-/g,"."));
}


const getData = () => {
  return {
    id: +modalTitle.dataset.id,
    data: {
      name: name.value.trim(),
      date: getDatesOfString(text.value),
      category: category.value.trim(),
      text: text.value.trim(),
      dateOfCreation: getDateOfCreation(),
      archived: false,
      id: uuid()
    }
  }
}

export default getData;