import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const  listImag = document.querySelector(".gallery");

const addImagesToList = galleryItems
.map(({preview, original, description}) => `<a class="gallery__item" href="${original}">
<img
  class="gallery__image"
  src="${preview}"
  alt="${description}"
/>
</a>`)
.join("");

listImag.insertAdjacentHTML('beforeend', addImagesToList);



const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
    
});




