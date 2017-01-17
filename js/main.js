const circles = document.querySelectorAll('.change-colors > button');
const links = Array.from(document.querySelectorAll('nav > .link > button'));
const svgs = Array.from(document.querySelectorAll('.icon'));
const fontSize = document.getElementById('fontSizeInput')
// endpoint for ajax data coming from API
const endpoint = 'http://api.coindesk.com/v1/bpi/currentprice.json';
const currencies = [];
const dataObj = fetch(endpoint)
  .then(blob => blob.json())
    .then(data => currencies.push(
      data.bpi.EUR.description, data.bpi.EUR.rate,
      data.bpi.USD.description,data.bpi.USD.rate,
      data.bpi.GBP.description, data.bpi.GBP.rate
    ));

function handleClick() {
  links.map(link => link.style.setProperty(`${this.name}`, this.value));
  svgs.map(svg => svg.style.setProperty('fill', this.value));
}
circles.forEach(circle => circle.addEventListener('click', handleClick));
// console.log(currencies);
const insideCard = document.getElementById('api-data');
// window.onload function needed because u create elem before loading page
window.onload = function() {
  insideCard.innerHTML = currencies;
}

// CHANGE FONT SIZE FOR TITLE
const inputs = document.querySelectorAll('.controls input');
function handleUpdate() {
  const px = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + px);
}
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
inputs.forEach(input => input.addEventListener('touchmove', handleUpdate));
// CHANGE FONT FAMILY
function changeFont(font){
 document.getElementById("main-title").style.fontFamily = font.value;
}
