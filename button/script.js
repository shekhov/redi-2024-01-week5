let button = document.createElement("button");
button.innerText = "I am a button";
button.className="normal-button";
// button.style = "width: 100px; height: 50px; background-color:red;";

document.body.appendChild(button);


function buttonClicked()
{
    // button.style = "width: 100px; height: 50px; background-color:blue; color: white;"
    button.className = "clicked-button";
}

button.addEventListener("click", buttonClicked);

let number = 0;
// number = number + 1;
console.log(++number); // 1
console.log(number); // 1


let n2 = 0;
console.log(n2++); // 0
console.log(n2); // 1