let sumbit= document.getElementById("button");
console.log(button);

sumbit.addEventListener('click',getWords);

function getWords(){
console.log(sumbit);

var words= document.querySelectorAll('input[type=text]');

var placeholders= document.querySelectorAll('.userInput');
console.log(placeholders)

placeholders.forEach((placeholders, index)=> {
    console.log(placeholders, index);
});

console.log(2)

}