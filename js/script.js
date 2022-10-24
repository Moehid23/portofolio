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