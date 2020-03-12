// button dodaj click
const dodajBtn = document.querySelector('#btn-dodaj');
dodajBtn.addEventListener('click', dodajNovi);

// dodaj novi item na todo
function dodajNovi() {
    const inputElement = document.querySelector('#input-text')
    const text = inputElement.value.trim()

    if (text !== undefined && text.length > 0) {
        const li = document.createElement('li');

        //done span
        const doneSpan = document.createElement('span');

        doneSpan.classList.add('todo-tick');
        doneSpan.classList.add('clickable');

        doneSpan.addEventListener('click', taskDone)

        // velikiSpan
        const velikiSpan = document.createElement('span')
        velikiSpan.innerHTML = '<span>' + text + '</span>'

        velikiSpan.prepend(doneSpan)

        li.appendChild(velikiSpan)

        // delete span
        const deleteSpan = document.createElement('span')
        deleteSpan.innerText = 'x'

        deleteSpan.addEventListener('click', obrisi)

        deleteSpan.classList.add('todo-delete')
        deleteSpan.classList.add('clickable')

        li.appendChild(deleteSpan)

        li.classList.add('flex-container')

        const ul = document.querySelector('#todo-ul')
        ul.appendChild(li);
    }

    inputElement.value = ''
}

function obrisi(event) {
    const xElement = event.target
    const liZaUkloniti = xElement.parentElement

    liZaUkloniti.remove()
}

function taskDone(event) {
    const tickElement = event.target;
    const zaPrekriziti = tickElement.nextElementSibling
    const li = tickElement.parentElement.parentElement;

    if (zaPrekriziti.classList.contains('item-done')) {
        zaPrekriziti.classList.remove('item-done');
        tickElement.classList.remove('have-tick');
        li.classList.remove('li-done');
    } else {
        zaPrekriziti.classList.add('item-done')
        tickElement.classList.add('have-tick');
        li.classList.add('li-done');
    }
}
