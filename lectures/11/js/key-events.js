function onKeyDown(event) {
  console.log('onKeyDown:' + event.key);
}

function onKeyPress(event) {
  console.log('onKeyPress:' + event.key);
}

function onKeyUp(event) {
  console.log('onKeyUp:' + event.key);
}

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keypress', onKeyPress);
document.addEventListener('keyup', onKeyUp);
