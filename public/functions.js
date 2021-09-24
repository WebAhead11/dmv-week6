//this array for validate the GOVID that include only numbers same for mobile,car numer etc....
const IDchars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//this array is for names
const arrCharsForName = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
//for owner name can include space too
const arrOwnerNameChars = [...arrCharsForName, " "];

//this array is for username and password check
const arrAllowedChars = [...arrCharsForName, ...IDchars, "."];

//for address can include letters,numbers, spaces, period and coma
const arrAddress = [...arrAllowedChars, ",", " "];

//this array is for email check charachters
const arrAllowedCharsEmail = [...arrAllowedChars, "@"];

//in this function we check that user typed only allowed charachters
function checkChar(str, arr) {
  let flagCh = true;
  for (let x = 0; x < str.length; x++) {
    if (arr.indexOf(str[x]) === -1) {
      flagCh = false;
    }
  }
  return flagCh;
}
