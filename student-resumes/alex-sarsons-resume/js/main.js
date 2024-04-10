function accordionHandler(button) {
  var drawer = button.nextElementSibling;
  
  switch (drawer.classList.contains('closed')) {
    case true:
      button.classList.add('open');
      drawer.classList.remove('closed');
      break;
    default:
      button.classList.remove('open');
      drawer.classList.add('closed');
  }
}