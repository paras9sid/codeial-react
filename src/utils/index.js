export * from "./constants";
//whatever named exports in constants automatically exported in objects

export const setItemInLocalSorage = (key, value) => {
  if (!key || !value) {
    return console.error("Can not store in LS");
  }
  const valueToStore =
    typeof value !== "string" ? JSON.stringify(value) : value;

  localStorage.setItem(key, valueToStore);
};


export const getItemInLocalSorage = (key) => {
  if (!key) {
    return console.error("Can not get the value from LS");
  }
  

  localStorage.getItem(key);
};


export const removeItemFromLocalSorage = (key) => {
  if (!key) {
    return console.error("Can not remove value in LS");
  }
  
  localStorage.removeItem(key);
};

export const getFormBody = (params) => {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); //'user.name' => 'user20%name'
    let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakash%2020123

    formBody.push(encodedKey + "=" + encodedValue);
  }

  return formBody.join("&"); //'username = aakash&password=123123'
};
