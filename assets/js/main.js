import { mainJs } from './index.js';
import { Modal } from './modal.js';
import { ModalVideo } from './modalVideo.js';
import { Mask } from './mask.js';

document.addEventListener('DOMContentLoaded', function () {
  mainJs();
  Modal();
  ModalVideo();
  Mask();
});
