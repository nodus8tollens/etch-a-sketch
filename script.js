

//CREATE CONTAINER
const container = document.createElement('div');
container.style.display = 'grid';
container.style.width = '600px';
container.style.height = '600px';
container.style.border = '5px solid black';
container.style.margin = 'auto';
container.style.marginTop = '50px';
document.body.appendChild(container);

//PROMPT SIZE
function promptSize(){
    let size = parseInt(prompt("Enter grid-size(max-size = 100):"));
    return size;
}

//FILL CONTAINER WITH CELLS
var cells = [];
function fill() {
    let size = promptSize();

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    container.style.gridTemplate = 'repeat(' + size + ', 1fr) / repeat(' + size + ', 1fr)';

    for (let i = 0; i < size ** 2; i++) {
        const div = document.createElement('div');

        cells.push(div);
        div.setAttribute('class', 'cell');
        div.style.border = '1px dotted black';

        div.addEventListener('mouseenter', e => {
            div.style.backgroundColor = 'black';
        });

        container.appendChild(div);
    }
}
fill();

//CLEAR CELLS
function clear(){
    cells.forEach(element => element.style.backgroundColor = 'white');
    fill();
}

const button = document.createElement('button');
button.textContent = "Clear";
button.addEventListener('click', clear);


document.body.appendChild(button);


