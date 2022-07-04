let images=["./img/1.png","./img/2.png","./img/3.png"];
const imgPlayer=document.getElementById("imagePlayer");
const imgAI=document.getElementById("imageIA");
const gameEnd=document.getElementById("gameEnd");

let choiceplayer;
let choiceAI;

let scorePl=0;
let scoreIA=0;

const pierre=document.getElementById("pierre");
const papier=document.getElementById("papier");
const ciseaux=document.getElementById("ciseaux");

pierre.addEventListener("click", function() {
     imgAI.src="./img/giphy.gif";
    setTimeout(rock,1000)
    });
papier.addEventListener("click",function() {
    imgAI.src="./img/giphy.gif";
   setTimeout(paper,1000)
   });
ciseaux.addEventListener("click",function() {
    imgAI.src="./img/giphy.gif";
   setTimeout(cut,1000)
   });



// game functions instructions >>>>
function rock(){ 
    papier.style.backgroundColor='black';
    ciseaux.style.backgroundColor='black';
    pierre.style.backgroundColor='green';
    document.getElementById("Random").style.backgroundColor='green';
    randomInteger();
    imgPlayer.src=images[0];
    choiceplayer='Pierre';
    imgAI.src=images[randomnum];
    choice();
    setTimeout(score,100);
}
function paper(){
    ciseaux.style.backgroundColor='black';
    pierre.style.backgroundColor='black';
    papier.style.backgroundColor='green';
    document.getElementById("Random").style.backgroundColor='green';
    randomInteger()
    imgPlayer.src=images[1];
    choiceplayer='Papier';
    imgAI.src=images[randomnum];
    choice();
    setTimeout(score,100);
}
function cut(){
    papier.style.backgroundColor='black';
    pierre.style.backgroundColor='black';
    ciseaux.style.backgroundColor='green';
    document.getElementById("Random").style.backgroundColor='green';
    randomInteger();
    imgPlayer.src=images[2]
    choiceplayer='Ciseaux';
    imgAI.src=images[randomnum];
    choice();
    setTimeout(score,100);
}
function score(){
    if(imgPlayer.src===imgAI.src){
        alert("Egalité");
    }
    else if(choiceplayer==='Pierre' && choiceAI==='Papier'){
        pierre.style.backgroundColor='red';
        scoreIA++;
    }
    else if(choiceplayer==='Pierre' && choiceAI==='Ciseaux'){
        scorePl++;
    }
    else if(choiceplayer==='Papier' && choiceAI==='Pierre'){
        scorePl++;
    }
    else if(choiceplayer==='Papier' && choiceAI==='Ciseaux'){
        papier.style.backgroundColor='red';
        scoreIA++;
    }
    else if(choiceplayer==='Ciseaux' && choiceAI==='Pierre'){
        ciseaux.style.backgroundColor='red';
        scoreIA++;
    }
    else if(choiceplayer==='Ciseaux' && choiceAI==='Papier'){
        scorePl++;
    }
    document.getElementById('scorePlayer').innerHTML=scorePl
    document.getElementById('scoreIA').innerHTML=scoreIA
    document.getElementById("Random").innerHTML=choiceAI
    if (scorePl===5) {
        scorePl=0;
        scoreIA=0;
        const video=document.createElement('video');
        video.src='./img/win.mp4';
        video.autoplay = true;
        video.controls = false;
        video.muted = false;
        gameEnd.appendChild(video);
        gameEnd.style.display="block"
        video.addEventListener('ended', (event) => {
            gameEnd.style.display = 'none';
            gameEnd.innerHTML='';
        })

    }
    else if(scoreIA===5){
        scoreIA=0;
        scorePl=0;
        const video=document.createElement('video');
        video.src='./img/lose.mp4';
        video.autoplay = true;
        video.controls = false;
        video.muted = false;
        gameEnd.appendChild(video);
        gameEnd.style.display="block"
        video.addEventListener('ended', (event) => {
            gameEnd.style.display = 'none';
            gameEnd.innerHTML='';
        })

    }
}



// Randomnum generator for the AI select >>
let min=0;
let max=2;
function randomInteger() {
    randomnum=Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomnum);
}
function choice(){
    if (randomnum===0) {
        choiceAI='Pierre'
    }
    else if(randomnum===1){
        choiceAI='Papier'
    }
    else{
        choiceAI='Ciseaux'
    }
}
