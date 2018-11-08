var doc = document.querySelector('.container');

for (let j = 0; j < 256; j++) {
    let div = document.createElement('div');
    //div.textContent = j;
    div.classList.add('item1');

    div.addEventListener('mouseover', (e) => {
        div.classList.remove('item1');
        div.classList.add('item2');
    })

    doc.appendChild(div);
}
