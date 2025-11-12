export function ModalVideo() {
  const template = document.querySelector('#modal-video-template');
  const modal = template.content
    .cloneNode(true)
    .querySelector('.modal-overlay');
  document.body.appendChild(modal);
  const openBtn = document.querySelectorAll('.btn_play');

  const video = modal.querySelector('video');

  modal.querySelector('.modal-close').onclick = () => {
    modal.classList.remove('active');
    document.body.classList.remove('scroll-lock');
    video.pause();
  };
  modal.onclick = () => {
    modal.classList.remove('active');
    document.body.classList.remove('scroll-lock');
    video.pause();
  };
  modal.querySelector('.modal').onclick = e => {
    e.stopPropagation();
  };

  if (openBtn) {
    openBtn.forEach(item => {
      item.onclick = e => {
        e.preventDefault();
        video.play();
        modal.classList.add('active');
        document.body.classList.add('scroll-lock');
      };
    });
  }
}
