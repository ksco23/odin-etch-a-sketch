initChangeGridDimensionsBtn();
makeGrid();
addGridMouseOverListener();


function makeGrid(squaresPerSide = 16){
    const container = document.querySelector('#container');
    container.replaceChildren();

    for(let i=0; i<squaresPerSide; i++){
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for(let j=0; j<squaresPerSide; j++){
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            rowDiv.appendChild(cellDiv);
        }

        container.appendChild(rowDiv);
    }
}

function addGridMouseOverListener(){
    const container = document.querySelector('#container');
    container.addEventListener('mouseover', e => {
        e.target.classList.add('filled');
    });
}

function initChangeGridDimensionsBtn(){
    const btn = document.querySelector('#changeGridBtn');
    btn.addEventListener('click', takeUserInput);
}

function takeUserInput(){
    let userInput = 0;
    let keepGoing = true;
    while(keepGoing){
        userInput = prompt('Enter an integer value between 1 and 100 for the dimensions of the grid.');
        const userInputAsNumber = +userInput;

        if(Number.isInteger(userInputAsNumber)){
            if(userInputAsNumber > 0 && userInputAsNumber <= 100){
                keepGoing = false;
                userInput = userInputAsNumber;
            }
        }
        makeGrid(userInput);
    }
}