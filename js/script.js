//event pada saat link diklik
$('.page-scroll').on('click',function(e){

//ambil isi href
var tujuan= $(this).attr('href');

//ambil element ybs
var elementTujuan = $(tujuan);

//pindahkan scroll
$('html,body').animate({
    scrollTop: elementTujuan.offset().top -50

},1250, 'easeInOutExpo');
e.preventDefault();

});
//about
$(window).on('load', function(){
    $('.pkiri').addClass('pmuncul')
    $('.pkanan').addClass('pmuncul')
});
//paralax jumbotron
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.3 +'%)'
    });

    //portofolio
    if(wScroll > $('.portofolio').offset().top -250){
        $('.portofolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portofolio .thumbnail').eq(i).addClass('muncul');
            },300 *(i+1) );
        });
    }
});
