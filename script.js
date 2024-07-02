const wrote = document.querySelector(".wrote");
const remaining = document.querySelector(".remaining");
const mainText = document.querySelector("#mainText");
let char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
mainText.value = "";
let textChar = mainText.value.trim().length;
let noWithSpace;

mainText.addEventListener("keydown", () => {

    setTimeout(() =>{
    textChar = mainText.value.trim().replace(/\s/g, "").length;
        for (el of char) {
        noWithSpace = Number(mainText.value.replace(el, "").length - textChar);
        }

        if (textChar >= 201) {
            wrote.innerText = 200;
            remaining.innerText = 0;
            mainText.value = mainText.value.slice(0, 200 + noWithSpace);
        } else {
            wrote.innerText = textChar;
            remaining.innerText = 200 - textChar;
        }
    },5)
})