
const container = document.createElement('div');

container.style.display = 'grid';
container.style.width = '600px';
container.style.height = '600px';
container.style.gridTemplate = 'repeat(16, 1fr) / repeat(16, 1fr)';
container.style.border = '5px solid black';
container.style.margin = 'auto';
container.style.marginTop = '50px';

const cells = [];
for(let i = 0; i < 256; i++){
    const div = document.createElement('div');

    cells.push(div);
    div.setAttribute('class', 'cell');
    div.style.border = '1px dotted black';

    div.addEventListener('mouseenter', e => {
        div.style.backgroundColor = 'black';
    });

    container.appendChild(div);
}

function clear(){
    cells.forEach(element => element.style.backgroundColor = 'white')
}

const button = document.createElement('button');
button.textContent = "Clear";
button.addEventListener('click', clear);

document.body.appendChild(container);
document.body.appendChild(button);


