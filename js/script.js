// CLICK

//1,2,3

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

h1.addEventListener("click", function(){
    console.log("H1");
    h2.innerText = "Du klickade på H1!"
    document.body.style.backgroundColor = "lightblue";
})

const p = document.querySelector("p");

p.addEventListener("click", function(){
    console.log("P");
    h2.innerText = "Du klickade på P!"
    document.body.style.backgroundColor = "pink";
})

const btn = document.querySelector("button");

btn.addEventListener("click",function(){
    console.log("KNAPP");
    h2.innerText = "Du klickade på knappen!"
    document.body.style.backgroundColor = "orange";
})

// MOUSEENTER / MOUSELEAVE

h1.addEventListener("mouseenter",function(){
    h1.style.color = "red";
})

h1.addEventListener("mouseleave",function(){
    h1.style.color = "blue";
})

p.addEventListener("mouseenter", function(){
    btn.style.color = "red";
})

p.addEventListener("mouseleave", function(){
    btn.style.color = "blue";
})

btn.addEventListener("mouseenter",function(){
    h1.innerText = "Knappen!";
})

btn.addEventListener("mouseleave",function(){
    h1.innerText = "H1-elementet";
})

// BODYN

//1

document.body.addEventListener("mousemove",function(event){
    //h1.style.fontSize = event.clientY+"px";
})

document.body.addEventListener("mousemove",function(event){
    p.style.backgroundColor = `hsl(${event.clientX},100%,50%)`;
})

// FORMS

// 1 

const form = document.createElement("form");
document.body.appendChild(form);

const input = document.createElement("input");
input.type="text";
form.appendChild(input);

const button = document.createElement("button");
form.appendChild(button);
button.innerText = "submit";

button.addEventListener("click",function(event){
    event.preventDefault();
    const h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.innerText = input.value;
})

//2 

const formList = document.createElement("form");
document.body.appendChild(formList);

const inputText = document.createElement("input");
inputText.type = "text";
formList.appendChild(inputText);

const inputNumber = document.createElement("input");
inputNumber.type = "number";
formList.appendChild(inputNumber);

const button1 = document.createElement("button");
formList.appendChild(button1);
button1.innerText = "submit";

button1.addEventListener("click",addList);

function addList(){
    event.preventDefault();
    const ol = document.createElement("ol");
    document.body.appendChild(ol);

    for (let i = 0; i < inputNumber.value; i++){
        let li = document.createElement("li");
        ol.appendChild(li);
        li.innerText = inputText.value;
    }
}

// 3 
const shoppingListHeading = document.createElement("h2");
shoppingListHeading.innerText = "Handlingslista:"
document.body.appendChild(shoppingListHeading);

const shoppingListForm = document.createElement("form");
document.body.appendChild(shoppingListForm);

const itemInput = document.createElement("input");
shoppingListForm.appendChild(itemInput);
itemInput.type = "text";

const amountInput = document.createElement("input");
shoppingListForm.appendChild(amountInput);
amountInput.type = "number";

const submitListButton = document.createElement("button");
shoppingListForm.appendChild(submitListButton);
submitListButton.innerText = "Lägg till i listan";

const shoppingList = document.createElement("ul");
document.body.appendChild(shoppingList);

submitListButton.addEventListener("click",addToList);

function addToList(){
    event.preventDefault();

    let item = document.createElement("li");
    shoppingList.appendChild(item);
    item.innerText = `${amountInput.value} ${itemInput.value}`;

    item.style.backgroundColor = `hsl(${amountInput.value*10},100%,50%)`;

    itemInput.value = "";
    amountInput.value = "";

    // item.addEventListener("click",function(){
    //     item.remove();
    // })
    item.addEventListener("click",removeElement);
}

function removeElement(event){ // återanvändbar remove-funktion
    event.target.remove();
}

// RANDOM

//1 
console.log(Math.random()*100);

// 2
console.log(Math.floor( Math.random()*30) );

// 3
console.log(30 + Math.floor( (Math.random()*70)));

//4
console.log(4 + Math.floor( Math.random()*7));

//5

const colorArray = ["hotpink", "skyblue", "violet", "lightgreen", "orange"];

let randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];

console.log(randomColor);

// EVENTS OCH RANDOM

// 6,7

const h1Element = document.querySelector("#h1");
const colorChangeButton = document.querySelector("#button");

colorChangeButton.addEventListener("click",function(){
    let randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];
    h1Element.innerText = randomColor;
    h1Element.addEventListener("click",function(){
        document.body.style.backgroundColor = randomColor;
    })
})

// 8
const button2 = document.querySelector("#button2");

button2.addEventListener("click",function(){
    let randomHue = 100 + Math.random() * 100;
    document.body.style.backgroundColor = `hsl(${randomHue},100%,50%)`;
})

// Minispel 1

const playerScoreH2 = document.querySelector("#playerScore");
const computerScoreH2 = document.querySelector("#computerScore");
const gameButton = document.querySelector("#game1Button");

playerScoreH2.innerText = "Dina poäng: 0";
computerScoreH2.innerText = "Datorns poäng: 0";

let playerScore = 0;
let computerScore = 0;

gameButton.addEventListener("click",function(){
    let playerNumber = Math.floor( Math.random() * 100);
    let computerNumber = Math.floor( Math.random() * 100);

    if (playerNumber > computerNumber) {
        playerScore++;
    }
    else if (computerNumber > playerNumber) {
        computerScore++;
    }

    playerScoreH2.innerText = "Dina poäng: " + playerScore;
    computerScoreH2.innerText = "Datorns poäng: " + computerScore;

    if (playerScore == 10) {
        playerScoreH2.innerText = `Dina poäng: ${playerScore}. Du vann!`;
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 10) {
        computerScoreH2.innerText = `Datorns poäng: ${computerScore}. Datorn vann!`;
        playerScore = 0;
        computerScore = 0;
    }
})

// Minispel 2

const inputGuess = document.querySelector("#colorGuessInput");
const guessingButton = document.querySelector("#game2Button");
const scoreDisplay = document.querySelector("#score");

let amountOfGuesses = 0;
scoreDisplay.innerText = "Antal rätta gissningar: 0";

guessingButton.addEventListener("click", function(event){
    event.preventDefault();
    amountOfGuesses++;
    let randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];

    if(inputGuess.value == randomColor) {
        document.body.style.backgroundColor = randomColor;
        playerScore++;
        scoreDisplay.innerText = `Antal rätta gissningar: ${playerScore} av ${amountOfGuesses}`;
    } else {
        document.body.style.backgroundColor = "white";
        scoreDisplay.innerText = `Antal rätta gissningar: ${playerScore} av ${amountOfGuesses}`;
    }
    inputGuess.value = "";
})