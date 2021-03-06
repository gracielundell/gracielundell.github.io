/*jshint esversion: 6 */

// for displaying the images on Alpha-plants
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

// for moving between the images
let imageSelect = document.getElementById('current');
let previous = document.querySelector('.previous');
let next = document.querySelector('.next');

previous.style.visibility = 'hidden';

let counter = 0;


// e is the event paramter, changes as the target changes (each img clicked on)
imgs.forEach(img => img.addEventListener('click', imgClick));

// what happens when you click on an image
function imgClick(e) {
  // reset opacity
  imgs.forEach(img => img.style.opacity = 1);

  // change current img to the img most recently clicked
  current.src = e.target.src;

  // apply opacity to selected img
  e.target.style.opacity = opacity;
}

// for next/previous functionality
next.addEventListener('click', nextSlide, false);
previous.addEventListener('click', previousSlide, false);
for (let i = 0; i < imgs.length; i++) {
  let image = imgs[i];
  clickImage(image, i);
}

function clickImage(image, i) {
  image.addEventListener('click', function(event) {
    event.preventDefault();
    mudaImagem(image, i);
    goToSlide(i);
  });
}

// click thumbnail to go directly to that slide
function goToSlide(n) {
  counter = (n + imgs.length) % imgs.length;
  mudaImagem(imgs[counter], n);
  checkCounter(counter);
  console.log(counter);
}

// slide count; hide previous if on A
function checkCounter(slideNum0, slideNum23) {
  if(counter === 0) {
    previous.style.visibility = 'hidden';
    console.log("previous btn should be hidden");
  } else {
    previous.style.visibility = 'visible';
    console.log("previous btn should be showing");
    console.log("===================");
  }
  if(counter === 23) {
    next.style.visibility = 'hidden';
    console.log("next btn should be hidden");
  } else {
    next.style.visibility = 'visible';
    console.log("next btn should be showing");
    console.log("===================");
  }
}

function nextSlide() {
  goToSlide(counter + 1);
  checkCounter(counter);
}

function previousSlide() {
  goToSlide(counter - 1);
  checkCounter(counter);
}

function mudaImagem(image, i) {
  let path = image.getAttribute('src');
  imageSelect.setAttribute('src', path);
}
