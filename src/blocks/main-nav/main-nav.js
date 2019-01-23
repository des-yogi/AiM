(function(){
  var menuToggler = document.getElementById('main-nav-toggler');
  var mainNav = document.getElementById('main-nav');
  var menuTogglerHandler = function (e) {
    mainNav.classList.toggle('main-nav--open');
    this.classList.toggle('burger--close');
  };

  if (menuToggler) {
    menuToggler.addEventListener('click', menuTogglerHandler);
  }
}());
