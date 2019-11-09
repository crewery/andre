$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
},1250,'linear');

 e.preventDefault();
});


//paralax

$(window).scroll(function(){
  var wScroll =$(this).scrollTop();

  console.log(wScroll);
});
