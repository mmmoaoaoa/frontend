const toast = document.querySelector('.toast');
let toastTimer;

document.querySelectorAll('.order-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();

    if (form.closest('.modal')) {
      window.location.hash = 'close';
    }

    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 5000);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && window.location.hash === '#quick-order') {
    window.location.hash = 'close';
  }
});
