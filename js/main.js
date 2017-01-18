const circles = document.querySelectorAll('.change-colors > button');
const links = Array.from(document.querySelectorAll('nav > .link > button'));
const svgs = Array.from(document.querySelectorAll('.icon'));
const fontSize = document.getElementById('fontSizeInput')

function handleClick() {
  links.map(link => link.style.setProperty(`${this.name}`, this.value));
  svgs.map(svg => svg.style.setProperty('fill', this.value));
}
circles.forEach(circle => circle.addEventListener('click', handleClick));
// console.log(currencies);
const insideCard = document.getElementById('api-data');


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
