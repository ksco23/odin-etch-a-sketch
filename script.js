makeGrid();

//Create 16 x 16 divs
function makeGrid(squaresPerSide = 16){
    const container = document.querySelector('#container');

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