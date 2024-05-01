const claireLastDigits = `${60 + 3}`;
const briceLastDigits = `0${10 - 1}`;
const clairePhoneNumber = `06 19 12 04 ${claireLastDigits}`;
const bricePhoneNumber = `07 81 48 46 ${briceLastDigits}`;
const infoText = `
En cas d'urgence le jour J, contactez un de nos témoins: <br />
Claire: ${clairePhoneNumber} <br />
Brice : ${bricePhoneNumber}`;

const element = document.querySelector("#temoins-info-anchor");
element.innerHTML = infoText;
