const main = document.getElementById('main-content');
const button = document.getElementById('button');
const icon = button.querySelector('ion-icon');

button.addEventListener('click', () => {
  main.classList.toggle('-rotate-[15deg]');
  const newIconName = 
    icon.getAttribute('name') === 'menu' 
    ? 'close' 
    : 'menu';
  icon.setAttribute('name', newIconName);

});
