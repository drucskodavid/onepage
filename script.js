const params = new URLSearchParams(window.location.search);

const data = {
    city: params.get("city") || "Szombathely",
    state: params.get("state") || "Vas",
    name: params.get("name") || "Minta Tamás Norbert",
    phone: params.get("phone") || "+36 30 123 4567",
    mail: params.get("mail") || "info@minta.hu",
    address: params.get("address") || "Szombathely, Minta utca 12/A",
    market: params.get("market") || "Villanyszerelés"
};

document.querySelectorAll("[data-var]").forEach(el => {
    const key = el.dataset.var;

    if (data[key] !== undefined) {
        el.textContent = data[key];
    }
});




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

let demoNotice = document.getElementById('demo');
if (localStorage.getItem("democlosed") == 'y') {
  closeNotice();
}

if (params.get("skipdemo") == 0) {
  localStorage.clear();
  location.href = '/';
}

if (params.get("skipdemo") == 1) {
  closeNotice();
  location.href = '/';
}


function closeNotice() {
  demoNotice.style.display = 'none';
  localStorage.setItem("democlosed", "y");
}