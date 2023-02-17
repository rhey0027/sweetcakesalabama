function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  function fadeOut(){
    setInterval(loader, 2000);
  }
  window.onload=fadeOut;


// login password
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click",function(e) {
const type=password.getAttribute("type") === "password" ? "text" : "password";
password.setAttribute("type",type);
this.classList.toggle("bi-eye");
});
