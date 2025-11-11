export function Modal() {
  const template = document.querySelector('#modal-form-template');
  const modal = template.content
    .cloneNode(true)
    .querySelector('.modal-overlay');
  document.body.appendChild(modal);
  const openBtn = document.querySelectorAll('.btn_modal');

  modal.querySelector('.modal-close').onclick = () => {
    modal.classList.remove('active');
    document.body.classList.remove('scroll-lock');
  };
  modal.onclick = () => {
    modal.classList.remove('active');
    document.body.classList.remove('scroll-lock');
  };
  modal.querySelector('.modal').onclick = e => {
    e.stopPropagation();
  };

  if (openBtn) {
    openBtn.forEach(item => {
      item.onclick = e => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.classList.add('scroll-lock');
      };
    });
  }
}
