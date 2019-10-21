const selectElement = (element) => document.querySelector(element);
//Open and close nav on click
selectElement('.menu-icons').addEventListener('click', () => {
  selectElement('nav').classList.toggle('active');
});

/*const choices = new Choices('[data-trigger]', {
  searchEnabled: false,
  itemSelectText: '',
});*/

