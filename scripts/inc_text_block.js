$(".hide-content").hide();
$(".show-more").click(function() {
    $(this).next(".hide-content").slideToggle();
    $(this).text($(this).text() == "Скрыть" ? "Показать еще" : "Скрыть");
});