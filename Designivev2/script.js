window.onscroll = function() {scrollFunction()};
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

// Onload script
window.onload = basicHTML();

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    document.getElementById("header").style.height = "5%";
    document.getElementById("header").style.fontSize = "10px";
    document.getElementById("menu").style.fontSize = "16px";
    document.getElementById("title").style.marginTop = "auto";
    document.getElementById("title").style.marginBottom = "auto";


  } else {
    document.getElementById("header").style.height = "16%";
    document.getElementById("header").style.fontSize = "16px";
    
  }

  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("scrollBtn").style.right = "1rem";
  } else {
    document.getElementById("scrollBtn").style.right = "-100rem";

  }
}
function topFunction() {
 window.scrollTo({top: 0, behavior: 'smooth'});
}
function alertFunction() {
  alert("Site is a Demo verison login/register does not work");
}
function loginScroll() {
  window.scrollTo({top: 900, behavior: 'smooth'});
}
function startedScroll(){
  window.scrollTo({top: 1200, behavior: 'smooth'});
}
function exampleScroll(){
  window.scrollTo({top: 1550, behavior: 'smooth'});
}




document.getElementById('choice').addEventListener('click', function(){
  var usrChoice = document.getElementById('choice').value;
  if(usrChoice=="basic"){
    basicHTML();
  }else if(usrChoice == "adaptive"){
    adaptiveHTML();
  }else if(usrChoice == "animated"){
    animatedHTML();
  }else if(usrChoice == "tailorMade"){
    tailorHTML();
  }
});

function basicHTML(){
  document.getElementById("rightStarted").innerHTML = "<h1>Basic</h1>";
};
function adaptiveHTML() {  
  document.getElementById("rightStarted").innerHTML = "<h1>Adaptive</h1> <p>Flexible to work on diffrent platforms. For Example made to work for both IPhone, Android and PC</p>";
}
function animatedHTML() {  
  document.getElementById("rightStarted").innerHTML = "<h1>Animated</h1>";
}
function tailorHTML() {  
  document.getElementById("rightStarted").innerHTML = "<h1>Tailor-Made</h1>";
}


function test(){
  document
}