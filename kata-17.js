const urlDecode = function(text) {
  let obj = {};
  let keyval = [];
  let key = "";
  let value = "";
  let amp = []

  //first split text into key: value pairs
 amp = text.split("&");

 // then split key and value in a loop
  for (str of amp) {
  
    keyval = (str.toString().split("=")); //clean up

    key = keyval[0];
    value = keyval[1];

    value = value.replaceAll("%20", " "); //more clean up
    key = key.replaceAll("%20", " ");

    Object.defineProperty(obj, key, { //create object
      value: value
    });

  }
  return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);