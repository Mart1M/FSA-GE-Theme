$(document).ready(function () {
    function ToogleMenu() {
        $('aside').toggleClass('active');
    }
   $('.Menu').click(function () {
      ToogleMenu();
   });


   $(window).scroll(function(){
    if ($(this).scrollTop() > 35) {
       $('#menu').removeClass('nav-center');
    } else {
        
            $('#menu').addClass('nav-center');
    };
});





});

