let images=["./img/1.png","./img/2.png","./img/3.png"]; //The imgs of rock/paper/scissors
const imgPlayer=document.getElementById("imagePlayer"); // imgPlayer equals the the img that the player choosed
const imgAI=document.getElementById("imageIA");//imgAI equals the img that IA choosed
const gameEnd=document.getElementById("gameEnd");// For the results animation
const scoregeneral=document.querySelector('.score');
// class Round{
//     constructor(round,resultplayer,resultIA,result){
//         this.round=round;
//         this.resultplayer=resultplayer;
//         this.resultIA=resultIA;
//         this.result=result;
//     }


// }
// firstable we declare string variables of what the player&IA choosed with a null value
let choiceplayer;
let choiceAI;
// Then we declare the points and the rounds that the player&AI earned by playing
let scorePl=0;
let scoreIA=0;
let roundAI=0;
let roundPl=0;
//DOM setting for the rock/paper/scissors :
const pierre=document.getElementById("pierre");
const papier=document.getElementById("papier");
const ciseaux=document.getElementById("ciseaux");

pierre.addEventListener("click", function() {
     imgAI.src="./img/giphy.gif";//Animation before the AI choose his random img
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
    if(choiceplayer==='Pierre' && choiceAI==='Papier'){
        pierre.style.backgroundColor='red';
        scoreIA++;
    }
    else if(choiceplayer==='Pierre' && choiceAI==='Ciseaux'){
        scorePl++;
        document.getElementById("Random").style.backgroundColor='red';
    }
    else if(choiceplayer==='Papier' && choiceAI==='Pierre'){
        scorePl++;
        document.getElementById("Random").style.backgroundColor='red';
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
        document.getElementById("Random").style.backgroundColor='red';
    }
    document.getElementById('scorePlayer').innerHTML=scorePl
    document.getElementById('scoreIA').innerHTML=scoreIA
    document.getElementById("Random").innerHTML=choiceAI
    if(scorePl>2){
        roundPl++
        scorePl=0;
        scoreIA=0;
        leaderBoard();
        document.getElementById('scorePlayer').innerHTML=scorePl
        document.getElementById('scoreIA').innerHTML=scoreIA
    }
    else if(scoreIA>2){
        roundAI++
        scoreIA=0;
        scorePl=0;
        leaderBoard();
        document.getElementById('scorePlayer').innerHTML=scorePl
        document.getElementById('scoreIA').innerHTML=scoreIA
    }
    else if (roundPl>4) {
        scoregeneral.innerHTML=``;
    }
    else if(roundAI>4){
        scoregeneral.innerHTML=``;
    }
}
function leaderBoard(){
    scoregeneral.innerHTML=`L'IA a remporté :${roundAI} rounds<br>
    Vous avez remporté : ${roundPl} rounds
    `;
    if(roundAI>4){
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
        scoregeneral.innerHTML=`GAME OVER !`;
        roundAI=0;
        roundPl=0;
    }
    else if(roundPl>4){
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
        scoregeneral.innerHTML=`CONGRATULATION !`;
        roundAI=0;
        roundPl=0;
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
