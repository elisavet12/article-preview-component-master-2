// window.addEventListener("keydown", function (e) {const share = document.querySelector(".share-img");
// console.log(share);}
const test = document.getElementById("test");
const share = document.getElementById("myBtn");
share.addEventListener("click", myFunction);

function myFunction(){
  document.getElementById("demo").innerHTML=test;
}
