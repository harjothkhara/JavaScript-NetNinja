// reference to button
const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
  popup.style.display = 'block'; // from display none originally - see css
});

close.addEventListener('click', () => {
  popup.style.display = 'none'; // now when we click the x it closes.
})

// clicking on the black overlay also closes the popup window

popup.addEventListener('click', () => {
  popup.style.display = 'none'; // now when we click the black overlay popup also closes.
})
