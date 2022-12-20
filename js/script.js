import {oakley,digits,kayfman} from './data.js';

//oakley DOM
const oakleyZone = document.querySelector('.cards');
const templateOakley = document.querySelector('#template-oakley').content.querySelector('.cards__item');

function createElementOakley(item) {
  const card = templateOakley.cloneNode(true);
  const cardImage = card.querySelector('.cards__image');
  const cardTitle = card.querySelector('.cards__title');
  const cardText = card.querySelector('.cards__description');
  cardImage.src = item.image;
  cardTitle.textContent = item.title;
  cardText.textContent = item.text;
  return card;
};

oakley.forEach(function (item) {
  const newCard = createElementOakley(item);
  oakleyZone.append(newCard);
});
//
//digits DOM
const digitsZone = document.querySelector('.table');
const templateDigits = document.querySelector('#digits').content.querySelector('.table__cell');
function createElementDigits (item){
  const card = templateDigits.cloneNode(true);
  const cardTitle = card.querySelector('.table__heading');
  const cardText= card.querySelector('#text1');
  const cardText2 = card.querySelector('#text2');
  cardTitle.textContent = item.title;
  cardText.textContent = item.text;
  cardText2.textContent = item.text2;
  return card;
};
console.log(digits);
digits.forEach(function (item){
  const newCardDigits = createElementDigits(item);
  digitsZone.append(newCardDigits);
});
//kayfman DOM
const kayfmanZone = document.querySelector('#kayfman-zone');
const templateKayfman = document.querySelector('#kayfman').content.querySelector('#table-kayfman');
function createElementKayfman(item){
  const card = templateKayfman.cloneNode(true);
  const cardTitle = card.querySelector('#kayfman-title');
  const cardText = card.querySelector('#kayfman-text');
  cardTitle.textContent = item.title;
  cardText.textContent = item.text;
  return card;
}
kayfman.forEach(function(item){
const newCardKayfman = createElementKayfman(item);
kayfmanZone.append(newCardKayfman);
})

//мой первый js код
// function openForm() {
//   ("myForm").style.display = "flex";
// }
// function openForm() {
//   if ((myForm).style.display = "flex") {
//     (button).style.display = "none";
//   }
// }
// function closeForm() {
//   ("myForm").style.display = "none";
// }
// function closeForm() {
//   if ((myForm).style.display = "none") {
//     (button).style.display = "flex";
//   }
// }
