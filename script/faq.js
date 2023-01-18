$(function(){
  let q=$('.fq01 dt');
  q.click(function(){
    $(this).next().slideToggle();
    if($(this).find('i').hasClass('fa-solid fa-plus')==true){
      $(this).find('i').attr('class','fa-solid fa-minus');
    }else{
      $(this).find('i').attr('class','fa-solid fa-plus');
    }
  });
});