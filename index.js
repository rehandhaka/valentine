//Impossible to say No

let noElement = document.getElementById('noButton');
let yesElement = document.getElementById('yesButton');
let swapped = false;

function swapButtonsOne() {
    noElement.classList.add("yesClass");
    noElement.classList.remove("noClass");
    noElement.innerHTML = "YES !!";
    yesElement.classList.add("noClass");
    yesElement.classList.remove("yesClass");
    yesElement.innerHTML = "No";
    swapped = !swapped;
}

function swapButtonsTwo() {
    noElement.classList.add("noClass");
    noElement.classList.remove("yesClass");
    noElement.innerHTML = "No";
    yesElement.classList.add("yesClass");
    yesElement.classList.remove("noClass");
    yesElement.innerHTML = "YES !!";
    swapped = !swapped;
}

noElement.addEventListener('mouseover', () => {
    if (!swapped) {
        swapButtonsOne();
    }
})
yesElement.addEventListener('mouseover', () => {
    if (swapped) {
        swapButtonsTwo();
    }
})