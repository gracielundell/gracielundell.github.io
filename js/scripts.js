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



const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

// e is the event paramter, changes as the target changes (each img clicked on)
imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  // reset opacity
  imgs.forEach(img => img.style.opacity = 1);

  // change current img to the img most recently clicked
  current.src = e.target.src;

  // apply opacity to selected img
  e.target.style.opacity = opacity;
}
