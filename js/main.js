// C-slide
const imgFirst1 = $("#slide ul li:first").clone();
imgFirst1.appendTo($("#slide ul"));

let num1 = 1;
function slide1(){
  if(num1 > 5) {
    $("#slide ul").css("margin-left", 0);
    num1 = 1;
  }
  //이미지가 왼쪽으로 -1000px씩 이동
  $("#slide ul").animate({marginLeft : "-=1920"},600);
  num1++;
}
setInterval(slide1, 3000);

AOS.init();

// 신상품
//더보기 버튼을 클릭하면 보이게
function showMore(){
  const hide = document.querySelectorAll('.hide');
  console.log(hide);
  const first = Array.from(hide).slice(0, 5);
  first.forEach(item => {
    item.classList.remove('hide');
  });
  if(hide.length <= 5){
    hideMoreButton();
  }
}

//보일내용이 끝나면 더보기 버튼 숨기기
function hideMoreButton(){
  document.getElementById('moreBtn').classList.add('hide');
}


// hamburger-menu
$('.hamburger-menu').click(function(){
  $('.hambuger').show();
  scrollDisable();
});
$('.close').click(function(){
  $('.hambuger').hide();
  scrollAble();
});
function scrollDisable(){
  $('html, body').addClass('body-hidden');
}
function scrollAble(){
  $('html, body').removeClass('body-hidden');
}

//top버튼
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500) {
    //탑 버튼 보이기
    gsap.to(toTopEl, 0.2, {
      x : 0,
      opacity: 1
    });
  } else{
    //탑 버튼 숨기기
    gsap.to(toTopEl, 0.2, {
      x : 100,
      opacity: 0
    });
  }
},300));

//top버튼을 클릭하면 상단으로 이동
toTopEl.addEventListener('click', function(){
  gsap.to(window, 0.7,{
    scrollTo : 0
  });
});