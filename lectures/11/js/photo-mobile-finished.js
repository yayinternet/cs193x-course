function createImage(src) {
  const image = document.createElement('img');
  image.src = src;
  return image;
}

function onThumbnailClick(event) {
  currentIndex = event.currentTarget.dataset.index;
  showFullsizeImage(event.currentTarget.src);
  modalView.classList.remove('hidden');
}

function showFullsizeImage(src) {
  modalView.innerHTML = '';
  const image = createImage(src);
  image.addEventListener('pointerdown', startDrag);
  image.addEventListener('pointermove', duringDrag);
  image.addEventListener('pointerup', endDrag);
  image.addEventListener('pointercancel', endDrag);
  modalView.appendChild(image);
}

let originX = null;
function startDrag(event) {
  event.preventDefault();
  event.stopPropagation();

  originX = event.clientX;
  event.currentTarget.setPointerCapture(event.pointerId);
}

function duringDrag(event) {
  if (originX) {
    const currentX = event.clientX;
    const delta = currentX - originX;
    event.currentTarget.style.transform = 'translateX(' + delta + 'px)';
  }
}

function endDrag(event) {
  if (!originX) {
    return;
  }

  const currentX = event.clientX;
  const delta = currentX - originX;
  originX = null;
  if (Math.abs(delta) < 100) {
    event.currentTarget.style.transform = '';
    return;
  }

  let nextIndex = currentIndex;
  if (delta < 0) {
    nextIndex++;
  } else {
    nextIndex--;
  }

  if (nextIndex < 0 || nextIndex == PHOTO_LIST.length) {
    event.currentTarget.style.transform = '';
    return;
  }

  const photoSrc = PHOTO_LIST[nextIndex];
  showFullsizeImage(photoSrc);
  currentIndex = nextIndex;
}

function onModalClick() {
  hidemodalView();
}

function hidemodalView() {
  modalView.classList.add('hidden');
  modalView.innerHTML = '';
}

let currentIndex = null;
const albumView = document.querySelector('#album-view');
for (let i = 0; i < PHOTO_LIST.length; i++) {
  const photoSrc = PHOTO_LIST[i];
  const image = createImage(photoSrc);
  image.dataset.index = i;
  image.addEventListener('pointerdown', onThumbnailClick);
  albumView.appendChild(image);
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('pointerdown', onModalClick);
