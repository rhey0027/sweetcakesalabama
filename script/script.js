// subscribe here
var blink =
document.getElementById('subscribe');

setInterval(function () {
    blink.style.opacity = 
    (blink.style.opacity == 0 ? 1 : 0);
}, 1000);

// search box
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active'); 
  section.forEach(sec => {
     let top = window.scrollY;
     let height = sec.offsetHeight;
     let offset = sec.offsetTop - 150;
     let id = sec.getAttribute('id');  
// IF THIS WILL REMOVE SEARCH FORM WILL STILL WORK
    if (top >= offset && top < offset + height) {
       navlinks.forEach(links =>{
         links.classList.remove('active');
         document.querySelector('header .navbar a [href*= '+id+']').classList.add('active')
       });
     };
  });
  }
    document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
   }
    document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
   }
// back to top

const backTopBtn = document.querySelector(".back-top-btn");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    backTopBtn.classList.add("active");
  }
  else {
    backTopBtn.classList.remove("active");
  }
}); 

