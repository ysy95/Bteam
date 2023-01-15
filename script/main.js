let gallery = document.querySelector('.ch_gallery');

window.addEventListener('scroll',()=>{
  let scrollUp = window.scrollY;
  // console.log('scrollY',scrollUp);

  if(scrollUp > 1400){
    gallery.style.animation = 'fadeIn 2s ease-out ';
  }
  else{
    gallery.style.animation='fadeout 1s ease-out forwards';
  }
});