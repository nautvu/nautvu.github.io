$(document).ready(function () {
    
    
    
    $('.nut-back-to-top').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, 'fast');
    });



    $('.icon-next').click(function (e) { 
       e.preventDefault();

       $('.carousel').removeClass('prev');

       if ($('.slide:last').hasClass('slide-active')) {

           $('.slide:first').addClass('slide-active');
           $('.slide:first').removeClass('slide-deactive');
           $('.slide:last').addClass('slide-deactive');
           $('.slide:last').removeClass('slide-active');

           $('.cham-tron:first').addClass('ct-active');
           $('.cham-tron:last').removeClass('ct-active');
            
       } else {

           var slide_active = $('.slide-active');
               tron_active = $('.ct-active');
           $(slide_active).removeClass('slide-active');
           $(slide_active).addClass('slide-deactive');
           $(slide_active).next().addClass('slide-active');
           $(slide_active).next().removeClass('slide-deactive');

           $(tron_active).removeClass('ct-active');
           $(tron_active).next().addClass('ct-active');  
       }

        
        
    });


    $('.icon-prev').click(function (e) { 
       e.preventDefault();


       $('.carousel').addClass('prev');

       if ($('.slide:first').hasClass('slide-active')) {

           $('.slide:last').addClass('slide-active');
           $('.slide:last').removeClass('slide-deactive');
           $('.slide:first').addClass('slide-deactive');
           $('.slide:first').removeClass('slide-active');

           $('.cham-tron:last').addClass('ct-active');
           $('.cham-tron:first').removeClass('ct-active');
            
       } else {

           var slide_active = $('.slide-active');
               tron_active = $('.ct-active');
           $(slide_active).removeClass('slide-active');
           $(slide_active).addClass('slide-deactive');
           $(slide_active).prev().addClass('slide-active');
           $(slide_active).prev().removeClass('slide-deactive');

           $(tron_active).removeClass('ct-active');
           $(tron_active).prev().addClass('ct-active');  
       }


   });

   $('.cham-tron').click(function (e) { 
       e.preventDefault();

       var slide = $('.slide');
           ct_click = $(this);
           vt_click = 0;

           for (let i = 1; $(ct_click).prev().length == 1 ; i++) {
               ct_click = $(ct_click).prev();
               vt_click = i;
           }
       
       $('.slide-active').removeClass('slide-active');
       $('.slide-active').addClass('slide-deactive');
       $(slide[vt_click]).addClass('slide-active');
       $(slide[vt_click]).removeClass('slide-deactive');

       $('.cham-tron').removeClass('ct-active');
       $(this).addClass('ct-active');
    });

    $(window).scroll(function () { 

        var VTw = window.pageYOffset;
            VT0 = $('.noidung1').offset().top;
            VT1 = $('.noidung3').offset().top;
            VT2 = $('.noidung5').offset().top;
            VT3 = $('.noidung6').offset().top;
           

        if (VTw < VT0) {
            $('.menuhihi').removeClass('active');
            $('.menu-1').removeClass('active');
        }

        if ((VTw >= VT0) && (VTw < VT1)) {
            $('.menuhihi').removeClass('active');
            $('.menu-1').addClass('active');
        }
        if ((VTw >= VT1) && (VTw < VT2)) {
            $('.menuhihi').removeClass('active');
            $('.menu-2').addClass('active');
        }
        if (VTw >= VT2) {
            $('.menuhihi').removeClass('active');
            $('.menu-3').addClass('active');  
        }

});

    
});


