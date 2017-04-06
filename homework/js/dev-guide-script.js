//////////////////////////////
// Main script
//////////////////////////////


(() => {
  const KEY = '__CS193X_SP17_HW1_STORAGE_KEY__';
  const toggleLink = document.querySelector('#dev-guide-link');
  const toggleIcon = document.querySelector('#dev-guide-link i');
  const toggleContent = document.querySelector('#dev-guide');

  let isShown = false;

  const toggle = () => {
    isShown = !isShown;
    if (window.localStorage) {
      localStorage.setItem(KEY, isShown);
    }
    toggleIcon.classList.toggle('fa-angle-right');
    toggleIcon.classList.toggle('fa-angle-down');
    toggleContent.classList.toggle('hidden');
  };

  if (window.localStorage && localStorage.getItem(KEY) == 'true') {
    toggle();
  }

  toggleLink.addEventListener('click', toggle);
})();
