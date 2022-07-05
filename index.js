let images=["./img/1.png","./img/2.png","./img/3.png"]; //The imgs of rock/paper/scissors
const imgPlayer=document.getElementById("imagePlayer"); // imgPlayer equals the the img that the player choosed
const imgAI=document.getElementById("imageIA");//imgAI equals the img that IA choosed
const gameEnd=document.getElementById("gameEnd");// For the results animation
const scoregeneral=document.querySelector('.score');

// firstable we declare string variables of what the player&IA choosed with a null value
let choiceplayer;
let choiceAI;
// Then we declare the points and the rounds that the player&AI earned by playing
let scorePl=0;
let scoreIA=0;
let round=0;
let resultat="";

//DOM setting for the rock/paper/scissors :
const pierre=document.getElementById("pierre");
const papier=document.getElementById("papier");
const ciseaux=document.getElementById("ciseaux");

pierre.addEventListener("click", function() {
     animation();//Animation before the AI choose his random img
    setTimeout(rock,1000)
    });
papier.addEventListener("click",function() {
    animation();
   setTimeout(paper,1000)
   });
ciseaux.addEventListener("click",function() {
     animation();
   setTimeout(cut,1000)
   });

// game functions instructions >>>>
function rock(){ 
    papier.style.backgroundColor='blueviolet';
    ciseaux.style.backgroundColor='blueviolet';
    pierre.style.backgroundColor='green';
    document.getElementById("Random").style.backgroundColor='green';//style to show out what the player clicked
    randomInteger();//generate the random number for our AI
    imgPlayer.src=images[0];
    choiceplayer='Pierre';
    imgAI.src=images[randomnum];//generate an img for the AI
    choice();//nominate the choice of AI as a string
    setTimeout(score,100);//launch the result of the round
}
function paper(){
    ciseaux.style.backgroundColor='blueviolet';
    pierre.style.backgroundColor='blueviolet';
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
    papier.style.backgroundColor='blueviolet';
    pierre.style.backgroundColor='blueviolet';
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
    if(choiceplayer===choiceAI){
        round++
        resultat="Egalité"
        leaderBoard();
    }
    else if(choiceplayer==='Pierre' && choiceAI==='Papier'){
        round++
        pierre.style.backgroundColor='red';
        scoreIA++;
        resultat=`IA a gagné le round ${round}`;
        leaderBoard();
    }
    else if(choiceplayer==='Pierre' && choiceAI==='Ciseaux'){
        round++
        scorePl++;
        document.getElementById("Random").style.backgroundColor='red';
        resultat=`Player 1 a gagné le round ${round}`
        leaderBoard();
    }
    else if(choiceplayer==='Papier' && choiceAI==='Pierre'){
        round++
        scorePl++;
        document.getElementById("Random").style.backgroundColor='red';
        resultat=`Player 1 a gagné le round ${round}`
        leaderBoard();
    }
    else if(choiceplayer==='Papier' && choiceAI==='Ciseaux'){
        round++
        papier.style.backgroundColor='red';
        scoreIA++;
        resultat=`IA a gagné le round ${round}`
        leaderBoard();
    }
    else if(choiceplayer==='Ciseaux' && choiceAI==='Pierre'){
        round++
        ciseaux.style.backgroundColor='red';
        scoreIA++;
        resultat=`IA a gagné le round ${round}`
        leaderBoard();
    }
    else if(choiceplayer==='Ciseaux' && choiceAI==='Papier'){
        round++
        scorePl++;
        document.getElementById("Random").style.backgroundColor='red';
        resultat=`Player 1 a gagné le round ${round}`
        leaderBoard();
    }
    document.getElementById('scorePlayer').innerHTML=scorePl
    document.getElementById('scoreIA').innerHTML=scoreIA
    document.getElementById("Random").innerHTML=choiceAI
}
function leaderBoard(){
    scoregeneral.innerHTML= scoregeneral.innerHTML+ `<br> Round : ${round} <br>
    Vous avez choisi : ${choiceplayer} // L'IA a choisis : ${choiceAI}<br>
     ${resultat}`;
    if(scoreIA===3){
        const video=document.createElement('video');
        video.src='./img/lose.mp4';
        video.autoplay = true;
        video.controls = false;
        video.muted = false;
        video.width = 1300;
        gameEnd.appendChild(video);
        gameEnd.style.display="block"
        video.addEventListener('ended', (event) => {
            gameEnd.style.display = 'none';
            gameEnd.innerHTML='';
        })
        document.getElementById('scorePlayer').innerHTML=scorePl
        document.getElementById('scoreIA').innerHTML=scoreIA
        scoregeneral.innerHTML=`GAME OVER !`;
        scoreIA=0;
        scorePl=0;
        round=0
    }
    else if(scorePl===3){
        const video=document.createElement('video');
        video.src='./img/win.mp4';
        video.autoplay = true;
        video.controls = false;
        video.muted = false;
        video.width = 1300;
        gameEnd.appendChild(video);
        gameEnd.style.display="block"
        video.addEventListener('ended', (event) => {
            gameEnd.style.display = 'none';
            gameEnd.innerHTML='';
        })
        document.getElementById('scorePlayer').innerHTML=scorePl
        document.getElementById('scoreIA').innerHTML=scoreIA
        scoregeneral.innerHTML=`CONGRATULATION !`;
        scoreIA=0;
        scorePl=0;
        round=0
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

function animation(){
    papier.style.backgroundColor='blueviolet';
    pierre.style.backgroundColor='blueviolet';
    ciseaux.style.backgroundColor='blueviolet';
    document.getElementById("Random").style.backgroundColor='black';
    imgAI.src="./img/giphy.gif";
    document.getElementById("Random").innerHTML="SHI-FU-MI";

}
