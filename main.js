var doc = document.querySelector('.container');

for (let j = 0; j < 256; j++) {
    let div = document.createElement('div');
    div.textContent = j;
    div.classList.add('item');

    doc.appendChild(div);
}