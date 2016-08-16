var carouselAnimate = document.getElementsByClassName('carousel')[0];
var carouselClasslist = carouselAnimate.classList

document.getElementsByClassName('carousel-button')[0].onclick = function() {
    if (carouselAnimate.classList.contains('carousel-move-second')) {
      carouselClasslist.remove('carousel-move-second')
    }
    if (carouselAnimate.classList.contains('carousel-move-third')) {
      carouselClasslist.remove('carousel-move-third')
    }
    carouselClasslist.add('carousel-move'); 
}


var carouselAnimate = document.getElementsByClassName('carousel')[0];

document.getElementsByClassName('carousel-button')[1].onclick = function() {
    if (carouselClasslist.contains('carousel-move')) {
      carouselClasslist.remove('carousel-move')
    }
    if (carouselClasslist.contains('carousel-move-third')) {
      carouselClasslist.remove('carousel-move-third')
    }
    carouselClasslist.add('carousel-move-second'); 
}

var carouselAnimate = document.getElementsByClassName('carousel')[0];

document.getElementsByClassName('carousel-button')[2].onclick = function() {
    if (carouselClasslist.contains('carousel-move')) {
      carouselClasslist.remove('carousel-move')
    }
    if (carouselClasslist.contains('carousel-move-second')) {
      carouselClasslist.remove('carousel-move-second')
    }
    carouselClasslist.add('carousel-move-third'); 
}

