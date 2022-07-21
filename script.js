const buttonClone = document.getElementById('clone');
const buttonNewLine = document.getElementById('new-line');
const pickUpLine = document.getElementById('pickup-line');
const loader = document.getElementById('loader');
const container = document.getElementById('container');

// Show loading
const loading = () => {
    loader.hidden = false;
    container.hidden = true;
}

// Hide loading
const complete = () => {
    if (!loader.hidden) {
        container.hidden = false;
        loader.hidden = true;
    }
}


let apiPickUpLines = [];


// Get Pickup Lines from API

const getPickUpLines = async () => {
    loading();
    const proxyUrl = 'https://enigmatic-wildwood-28564.herokuapp.com/'
    const apiURL = 'https://getpickuplines.herokuapp.com/lines/random';
    try {
        const response = await fetch(proxyUrl + apiURL);
        apiPickUpLines = await response.json();
        // Reduce font size for long lines
        if (apiPickUpLines.line.length > 100){
            pickUpLine.classList.add('long-line');
        } else {
            pickUpLine.classList.remove('long-line');
        }
        pickUpLine.innerText = apiPickUpLines.line;
        complete();
    } catch (error) {
        getPickUpLines();
        console.log(error);
        // Catch Error Here
    }
}

// On Load 
getPickUpLines();

// Button Functions

buttonClone.addEventListener('click', async (event) =>{
    await navigator.clipboard.writeText(pickUpLine.textContent);
    const cloned = await navigator.clipboard.readText();
})

buttonNewLine.addEventListener('click', getPickUpLines);