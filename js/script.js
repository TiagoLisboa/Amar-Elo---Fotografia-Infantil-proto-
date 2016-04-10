
$(document).ready(function() {  
  //Smooth Scrolling
  // href = https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $(function() {
    $('a.link-menu[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({scrollTop: target.offset().top+1}, 1000);
          return false;
        }
      }
    });
  });

});




//Controle de itens ativos do cabeçalho com base
//Na posição da página do usuário
$(document).scroll(function() {
  if($(this).scrollTop()>=$("#header").position().top-10){
    $(".link-menu").removeClass('active');
    $("li>a[href='#header']").addClass('active');
    floatMenu(false);
  }
  if($(this).scrollTop()>=$("#carrosel").position().top-10){
    $(".link-menu").removeClass('active');
    $("li>a[href='#header']").addClass('active');
    floatMenu(true);
  }
  if($(this).scrollTop()>=$("#sobre").position().top-67){
    $(".link-menu").removeClass('active');
    $("a[href='#sobre']").addClass('active');
    floatMenu(true);
  }
  if($(this).scrollTop()>=$("#ensaios").position().top-67){
    $(".link-menu").removeClass('active');
   $("a[href='#ensaios']").addClass('active');
   floatMenu(true);
  }
  if($(this).scrollTop()>=$("#orcamento").position().top-67){
    $(".link-menu").removeClass('active');
    $("a[href='#orcamento']").addClass('active');
    floatMenu(true);
  }
});

function floatMenu (menuFluAt) {
  if (menuFluAt) {
    $("#nav-flutuante").css({
      "visibility": 'visible',
      "opacity": '100'
    });
  }else{
    $("#nav-flutuante").css({
      "visibility": 'hidden',
      "opacity": '0'
    });
  }  
}