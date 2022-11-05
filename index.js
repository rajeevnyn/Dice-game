const ans1=Math.floor(Math.random()*6)+1 ;
document.querySelectorAll("img")[0].setAttribute("src","/images/dice"+ans1+".png");
const ans2=Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[1].setAttribute("src","/images/dice"+ans2+".png");

if(ans1>ans2){
    document.querySelector("h1").innerHTML="player 1 Wins";
}
else{
    document.querySelector("h1").innerHTML="player 2 Wins";
}