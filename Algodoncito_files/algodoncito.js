$( document ).ready(function() {
    $( ".u-custom-menu .u-nav-link" ).not('.shop').click(function(event) {
        event.preventDefault();
        var dataTab = $(this).data("tab");
        var scrollTo = $("#" + dataTab);
        var height = $("#sec-16f3").height();
        var position = scrollTo.offset().top - $(document.body).offset().top + $(document.body).scrollTop() - height/1.4;

        $("HTML, BODY").animate({
            scrollTop: position
        }, 3000);

        $(".u-menu-close").click();
 

    });
});
