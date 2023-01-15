let ch_gallery = document.getElementsByClassName('.ch_gallery');

window.addEventListener('scroll', ()=>{
  let scrollUp = window.scrollY;
  console.log(scrollUp);

  if(scrollUp > 1700){
    ch_gallery.style.anamation = 'fadeInUp is ease-out';
  }
});

// $(()=>{


// });