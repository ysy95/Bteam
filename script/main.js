let gallery = document.querySelector('.ch_gallery');

window.addEventListener('scroll',()=>{
  let scrollUp1 = window.scrollY;
  // console.log('scrollY',scrollUp);

  if(scrollUp1 > 1400){
    gallery.style.animation = 'fadeIn 2s ease-out ';
  }
  else{
    gallery.style.animation='fadeout 1s ease-out forwards';
  }
});




// 제이쿼리
$(()=>{

  
  let top_btn = $('#top_btn');
  
  //  top버튼
  top_btn.click(()=>{
    window.scrollTo({top:0, behavior:'smooth'});
  });
  
  $(window).scroll(()=>{
    let top_scroll = $(this).scrollTop();//세로스크롤값 변수에 담기
    if( top_scroll >= 800 ){
      top_btn.fadeIn();
    }else{
      top_btn.fadeOut();
    }
  });
  
  
  // pc버전 디즈니 필름 부분 사진에 마우스 오버시 글씨 나오게하기
  // 마우스 오버시 글시 애니메이션
  $('#film_img1').mouseenter(()=>{
    $('#film_txt01').animate({'left':'25%'},800).css({
      'opacity':'1',
      'transition':'0.5s'
    });
  });
  $('#film_img2').mouseenter(()=>{
    $('#film_txt02').animate({'left':'25%'},1000).css({
      'opacity':'1',
      'transition':'1s ease-out'
    });
  });

  $('#film_img3').mouseenter(()=>{
    $('#film_txt03').animate({'left':'25%'},800).css({
      'opacity':'1',
      'transition':'0.5s ease-out'
    });

  });
  // 마우스 뗴면 돌아가는 애니메이션
  $('#film_img1').mouseleave(()=>{
    $('#film_txt01').animate({'left':'-400px'},800).css({
      'opacity':'0',
      'transition':'1-0.5s ease-out',
    });
    $('.disney_films ul > #film_img1').css({
      'filter':'contrast(100%)',
      'transform':'scale(1)'
    });
  });

  $('#film_img2').mouseleave(()=>{
    $('#film_txt02').animate({'left':'-400px'},1000).css({
      'opacity':'0',
      'transition':'1s ease-out',
    });
    $('.disney_films ul > #film_img2').css({
      'filter':'contrast(100%)',
      'transform':'scale(1)'
    });
  });
  
  $('#film_img3').mouseleave(()=>{
    $('#film_txt03').animate({'left':'-400px'},1000).css({
      'opacity':'0',
      'transition':'1s ease-out',
    });
    $('.disney_films ul > #film_img3').css({
      'filter':'contrast(100%)',
      'transform':'scale(1)'
    });
  });


  // 태블릿
  

});