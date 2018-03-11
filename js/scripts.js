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
  let index = i;
  let imagem = imgs[i];
  clickImage(imagem, index);
}

function goToSlide(n) {
  counter = (n + imgs.length) % imgs.length;
  mudaImagem(imgs[counter], n);
  console.log(counter);
}

function nextSlide() {
  goToSlide(counter + 1);
}

function previousSlide() {
  goToSlide(counter - 1);
}

function mudaImagem(imagem, index) {
  let path = imagem.getAttribute('src');
  imagemSelect.setAttribute('src', path);
}

function clickImage(imagem, index) {
  imagem.addEventListener('click', function(event) {
    event.preventDefault();
    mudaImagem(imagem, index);
    goToSlide(index);
    console.log(counter);
  });
}
