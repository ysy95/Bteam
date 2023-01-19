function siteUrl(s){//사용자가 선택목록을 선택하면 siteUrl함수가 호출됨.
  // alert(s);
  if(s.value!='none'){//옵션을 선택하면
    window.open(s.value,'_self');//선택한 사이트가 열리게 하고 
    s.value='none';//기존값을지운다
  }else{//선택하지 않으면
    return s;//프로그램을 종료
  }
}

$(()=>{
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