import { galleryItems } from './gallery-items.js';

// Change code below this line


const  listImag = document.querySelector(".gallery");

const addImagesToList = galleryItems
.map(({preview, description}) => `<a class="gallery__link" href="large-image.jpg">
<img
  class="gallery__image"
  src="${preview}"
  data-source="large-image.jpg"
  alt="${description}"
/>
</a>`)
.join("");

listImag.insertAdjacentHTML('beforeend', addImagesToList)

listImag.addEventListener("click", addOridginalImagToClick)


function addOridginalImagToClick (e) {
 
 
    e.preventDefault();
     
    
    const currentImagOnClick = galleryItems.find(itam => 
    itam.preview === e.target["src"]);
    
    const src = currentImagOnClick.original;
    const alt = currentImagOnClick.description;
   
    const instance = basicLightbox.create(`
    <img
    class="gallery__image"
    src= ${src}
    data-source="large-image.jpg"
    alt= ${alt} 
    />`)
    
    instance.show()

 
}





