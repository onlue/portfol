(function($) {
    var $dragMe = $(".dragme"),
    $container = $(".sl-container"),
    $viewAfter = $(".view-after");
    $container.on("click", function(event) {
        var eventLeft = event.pageX - $container.offset().left - 15;
        animateTo(eventLeft);
    });
    animateTo("50%");
    function animateTo(_left) {
        $dragMe.animate({
            left: _left
        }, 'slow', 'linear');
        $viewAfter.animate({
            width: _left
        }, 'slow', 'linear');
    }
})(jQuery);