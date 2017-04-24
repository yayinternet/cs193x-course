const RIGHT_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/forward-arrow.png';
const DOWN_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/down-arrow.png';

function toggleVisibility(event) {
  console.log('event.target is: ' + event.target.tagName);
  console.log('event.currentTarget is: ' + event.currentTarget.tagName);

  const details = document.querySelector('.details');
  const image = event.currentTarget.querySelector('img');
  const text = event.currentTarget.querySelector('span');

  isVisible = !isVisible;
  if (isVisible) {
    details.classList.remove('hidden');
    image.src = DOWN_ARROW;
    text.textContent = 'Hide details';
  } else {
    details.classList.add('hidden');
    image.src = RIGHT_ARROW;
    text.textContent = 'Show details';
  }
}
let isVisible = false;

const detailToggle = document.querySelector('.show-details');
detailToggle.addEventListener('click', toggleVisibility);
