function siteUrl(s){//사용자가 선택목록을 선택하면 siteUrl함수가 호출됨.
  // alert(s);
  if(s.value!='none'){//옵션을 선택하면
    window.open(s.value,'_self');//선택한 사이트가 열리게 하고 
    s.value='none';//기존값을지운다
  }else{//선택하지 않으면
    return s;//프로그램을 종료
  }
}