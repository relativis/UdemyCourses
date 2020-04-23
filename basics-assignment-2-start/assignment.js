const task3Element = document.getElementById('task-3');

function show() {
    alert ('Hi there ');
}

function greet(name) {
    alert ('Hi ' + name);
}

function string(one, two, three){
    alert(`${one} ${two}. \n${three}`);
}

task3Element.addEventListener('click', show)
greet('Etienne');
string('Hallo', 'Etienne', 'How are you?')