const selectElement = (element) => document.querySelector(element);
//Open and close nav on click
selectElement('.menu-icons').addEventListener('click', () => {
  selectElement('nav').classList.toggle('active');
});

const hero = selectElement('.hero');
window.addEventListener('scroll', () => {
  hero.style.opacity = 1 - window.pageYOffset/550;
  hero.style.top = window.pageYOffset+'px';
})

const images = [
  'bg.jpg',
  'bg2.jpg',
  'bg3.jpg',
  'bg4.jpg'
];

let i = 0;
const changeImage = () => {
  if(++i === images.length) i = 0;
  hero.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.8),rgba(0,0,0,0.8)),'+
                                            ' url(./images/' +
                                            images[i] + 
                                            ') center no-repeat';
}

$(document).ready(() => {
  setInterval(changeImage, 5000);
});
