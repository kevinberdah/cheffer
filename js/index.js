const selectElement = (element) => document.querySelector(element);
//Open and close nav on click
selectElement('.menu-icons').addEventListener('click', () => {
  selectElement('nav').classList.toggle('active');
});

const images = [
  'bg.jpg',
  'bg2.jpg',
  'bg3.jpg',
  'bg4.jpg'
];

let i = 0;
const changeImage = () => {
  if(++i === images.length) i = 0;
  selectElement('.hero').style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.8),rgba(0,0,0,0.8)),'+
                                            ' url(./images/' +
                                            images[i] + 
                                            ') center no-repeat';
}

$(document).ready(() => {
  setInterval(changeImage, 5000);
});
