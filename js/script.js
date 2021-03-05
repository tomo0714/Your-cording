$(document).ready(function(){

    $(".header__toggle-btn").click(function(){
        $(".toggle-menu").slideToggle(200);
    });

    $(".faq-accordion__btn").click(function(){
        $("dd").removeClass("faq-accordion__body--active");
        $($(this).attr("href")).addClass("faq-accordion__body--active");
            
        return false;
    });

    $('a[href="#cta"]').click(function(){
        var target = $($(this).attr("href")).offset().top;

        target -= 70;

        $("html, body").animate({scrollTop: target}, 500);

        return false;
    });

    $('a[href="#price"]').click(function(){
      var target = $($(this).attr("href")).offset().top;

      target -= 70;

      $("html, body").animate({scrollTop: target}, 500);

      return false;
  });

  $('a[href="#features"]').click(function(){
    var target = $($(this).attr("href")).offset().top;

    target -= 120;

    $("html, body").animate({scrollTop: target}, 500);

    return false;
});

    const $submitBtn = $('#submit')
    $('#form input,#form textarea').on('change', function (){
        if (
            $('#form input[type="text"]').val() !== "" &&
            $('#form input[type="email"]').val() !== "" &&
            $('#form input[type="checkbox"]').val() !== "" &&
            $('#form #privacyCheck').prop('checked') === true
        ){
            $submitBtn.prop('disabled', false);
        } else {
            $submitBtn.prop('disabled', true);
        } 
    });

    $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
          url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeUJn8xEY7env-ftKPnQe5e529KHBvdure7Wjzp3iKtIQW6Iw/formResponse",
          data: formData,
          type: "POST",
          dataType: "xml",
          statusCode: {
            0: function () {
              $submitBtn.slideUp();
              $(".end-message").slideDown();
            },
            200: function () {
              $(".false-message").slideDown();
            }
          }
        });
        event.preventDefault();
      });

});    