// test.js
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById("title_name");
  
    header.addEventListener('mouseover', function() {
      header.style.color = 'red';
    });
  
    header.addEventListener('mouseout', function() {
      header.style.color = '';
    });
  });
  

