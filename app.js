let homeLink = document.querySelector(".homeLink");
let photoOne = document.querySelector('#one');
let photoTwo = document.querySelector('#two');
let photoThree = document.querySelector('#three');
let photoFour = document.querySelector('#four');

homeLink.onclick = function() {
    openModal();currentSlide(4);
}

photoOne.onclick = function() {
    openModal();currentSlide(1);
}

photoTwo.onclick = function() {
    openModal();currentSlide(2);
}

photoThree.onclick = function() {
    openModal();currentSlide(3);
}

photoFour.onclick = function() {
    openModal();currentSlide(4);
}

let close = document.querySelector('.close');
close.onclick = function() {
    closeModal();
}

// Open the Modal

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  let prev = document.querySelector('.prev');
  let next = document.querySelector('.next');

  prev.onclick = function() {
      plusSlides(-1);
  }

  next.onclick = function() {
      plusSlides(1);
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  let demoOne = document.querySelector("#demoOne");
  let demoTwo = document.querySelector("#demoTwo");
  let demoThree = document.querySelector("#demoThree");
  let demoFour = document.querySelector("#demoFour");

  demoOne.onclick = function() {
      currentSlide(1);
  }
  demoTwo.onclick = function() {
    currentSlide(2);
}
demoThree.onclick = function() {
    currentSlide(3);
}
demoFour.onclick = function() {
    currentSlide(4);
}

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
