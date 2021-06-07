// const words = {
//     Goodbye: "Güle Güle",
//     Single: "Bekar",
//     Thank: "Teşekkür",
//     Elevator: "Asansör"
// }
const words = ["Goodbye", "Single", "Thank", "Elevator"];

const answers = ["Güle Güle", "Bekar", "Teşekkür", "Asansör"];

const randomWords = ["Kimin için?", "Neden", "Deneme", "Gün", "Merhaba"];

function randomSayiUret(kacaKadar){
    var randomNumber = Math.floor(Math.random() * kacaKadar);
    return randomNumber;
}


// Soru

const soru = document.querySelector("#soru");


// Cevap - şıklar
let cevap1 = document.querySelector("#cevap1");
let cevap2 = document.querySelector("#cevap2");
let cevap3 = document.querySelector("#cevap3");
let cevap4 = document.querySelector("#cevap4");
let cevap5 = document.querySelector("#cevap5");

var cevapHakki = 5;

while (cevapHakki > 0){
    var randomSoru = randomSayiUret(words.length);
    console.log(randomSoru);
    soru.textContent = `Kelime: ${words[randomSoru]}`

    cevap1.textContent = randomWords[randomSayiUret(5)];
    cevap2.textContent = randomWords[randomSayiUret(5)];
    cevap3.textContent = randomWords[randomSayiUret(5)];
    cevap4.textContent = randomWords[randomSayiUret(5)];
    cevap5.textContent = answers[randomSoru];
    break;
}