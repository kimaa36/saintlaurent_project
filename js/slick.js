$('.popular-img').slick({
	slide: 'div',
	infinite : true, 
  slidesToShow : 5,
  slidesToScroll : 5,
  speed : 100,
  arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
  autoplay : true,			// 자동 스크롤 사용 여부
	autoplaySpeed : 2000, 	 	
  pauseOnHover : true,	
  prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
	nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
	draggable : true
});
