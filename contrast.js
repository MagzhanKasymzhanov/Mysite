function toggleContrast() {
  const isContrast = document.body.classList.toggle('contrast');
  localStorage.setItem('contrastMode', isContrast ? 'on' : 'off');
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('contrastMode') === 'on') {
    document.body.classList.add('contrast');
  }
});
