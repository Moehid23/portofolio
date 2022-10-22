$('.page-scroll').on('click',function(){
    //ambil isi href
    var tujuan= $(this).attr('href');
    //tangkap element bersangkutan
    var elementTujuan = $(tujuan);
    //pindahkan scrollnya
    $('body').animate({
        scrollTop: elementTujuan.offset().top - 50
    }, 1000);


})();