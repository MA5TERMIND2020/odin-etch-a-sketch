document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);
})

function createBoard(size) {
    let board = document.querySelector('.container');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let numDivs = size * size;
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.style.border = "1px solid";
        board.insertAdjacentElement("beforeend", div);
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'white';
        })
    }
}

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'white';
        })
        grid.appendChild(div); 
    }
    }

let grid = document.querySelector('.container');

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const slider = document.querySelector('#slider')
const screenVal = document.querySelector('.value');
slider.addEventListener('input', function() {
    let val = document.getElementById('slider').value;
    screenVal.textContent = val;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'white';
        })
        grid.appendChild(div); 
    }
})

const chooseColor = document.querySelector('#color');
chooseColor.addEventListener('input', function() {
    let val = document.getElementById('slider').value;
    let newColor = document.getElementById('color').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = newColor;
        })
    }
})

const rgb = document.querySelector('#rgb');

rgb.addEventListener('click', function() {
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = getRandomColor();
            console.log(i)
        })
    }
})

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}

const reset = document.querySelector('#reset');

reset.addEventListener('click', function() {
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].style.backgroundColor = 'black';
    }
})