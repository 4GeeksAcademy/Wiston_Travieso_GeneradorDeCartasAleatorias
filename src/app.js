/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function paloRandom() {
    let palo = ["♦", "♥", "♠", "♣"];
    let indexRandom = Math.floor(Math.random() * 4);

    let paloTop = document.querySelector("#palotop");
    paloTop.textContent = palo[indexRandom];
    console.log(paloTop);

    if (indexRandom == 0) {
      paloTop.style.color = "red";
    }

    let paloEnd = document.querySelector("#paloend");
    paloEnd.textContent = palo[indexRandom];
  }
  paloRandom();

  function numberRandom() {
    let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
    let indexRandom = Math.floor(Math.random() * 12);
    return number[indexRandom];
  }

  let valueCard = document.querySelector("#valueCard");
  valueCard.textContent = numberRandom();

  console.log(numberRandom() + paloRandom());
};
