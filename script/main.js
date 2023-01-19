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
  let film_img1 = $('.disney_films > ul > li:first-of-type');
  let film_txt1 = $('.disney_films > ul > li:first-of-type > .film_txt');

  film_img1.mouseenter(()=>{
      film_txt1.show().css({
        'scale':'1.02',
        'filter':'contrast(30%)',
        'transition':'ease-out'
      });
  });


  //모바일버전 메뉴보기 버튼
  $('.total_btn').click(()=>{
    $('.h_bottom').fadeIn();
    $('.gnb').fadeIn();
    $('.lnb').fadeIn();
  });
  // 모바일버전 내비게이션 닫기버튼
  $('.close_btn').click(()=>{
    $('.gnb').hide(500);
    $('.lnb').hide(180);
    $('.h_bottom').hide();
  });

  // 서브메뉴 나오게하기
  let sub_btn1 = $('li:first-of-type .sub_btn');
  let sub1 = $('li:first-of-type .sub');
  let sub_btn2 = $('li:nth-of-type(2) .sub_btn');
  let sub2 = $('li:nth-of-type(2) .sub');
  let sub_btn3 = $('li:nth-of-type(3) .sub_btn');
  let sub3 = $('li:nth-of-type(3) .sub');
  let sub_btn4 = $('li:nth-of-type(4) .sub_btn');
  let sub4 = $('li:nth-of-type(4) .sub_btn');
  let sub_btn5 = $('li:last-of-type .sub_btn');
  let sub5 = $('li:last-of-type .sub');
  let n = 1;

  sub_btn1.click(()=>{
    if(n == 1){
      sub1.show(150);
      sub_btn1.css('transform','rotate(180deg)');
      n = 0;
    }else{
      sub1.hide(200);
      sub_btn1.css('transform','rotate(0deg)');
      n = 1;
    }
  });
  sub_btn2.click(()=>{
    if(n == 1){
      sub2.show(150);
      sub_btn2.css('transform','rotate(180deg)');
      n = 0;
    }else{
      sub2.hide(200);
      sub_btn2.css('transform','rotate(0deg)');
      n = 1;
    }
  });
 sub_btn3.click(()=>{
  if(n == 1){
    sub3.show(150);
    sub_btn3.css('transform','rotate(180deg)');
    n = 0;
  }else{
    sub3.hide(200);
    sub_btn3.css('transform','rotate(0deg)');
    n = 1;
  }
  });
  sub_btn4.click(()=>{
    if(n == 1){
      sub4.show(150);
      sub_btn4.css('transform','rotate(180deg)');
      n = 0;
    }else{
      sub4.hide(200);
      sub_btn4.css('transform','rotate(0deg)');
      n = 1;
    }
  });
  sub_btn5.click(()=>{
    if(n == 1){
      sub5.show(150);
      sub_btn5.css('transform','rotate(180deg)');
      n = 0;
    }else{
      sub5.hide(200);
      sub_btn5.css('transform','rotate(0deg)');
      n = 1;
    }
  });
});