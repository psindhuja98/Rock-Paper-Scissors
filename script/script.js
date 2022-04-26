'use script'
//Element Selector
//score elements selectors
const UserScoreE1 = document.getElementById('user-score');
const ComputerScoreE1 = document.getElementById('computer-score');
//weapon elements selectors
const WeaponsContainer = document.getElementById('weapon-container');
const UserWeaponE1 = document.getElementById('user-weapon');
const ComputerWeaponE1 = document.getElementById('computer-weapon');
//result element selectors
const ResultContainer = document.getElementById('result-container');
const ResultE1 = document.getElementById('result');

//Project variables
let UserScore= 0;
let ComputerScore = 0;
let UserChoice = ' ';
let ComputerChoice = ' ';
const weapons = ['rock','paper','scissors'];

//FUNCTION
const init = function(){
    UserScoreE1.textContent = UserScore;
    ComputerScoreE1.textContent = ComputerScore;

};
const displayWeapons = function(){
    weapons.forEach((weapon)=>{
        const WeaponE1 = document.createElement('button');
        WeaponE1.classList.add('weapon');
        WeaponE1.setAttribute('value', `${weapon}`);
        WeaponE1.innerHTML=`<img src= "./assests/images/${weapon}.png" alt="${weapon}"/> `;
        WeaponsContainer.appendChild(WeaponE1);

    });
};
const showResult = function(UserChoice,ComputerChoice,result){
    ResultContainer.classList.add('show');
    UserWeaponE1.textContent = UserChoice.toUpperCase();
    ComputerWeaponE1.textContent = ComputerChoice.toUpperCase();


    if(result === 'draw'){
        ResultE1.textContent = 'Game Draw';
        }
        else if(result === 'win'){
           ResultE1.textContent = 'you won';
           UserScore++;
        }
        else if(result === 'lost'){
            ResultE1.textContent = 'you lost';
            ComputerScore++;
        }
        UserScoreE1.textContent = UserScore;
        ComputerScoreE1.textContent = ComputerScore;

};
//Game rules
const getResult = function(UserChoice,ComputerChoice){
    let resultString = `${UserChoice}${ComputerChoice}`;
    if(UserChoice === ComputerChoice){
        showResult(UserChoice,ComputerChoice,'draw');
    }
    else if(resultString === 'rockscissors'||
            resultString === 'paperrock'||
            resultString === 'scissorspaper' ){
                showResult(UserChoice,ComputerChoice,'win');
            }
    else if(resultString === 'scissporsrock'||
            resultString === 'rockpaper'||
            resultString === 'paperscissors'){
                showResult(UserChoice,ComputerChoice,'lost');
            }
    
};
init();
displayWeapons();

document.querySelectorAll('button').forEach((weapon)=>{
    weapon.addEventListener('click', () => {
        UserChoice = weapon.value;
        ComputerChoice = weapons[Math.trunc(Math.random()*weapons.length)];
        getResult(UserChoice,ComputerChoice);
    });
});



