// function carouselMove (x) {

// };

// toggle(class, true|false);

// // element.classList.toggle("classToRemove", false); 
// // element.classList.toggle("classToAdd", true);



// // document.getElementById("myBtn").onclick = function() {myFunction()};

// // /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
// // function myFunction() {
// //   document.getElementById("myDropdown").classList.toggle("show");
// // }

// // // Close the dropdown if the user clicks outside of it
// // window.onclick = function(event) {
// //   if (!event.target.matches('.dropbtn')) {

// //     var dropdowns = document.getElementsByClassName("dropdown-content");
// //     var i;
// //     for (i = 0; i < dropdowns.length; i++) {
// //       var openDropdown = dropdowns[i];
// //       if (openDropdown.classList.contains('show')) {
// //         openDropdown.classList.remove('show');
// //       }
// //     }
// //   }
// }
var carouselAnimate = document.getElementsByClassName('carousel')[0];

document.getElementsByClassName('carousel-button')[0].onclick = function() {
    if (carouselAnimate.classList.contains('carousel-move-second')) {
      carouselAnimate.classList.remove('carousel-move-second')
    }
    if (carouselAnimate.classList.contains('carousel-move-third')) {
      carouselAnimate.classList.remove('carousel-move-third')
    }
    carouselAnimate.classList.add('carousel-move'); 
}


var carouselAnimate = document.getElementsByClassName('carousel')[0];

document.getElementsByClassName('carousel-button')[1].onclick = function() {
    if (carouselAnimate.classList.contains('carousel-move')) {
      carouselAnimate.classList.remove('carousel-move')
    }
    if (carouselAnimate.classList.contains('carousel-move-third')) {
      carouselAnimate.classList.remove('carousel-move-third')
    }
    carouselAnimate.classList.add('carousel-move-second'); 
}

var carouselAnimate = document.getElementsByClassName('carousel')[0];

document.getElementsByClassName('carousel-button')[2].onclick = function() {
    if (carouselAnimate.classList.contains('carousel-move')) {
      carouselAnimate.classList.remove('carousel-move')
    }
    if (carouselAnimate.classList.contains('carousel-move-second')) {
      carouselAnimate.classList.remove('carousel-move-second')
    }
    carouselAnimate.classList.add('carousel-move-third'); 
}