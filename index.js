let randomNumber1,randomNumber2;
let clicked1=false,clicked2=false;

function func1(){
    if(!clicked1){
        clicked1=true;
    }
    else{
        return;
    }
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    // var randomDiceImg="dice"+randomNumber1+".png";
    var imgSrc="images/dice"+randomNumber1+".png";
    var img1=document.querySelectorAll("img")[0].setAttribute("src",imgSrc);
    if(clicked1 && clicked2){
        calc();
    }
}

function func2(){
    if(!clicked2){
        clicked2=true;
    }
    else{
        return;
    }
    randomNumber2=Math.floor(Math.random()*6)+1;
    // var randomDiceImg2="dice"+randomNumber2+".png";
    var imgSrc2="images/dice"+randomNumber2+".png";
    var img2=document.querySelectorAll("img")[1].setAttribute("src",imgSrc2);
    if(clicked1 && clicked2){
        calc();
    }
}

function calc(){
    // if(!clicked1 || !clicked2) return;
    // console.log(randomNumber1+' '+randomNumber2);
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="1st player Wins!";
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML="2nd player Wins!";
    }
    else{
        document.querySelector("h1").innerHTML="Draw!";
    }
}

document.getElementById('img1').addEventListener('click',func1);
document.getElementById('img2').addEventListener('click',func2);

var button=document.getElementsByClassName('btn')[0];

button.addEventListener('click',function(){
    // console.log('clicked!');
    var changeTo='images/dice6.png';
    document.querySelectorAll("img")[0].setAttribute("src",changeTo);
    document.querySelectorAll("img")[1].setAttribute("src",changeTo);
    document.querySelector('h1').innerHTML='Welcome!';
    clicked1=false;
    clicked2=false;
});

// console.log(el);