import { error, beckNormal } from "../view/modal.js";

const name = document.getElementById("name");
const text = document.getElementById("text");


const validator = (data) => {
  let flag = true;

  if (!data.name || data.name.length > 100) {
    error(name)

    flag = false;
  } else beckNormal(name)

  if (!data.text || data.text.length > 200) {
    error(text)

    flag = false;
  } else beckNormal(text)

  return flag;
}

export default validator;