/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  newCard();
  document.querySelector(".button").addEventListener("click", newCard);
};

let topNumber = document.querySelector(".top-number");
let middleSuit = document.querySelector(".middle-suit");
let buttomNumber = document.querySelector(".bottom-number");
let card = document.querySelector(".card");

function newCard() {
  let colorSuit = generateRandomSuit();
  if (colorSuit === "♥" || colorSuit === "♦") {
    card.style.color = "red";
  } else {
    card.style.color = "black";
  }
  let number = generateRandomNumber();

  topNumber.innerHTML = number;
  middleSuit.innerHTML = colorSuit;
  buttomNumber.innerHTML = number;
}

let generateRandomSuit = () => {
  let suit = ["♥", "♦", "♣", "♠"];
  let randomSuit = Math.floor(Math.random() * suit.length);
  return suit[randomSuit];
};

let generateRandomNumber = () => {
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomNumber = Math.floor(Math.random() * values.length);
  return values[randomNumber];
};
