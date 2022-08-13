window.onscroll = function() {myFunction();};

var navb = document.getElementById("color-apply");
var sticky = navb.offsetTop;

function myFunction() {
if (window.pageYOffset >= sticky) {
  navb.classList.add("sticky");
} else {
  navb.classList.remove("sticky");
}
}
var h=document.querySelector(".navbar-brand");
h.addEventListener("mouseover",function(){
  h.style.color="black";
})
h.addEventListener("mouseout",function(){
  h.style.color="white";
})
var a=document.getElementById("about");
a.addEventListener("mouseover",function(){
  a.style.color="black";
})
a.addEventListener("mouseout",function(){
  a.style.color="white";
})
var e=document.getElementById("educ");
e.addEventListener("mouseover",function(){
  e.style.color="black";
})
var e=document.getElementById("educ");
e.addEventListener("mouseout",function(){
  e.style.color="white";
})
var contact=document.getElementById("contact");
contact.addEventListener("mouseover",function(){
  contact.style.color="black";
})
var contact=document.getElementById("contact");
contact.addEventListener("mouseout",function(){
  contact.style.color="white";
})
































// var brand=document.getElementById("home");
// console.log(brand);
// brand.addEventListener("mouseover",function(){
//   console.log("mouseover");

// })
/* <font onmouseover="this.style.color='red';" onmouseout="this.style.color='black';">Text1</font> */
// var nav = document.querySelector('#nav');
// let navTop = nav.offsetTop;

// function fixedNav() {
//   if (window.scrollY >= navTop) {    
//     nav.classList.add('fixed');
//   } else {
//     nav.classList.remove('fixed');    
//   }
// }

// window.addEventListener('scroll', fixedNav);