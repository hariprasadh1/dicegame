const randomA=Math.floor(Math.random()*6)+1;
const randomB=Math.floor(Math.random()*6)+1;
randomADiceRoll="images/dice"+randomA+".png";
randomBDiceRoll="images/dice"+randomB+".png";

const die1=document.querySelector('.img1')
die1.setAttribute("src",randomADiceRoll)

let dice2=document.querySelector('.img2')

dice2.setAttribute("src",randomBDiceRoll)
console.log(dice2.getAttribute('images'))


let results=document.querySelector(".hello")

if(randomA>randomB)
results.innerHTML="Player 1 Wins"
else if(randomA < randomB)
results.innerHTML="Player 2 Wins"
else 
results.innerHTML="Draw"

setTimeout(function(){
  results.innerHTML="Refresh Me"
},1000);
