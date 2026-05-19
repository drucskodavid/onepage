/* Smooth scrolling */
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
          window.location.hash = hash;
        });
      }
    });
  });

/* Scroll to top button */
let scrollToTopBtn = document.getElementById('btTop');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 512 || document.documentElement.scrollTop > 512) {
    scrollToTopBtn.style.visibility = "visible";
  } else {
    scrollToTopBtn.style.visibility = "hidden";
  }
}

/*
scrollToTopBtn.onclick = function(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
*/