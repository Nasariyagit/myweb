// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});
// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
//submission function
/*function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "nasariyashabeerali@gmail.com",
    Password : "june 061991",
    To : 'nasariyashabeerali@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New contactform enquiry",
    Body : "Name:"  + document.getElementById("name").value
     + "\nEmail:" + document.getElementById("email").value
     + "\nMessage:" + document.getElementById("message").value
}).then(
  message => alert("message sent succesfuly");
);

}*/