$('.imgslide a:gt(0)').hide();
setInterval(function(){
    $('.imgslide a:first-child')
    .fadeOut()
    .next('a')
    .fadeIn()
    .end()
    .appendTo('.imgslide');
},3000);


$('#tabmenu>ul>li>a').click(function(){
    $(this).parent().addClass("active")
    .siblings()
    .removeClass("active");
    return false;
});