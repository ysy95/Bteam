$(function () {
  $('.d1').click(function(){
    // 클릭시 아래 컨텐츠 변경
    $('#d-channel').css('display','block');
    $('#p-channel').css('display','none');
    $('#m-channel').css('display','none');
    $('#s-channel').css('display','none');
    $('#n-channel').css('display','none');
    $('#f-channel').css('display','none');
    $(this).css('background','linear-gradient(180deg, #649EAD 0%, rgba(100, 158, 173, 0) 100%)');
    $('.p1,.m1,.s1,.n1,.f1').css('background','#fff');

    // 상단 변경
    $('#d_wrap').css('display','block');
    $('#p_wrap').css('display','none');
    $('#m_wrap').css('display','none');
    $('#s_wrap').css('display','none');
    $('#n_wrap').css('display','none');
    $('#f_wrap').css('display','none');
  });
  
  // 픽사
    $('.p1').click(function(){
      // 클릭시 아래 컨텐츠 변경
      $('#p-channel').css('display','block');
      $('#d-channel').css('display','none');
      $('#m-channel').css('display','none');
      $('#s-channel').css('display','none');
      $('#n-channel').css('display','none');
      $('#f-channel').css('display','none');
      $(this).css('background','linear-gradient(180deg, #649EAD 0%, rgba(100, 158, 173, 0) 100%)');
    $('.d1,.m1,.s1,.n1,.f1').css('background','#fff');

    // 상단 변경
    $('#d_wrap').css('display','none');
    $('#p_wrap').css('display','block');
    $('#m_wrap').css('display','none');
    $('#s_wrap').css('display','none');
    $('#n_wrap').css('display','none');
    $('#f_wrap').css('display','none');
  });

// 마블
  $('.m1').click(function(){
    // 클릭시 아래 컨텐츠 변경
    $('#p-channel').css('display','none');
    $('#d-channel').css('display','none');
    $('#m-channel').css('display','block');
    $('#s-channel').css('display','none');
    $('#n-channel').css('display','none');
    $('#f-channel').css('display','none');
    $(this).css('background','linear-gradient(180deg, #649EAD 0%, rgba(100, 158, 173, 0) 100%)');
    $('.d1,.p1,.s1,.n1,.f1').css('background','#fff');

    // 상단 변경
    $('#d_wrap').css('display','none');
    $('#p_wrap').css('display','none');
    $('#m_wrap').css('display','block');
    $('#s_wrap').css('display','none');
    $('#n_wrap').css('display','none');
    $('#f_wrap').css('display','none');
});


$('.s1').click(function(){
  // 클릭시 아래 컨텐츠 변경
  $('#p-channel').css('display','none');
  $('#d-channel').css('display','none');
  $('#m-channel').css('display','none');
  $('#s-channel').css('display','block');
  $('#n-channel').css('display','none');
  $('#f-channel').css('display','none');
  $(this).css('background','linear-gradient(180deg, #649EAD 0%, rgba(100, 158, 173, 0) 100%)');
  $('.d1,.p1,.m1,.n1,.f1').css('background','#fff');

  // 상단 변경
  $('#d_wrap').css('display','none');
  $('#p_wrap').css('display','none');
  $('#m_wrap').css('display','none');
  $('#s_wrap').css('display','block');
  $('#n_wrap').css('display','none');
  $('#f_wrap').css('display','none');
});

// 네서녈
$('.n1').click(function(){
  // 클릭시 아래 컨텐츠 변경
  $('#p-channel').css('display','none');
  $('#d-channel').css('display','none');
  $('#m-channel').css('display','none');
  $('#s-channel').css('display','none');
  $('#n-channel').css('display','block');
  $('#f-channel').css('display','none');
  $(this).css('background','linear-gradient(180deg, #649EAD 0%, rgba(100, 158, 173, 0) 100%)');
  $('.d1,.p1,.m1,.s1,.f1').css('background','#fff');
  
  // 상단 변경
  $('#d_wrap').css('display','none');
  $('#p_wrap').css('display','none');
  $('#m_wrap').css('display','none');
  $('#s_wrap').css('display','none');
  $('#n_wrap').css('display','block');
  $('#f_wrap').css('display','none');
});

// 20세기
$('.f1').click(function(){
  // 클릭시 아래 컨텐츠 변경
  $('#p-channel').css('display','none');
  $('#d-channel').css('display','none');
  $('#m-channel').css('display','none');
  $('#s-channel').css('display','none');
  $('#n-channel').css('display','none');
  $('#f-channel').css('display','block');
  $(this).css('background','linear-gradient(180deg, #649EAD 0%, rgba(100, 158, 173, 0) 100%)');
  $('.d1,.p1,.m1,.s1,.n1').css('background','#fff');

  // 상단 변경
  $('#d_wrap').css('display','none');
  $('#p_wrap').css('display','none');
  $('#m_wrap').css('display','none');
  $('#s_wrap').css('display','none');
  $('#n_wrap').css('display','none');
  $('#f_wrap').css('display','block');
});
});