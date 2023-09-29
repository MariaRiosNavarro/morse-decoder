let morseAlphabet = [
  { letter: "0", morseCode: "-----" },
  { letter: "1", morseCode: ".----" },
  { letter: "2", morseCode: "..---" },
  { letter: "3", morseCode: "...--" },
  { letter: "4", morseCode: "....-" },
  { letter: "5", morseCode: "....." },
  { letter: "6", morseCode: "-...." },
  { letter: "7", morseCode: "--..." },
  { letter: "8", morseCode: "---.." },
  { letter: "9", morseCode: "----." },
  { letter: "a", morseCode: ".-" },
  { letter: "b", morseCode: "-..." },
  { letter: "c", morseCode: "-.-." },
  { letter: "d", morseCode: "-.." },
  { letter: "e", morseCode: "." },
  { letter: "f", morseCode: "..-." },
  { letter: "g", morseCode: "--." },
  { letter: "h", morseCode: "...." },
  { letter: "i", morseCode: ".." },
  { letter: "j", morseCode: ".---" },
  { letter: "k", morseCode: "-.-" },
  { letter: "l", morseCode: ".-.." },
  { letter: "m", morseCode: "--" },
  { letter: "n", morseCode: "-." },
  { letter: "o", morseCode: "---" },
  { letter: "p", morseCode: ".--." },
  { letter: "q", morseCode: "--.-" },
  { letter: "r", morseCode: ".-." },
  { letter: "s", morseCode: "..." },
  { letter: "t", morseCode: "-" },
  { letter: "u", morseCode: "..-" },
  { letter: "v", morseCode: "...-" },
  { letter: "w", morseCode: ".--" },
  { letter: "x", morseCode: "-..-" },
  { letter: "y", morseCode: "-.--" },
  { letter: "z", morseCode: "--.." },
  { letter: ".", morseCode: ".-.-.-" },
  { letter: ",", morseCode: "--..--" },
  { letter: "?", morseCode: "..--.." },
  { letter: "!", morseCode: "-.-.--" },
  { letter: "-", morseCode: "-....-" },
  { letter: "/", morseCode: "-..-." },
  { letter: "@", morseCode: ".--.-." },
  { letter: "(", morseCode: "-.--." },
  { letter: ")", morseCode: "-.--.-" },
  { letter: " ", morseCode: "    " },
];

console.log("test");

//1.-Save Variables data-js="text" data-js="submit-btn" data-js="output"

const text = document.querySelector('[data-js="text"]');
// const btn = document.querySelector('[data-js="submit-btn"]');
const output = document.querySelector('[data-js="output"]');

const encriptText = () => {
  //2.-Save Values
  let textValue = text.value.toLowerCase();

  //3.Create work Variables

  let morseText = [];
  let newMorseLetter;

  //4.Create Array form text
  let textArray = Array.from(textValue);

  // 5.Map the text array to find in the morseAlphabet Array
  // the object with the same character.
  // For the same i also is the value of
  // newMorseLetter themorseAlphabet[i].morseCode

  morseText = textArray.map((character) => {
    for (let i = 0; i < morseAlphabet.length; i++) {
      if (character === morseAlphabet[i].letter) {
        newMorseLetter = morseAlphabet[i].morseCode;
      }
    }
    return newMorseLetter;
  });

  // 6. Put together as String for the output
  let morseString = morseText.reduce((a, b) => a + b);
  output.innerHTML = morseString;
};
