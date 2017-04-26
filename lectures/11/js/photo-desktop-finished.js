function createImage(src) {
  const image = document.createElement('img');
  image.src = src;
  return image;
}

function onThumbnailClick(event) {
  currentIndex = event.currentTarget.dataset.index;
  const image = createImage(event.currentTarget.src);
  modalView.appendChild(image);

  document.body.classList.add('no-scroll');
  modalView.style.top = window.pageYOffset + 'px';
  modalView.classList.remove('hidden');

  document.addEventListener('keydown', nextPhoto);
}

function onModalClick() {
  hideModal();
}

function hideModal() {
  document.body.classList.remove('no-scroll');
  modalView.classList.add('hidden');
  modalView.innerHTML = '';
  document.removeEventListener('keydown', nextPhoto);
}

function nextPhoto(event) {
  if (event.key === 'Escape') {
    hideModal();
    return;
  }

  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
    return;
  }

  let nextIndex = currentIndex;
  if (event.key === 'ArrowLeft') {
    nextIndex--;
  } else {
    nextIndex++;
  }

  if (nextIndex < 0 || nextIndex == PHOTO_LIST.length) {
    return;
  }
  const photoSrc = PHOTO_LIST[nextIndex];
  modalView.innerHTML = '';
  const image = createImage(photoSrc);
  modalView.appendChild(image);
  currentIndex = nextIndex;
}

let currentIndex = null;
const albumView = document.querySelector('#album-view');
for (let i = 0; i < PHOTO_LIST.length; i++) {
  const photoSrc = PHOTO_LIST[i];
  const image = createImage(photoSrc);
  image.dataset.index = i;
  image.addEventListener('click', onThumbnailClick);
  albumView.appendChild(image);
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);
