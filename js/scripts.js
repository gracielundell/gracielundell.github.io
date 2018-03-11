/*jshint esversion: 6 */

// $(document).ready(function(){
//   $('.parallax').parallax();
//   $(window).scroll(function() {
//         var distanceFromTop = $(document).scrollTop();
//         if (distanceFromTop >= $('.parallax-container').height())
//         {
//             $('.main__nav').addClass('fixed');
//         }
//         else
//         {
//             $('.main__nav').removeClass('fixed');
//         }
//     });
// });


// for displaying the images
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

// for moving between the images
// let slides = document.querySelectorAll('.imgs');
// let currentImg = slides.getElementsByTagName('img');
let imagemSelect = document.getElementById('current');
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
  let imagem = imgs[i];
  clickImage(imagem, i);
}

function clickImage(imagem, i) {
  imagem.addEventListener('click', function(event) {
    event.preventDefault();
    mudaImagem(imagem, i);
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

function mudaImagem(imagem, i) {
  let path = imagem.getAttribute('src');
  imagemSelect.setAttribute('src', path);
}
