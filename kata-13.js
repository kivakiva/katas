const talkingCalendar = function(date) {
  let readable = "";
  //month
  if (date.slice(5, 6) === "01") {
    readable += "January ";
  }
  else if (date.slice(5, 7) === "02") {
    readable += "February ";
  }
  else if (date.slice(5, 7) === "03") {
    readable += "March ";
  }
  else if (date.slice(5, 7) === "04") {
    readable += "April ";
  }
  else if (date.slice(5, 7) === "05") {
    readable += "May ";
  }
  else if (date.slice(5, 7) === "06") {
    readable += "June ";
  }
  else if (date.slice(5, 7) === "07") {
    readable += "July ";
  }
  else if (date.slice(5, 7) === "08") {
    readable += "August ";
  }
  else if (date.slice(5, 7) === "09") {
    readable += "September ";
  }
  else if (date.slice(5, 7) === "10") {
    readable += "October ";
  }
  else if (date.slice(5, 7) === "11") {
    readable += "November ";
  }
  else if (date.slice(5, 7) === "12") {
    readable += "December ";
  }
  //date
  if (date[8] === "0") {
    readable += date[9];
  }
  else {readable += date.slice(8, 10);
  }
  if (date.slice(8, 10) === "01" || date.slice(8, 10) === "21" || date.slice(8, 10) === "31") {
    readable += "st, "
  }
  else if (date.slice(8, 10) === "02" || date.slice(8, 10) === "22") {
    readable += "nd, "
  }
  else if (date.slice(8, 10) === "03" || date.slice(8, 10) === "23") {
    readable += "rd, "
  }
  else {readable += "th, "}
  //year
  readable += date.slice(0, 4);
return readable;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));