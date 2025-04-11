let bm1 = document.getElementById("m1");
let bm2 = document.getElementById("m2");
let bm3 = document.getElementById("m3");
let homeBar = document.querySelector(".hom");
let bg1 = document.getElementById("g1");
let bg2 = document.getElementById("g2");
let bg3 = document.getElementById("g3");
let guestBar = document.querySelector(".gue");

let count = 0;

bm1.addEventListener("click", function() {
    homeBar.textContent = ++count 
})
bm2.addEventListener("click", function() {
    homeBar.textContent = count+=2
})
bm3.addEventListener("click", function() {
    homeBar.textContent = count+=3 
})

let count2 = 0
bg1.addEventListener("click", function() {
    guestBar.textContent = ++count2 
})
bg2.addEventListener("click", function() {
    guestBar.textContent = count2+=2
})
bg3.addEventListener("click", function() {
    guestBar.textContent = count2+=3 
})

let a = "largest countries";
let b = ["China", " India", " USA"];

let c = "best fruits";
let d = ["Apples", " Bananas"]
function generateSentence(desc, arr) {
    return `The ${arr.length} ${desc} are ${arr}`
}
console.log(generateSentence(a,b))
console.log(generateSentence(c,d))