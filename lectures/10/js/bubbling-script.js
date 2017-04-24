function onOuterClick() {
  outer.classList.add('selected');
  console.log('Outer clicked!');
}

function onInnerClick() {
  inner.classList.add('selected');
  console.log('Inner clicked!');
}

function onResetClick() {
  inner.classList.remove('selected');
  outer.classList.remove('selected');
}


const outer = document.querySelector('#outer');
const inner = document.querySelector('#inner');
outer.addEventListener('click', onOuterClick);
inner.addEventListener('click', onInnerClick);

const reset = document.querySelector('button');
reset.addEventListener('click', onResetClick);
