$(function(){

    $('.island__dropdown').on('click', function () {
        $('.island__dropdown-list').slideToggle();
      });
      $('.island__dropdown-two').click(function(){
        $('.island__dropdown-one').addClass('off__before');
        $('.island__dropdown-two').removeClass('off__before');
        $('.island__dropdown-item').addClass('off');
        $('.island__dropdown-item-two').removeClass('off');
      }); 
      $('.island__dropdown-one').click(function(){
        $('.island__dropdown-two').addClass('off__before');
        $('.island__dropdown-item-two').addClass('off');
        $('.island__dropdown-one').removeClass('off__before');
        $('.island__dropdown-item').removeClass('off');
      }); 
      $('.island__control-btn').click(function(){
        $('.island__control-text').toggleClass('off')
      }); 

      $('.dropdown__price').on('click', function () {
        $('.dropdown__price-list').slideToggle();
      });
      $('.dropdown__price-two').click(function(){
        $('.dropdown__price-one').addClass('off__before');
        $('.dropdown__price-two').removeClass('off__before');
        $('.dropdown__price-item-one').addClass('off');
        $('.dropdown__price-item-two').removeClass('off');
      }); 
      $('.dropdown__price-one').click(function(){
        $('.dropdown__price-two').addClass('off__before');
        $('.dropdown__price-item-two').addClass('off');
        $('.dropdown__price-one').removeClass('off__before');
        $('.dropdown__price-item-one').removeClass('off');
      }); 
      $('.menu').on('click', function () {
        $('.menu__list').slideToggle();
      });

});