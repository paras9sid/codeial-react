export * from "./constants";

//whatever named exports in constants automatically exported in objects

export const getFormBody = (params) => {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); //'user.name' => 'user20%name'
    let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakash%2020123

    formBody.push(encodedKey + "=" + encodedValue);
  }

  return formBody.join("&"); //'username = aakash&password=123123'
};
