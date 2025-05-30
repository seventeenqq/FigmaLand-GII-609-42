document.addEventListener('DOMContentLoaded', function() {
  const mobileButton = document.querySelector('.mobile-button button');
  const logo2p = document.querySelector('.mobile-nav-head .logo_2p');
  const mobileNavContent = document.querySelector('.mobile-nav__content');
  const mobileNavHead = document.querySelector('.mobile-nav-head');
    
  mobileButton.addEventListener('click', function() {   
    if (mobileNavContent.style.display === 'flex') {
      // Закрытие
      mobileNavContent.style.display = 'none';
      logo2p.style.display = 'block';
      mobileNavHead.style.justifyContent = 'space-between';
    } else {
      // Открытие
      mobileNavContent.style.display = 'flex';
      logo2p.style.display = 'none';
      mobileNavHead.style.justifyContent = 'right';
    }
  });
});