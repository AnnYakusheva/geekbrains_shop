let button = document.getElementById('header__butt');

let navigation = document.getElementById('header__nav');

let wrp = document.getElementById('wrp');


let loupe = document.getElementById('header__loupe');

let search = document.getElementById('header__search');

button.addEventListener('click', function() { 
  navigation.classList.toggle('display-block');
  wrp.classList.toggle('display-block');
});

loupe.addEventListener('click', function() {
  search.classList.toggle('display-block');
});