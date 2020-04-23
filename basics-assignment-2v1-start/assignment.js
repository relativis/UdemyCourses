const task3Element = document.getElementById('task-3');

const tryThis = "Try this"

function showName() {
  alert('What the hell');
}

function getName(name){
    name = tryThis
    alert(name);
}

function threeStrings(one, two, three) {
  
  alert (`${one} \n${two} ${three}`)
}

getName()
threeStrings('Hi there. ', 'My name is ', 'Etienne')

task3Element.addEventListener('click', showName)


