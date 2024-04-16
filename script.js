function onFirstClick()
{
    console.log("First");
}

function onSecondClick()
{
    console.log("Second");
}

function onThirdClick()
{
    console.log("Third");
}

let fDiv = document.querySelector('#firstDiv');
fDiv.addEventListener("click", onFirstClick);

let sDiv = document.querySelector('#secondDiv');
sDiv.addEventListener("click", onSecondClick);

let tDiv = document.querySelector("#thirdDiv");
tDiv.addEventListener("click", onThirdClick);