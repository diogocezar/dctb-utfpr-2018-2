{
  const img = document.querySelector('.modal-img');

  function animaImg() {
    if(img.classList.contains('active')) {
      img.classList.remove('active');
    } else {
      img.classList.add('active');
    }
  }

  img.addEventListener('click', animaImg);
}