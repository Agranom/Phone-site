$(function () {
    //Get slide out menu
    $(".navigation").click(function () {
        $("#slide-out-menu").addClass('open');
    });
    $(".menu-close").click(function () {
        $("#slide-out-menu").removeClass('open');
    });

    //Change header
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0)
            $('#head').addClass('active');
        else
            $('#head').removeClass('active');
    });
    //Change prices
    $(".choose-plan .company").click(function () {
        $(".choose-plan").addClass('active');
        $(".choose-plan .individual").removeClass('active');
        $(this).addClass('active');
        $(".plan-right.individual").removeClass('active');
        $(".plan-right.company").addClass('active');
    });
    $(".choose-plan .individual").click(function () {
        $(".choose-plan").removeClass('active');
        $(".choose-plan .company").removeClass('active');
        $(this).addClass('active');
        $(".plan-right.company").removeClass('active');
        $(".plan-right.individual").addClass('active');
    });

    //Turn on animation
    new WOW().init();

});