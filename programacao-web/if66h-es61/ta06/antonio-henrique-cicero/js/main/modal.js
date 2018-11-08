{
  const modalBtn = document.querySelector('.abrir-modal');
  const modal = document.querySelector('.modal');

  function activeModal(e) {
    e.preventDefault();
    if(modal.classList.contains('active')) {
      modal.classList.remove('active');
      modalBtn.innerText = 'Abrir Descrição';
    } else {
      modal.classList.add('active');
      modalBtn.innerText = 'Fechar Descrição';
    }
  }

  modalBtn.addEventListener('click', activeModal);
}