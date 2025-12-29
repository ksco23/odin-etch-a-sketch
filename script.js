initChangeGridDimensionsBtn();
makeGrid();
addGridMouseListeners();


function makeGrid(squaresPerSide = 16){
    const container = document.querySelector('#sketchContainer');
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

function addGridMouseListeners(){
    const container = document.querySelector('#sketchContainer');
    let rgbArray = generateRandomRGB();
    let gridCellOverCounter = 1;
    container.addEventListener('mouseleave', e => {
        rgbArray = generateRandomRGB();
        gridCellOverCounter++;
    });
    container.addEventListener('mouseover', e => {
        const alpha = gridCellOverCounter / 10;
        //gridCellOverCounter++;
        e.target.style.backgroundColor = `rgba(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}, ${alpha})`;
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
        userInput = prompt('Enter an integer value between 1 and 100 to change the resolution of the grid.');

        if(userInput === null){
            keepGoing = false;
        }

        if(keepGoing){
            const userInputAsNumber = +userInput;

            if(Number.isInteger(userInputAsNumber)){
                if(userInputAsNumber > 0 && userInputAsNumber <= 100){
                    keepGoing = false;
                    userInput = userInputAsNumber;
                }
                else{
                    alert(`${userInput} isn't between 1 and 100. Please enter an integer between 1 and 100.`);
                }
            }
            else{
                alert(`${userInput} is not an integer. Please enter an integer.`)
            }
        }
    }

    if(userInput !== null){
        makeGrid(userInput);
    }
}

function generateRandomRGB(){
    //Choose 3 numbers between 0 and 255
    const rgbArray = [];

    for (let i=0; i<3; i++){
        rgbArray.push(Math.floor(Math.random() * 255));
    }

    return rgbArray;
}