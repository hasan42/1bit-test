"use strict";

$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    autoHeight: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  $(".slider").on('mouseover mouseenter', ()=>{swiper.autoplay.stop();});
  $(".slider").on('mouseout mouseleave', ()=>{swiper.autoplay.start();});

  function validation(event){

    var validName = $("#name").val().length <= 0 ? false : true;
    var validEmail = $("#email").val().length <= 0 ? false : true;

    if( !validName ){
      $("#name").next('.form-error').text("Введите имя");
    }else{
      $("#name").next('.form-error').text("");
    }

    if( !validEmail ){
      $("#email").next('.form-error').text("Введите e-mail");
    }else{
      $("#email").next('.form-error').text("");
    }

    if( !validName || !validEmail ){
      $("#submit").prop("disabled", true);
    }else{
      $("#submit").prop("disabled", false);
    }
  }

  $("#submit").click(function(event){
    event.preventDefault();
    this.blur();

    $("#submit").text("Загрузка ...");

    setTimeout(()=>{
      $("#form").hide();
      $(".form-send").show();
    },1500);

  });

  $("#name").on('blur keyup',validation);
  $("#email").on('blur keyup',validation);

});