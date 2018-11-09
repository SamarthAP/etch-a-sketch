var container = document.querySelector('.container');

var doc = document.querySelector('body');

let button = document.createElement('button');
button.textContent = 'Reset';

doc.appendChild(button);

button.addEventListener('click', (e) => {
    for (let i = 0; i < container.children.length; i++) {
        container.children[i].classList.add('item1');
        container.children[i].classList.remove('item2');

        
    }

    let n = prompt("How many squares per side?", "16");
    parseInt(n);

    removeOldGrid();

    createGrid(n);
})

createGrid(16);

function createGrid(n) {
    let cont = document.getElementsByClassName('container');
    cont[0].style.gridTemplateColumns = 'auto '.repeat(n);

    for (let j = 0; j < n*n; j++) {
        let div = document.createElement('div');
    
        div.classList.add('item1');

        let scaled = (30/(n/16)) + 'pt';
        div.style.width = scaled;
        div.style.height = scaled;
    
        div.addEventListener('mouseover', (e) => {
            div.classList.remove('item1');
            div.classList.add('item2');
        })
    
        container.appendChild(div);
    }
}

function removeOldGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    } 
}