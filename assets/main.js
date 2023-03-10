var $ = jQuery;

$(document).ready(function() {
  $(window).scroll(OnScroll);
  OnScroll();
  animation_wow();
  collectionSlider();
  btnScrollTop();
  bannerSlider(); 
  addapHeight();
  eventEditAddress();
  loadMoreButton();
  checkCustomer();
  eyePassword();
  validateEmail();
  animationHeaderBanner();
  hoverEvent();
});

function OnScroll() { 
    let scrollToTop = $(window).scrollTop();
    let header = $('.site-header');
    let heightOfHeader = header.innerHeight();
    let btnScrollTop = $('.scroll-top');

    if(scrollToTop > heightOfHeader/2) {
        header.addClass('transparent-none');
      	$('.site-nav--centered').addClass('transparent-none');
    } else {
        header.removeClass('transparent-none');
        $('.site-nav--centered').removeClass('transparent-none');
    }
  
  	if(scrollToTop > heightOfHeader*5) {
        btnScrollTop.addClass('active-scroll-top');
    } else {
        btnScrollTop.removeClass('active-scroll-top');
    }
}

function hoverEvent() {
  let iconUser = $('.site-header__account');
  let goupListUser = $('.group-user-list');

  iconUser.hover(
    function() {  
      goupListUser.addClass('group-user-list-active');
    }, function() {
      goupListUser.removeClass('group-user-list-active');
    }
  );
}

function btnScrollTop() {
    let btn = $('.scroll-top');

    btn.click(function(event) {
        $('html,body').animate({scrollTop: 0}, 700);
    });
}

function animation_wow() {
    wow = new WOW(
        {
          boxClass:     'wow',      
          animateClass: 'animated',
          offset:       0,         
          mobile:       false,      
          live:         true    
        }
    )
    wow.init();
}

function collectionSlider() {
    let slides = $('.collection-slider');
  	let numShow = slides.attr('data-sliders');
	
    slides.slick({
        slidesToShow: numShow,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        responsive: [
           {
              breakpoint: 991,
              settings: {
                slidesToShow: 3
              }
           },
           {
              breakpoint: 750,
              settings: {
                slidesToShow: 2
              }
           },
          {
              breakpoint: 375,
              settings: {
                slidesToShow: 1
              }
           }
        ]
    });
   
    if($(window).width > 750) {
    }
  	
  	let widthtItem = $('.collection-slider .box-slider-collection').innerWidth();
  	
    $('.collection-slider li img').css({
      'height': widthtItem,
      'object-fit': 'cover'
    });
    
	//resize
  	$(window).resize(function() {
      let widthtItem = $('.collection-slider .box-slider-collection').innerWidth();

      $('.collection-slider li img').css({
        'height': widthtItem,
        'object-fit': 'cover'
      });
  	});
}

function addapHeight() {
  let itemProduct = $('.template-collection .grid-view-item__image-wrapper');
  let itemProductSing = $('.product-single__thumbnails li img');
  let widthRecond = $('.template-product .recomand-images .product-card__image-wrapper').innerWidth();

  
   $('.template-product .recomand-images .product-card__image-wrapper .grid-view-item__image').css({
      'height': widthRecond,
      'max-height': widthRecond,
      'object-fit': 'cover'
    });
  $('.template-collection .grid-view-item__image-wrapper img').css({
      'height': itemProduct.innerWidth(),
      'max-height': itemProduct.innerWidth(),
      'object-fit': 'cover'
    });
  $(window).resize(function() {
    let itemProduct = $('.template-collection .grid-view-item__image-wrapper');
    let itemProductSing = $('.product-single__thumbnails li img');
    let widthRecond = $('.template-product .recomand-images .product-card__image-wrapper').innerWidth();
 
    $('.template-product .recomand-images .product-card__image-wrapper .grid-view-item__image').css({
      'height': widthRecond+'px!important',
      'max-height': widthRecond+'px!important',
      'object-fit': 'cover'
    });
     $('.template-collection .grid-view-item__image-wrapper img').css({
      'height': itemProduct.innerWidth(),
      'max-height': itemProduct.innerWidth(),
      'object-fit': 'cover'
    });
  });
}

function bannerSlider() {
  let bannerSlider = $('.banner-slider');
  
  bannerSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
  });
}

function eventEditAddress() {
  let btnEdit = $('.btn-edit-address-cus');
  let layOut = $('.list-address-custom .item-add');
  let widthCurrnet = layOut.innerWidth();
  let btnCancel = $('.list-address-custom .cancel-event');
  
  btnEdit.click(function() {
    if(($(this).hasClass('show-edit'))) {
      $(this).removeClass('show-edit');
       $(this).parents().find('.list-address-custom .item-add').removeClass('temp-hide');
      $(this).parents().find('.list-address-custom .item-add').removeClass('active-layout');
      $(this).parents().eq(3).removeClass('active-layout');
      layOut.css({
        'width': widthCurrnet,
        'margin-left': '10px',
        'margin-right': '10px'
      });
    } else {
      $(this).addClass('show-edit');
      $(this).parents().find('.list-address-custom .item-add').addClass('temp-hide');
      $(this).parents().find('.list-address-custom .item-add').removeClass('active-layout');
      $(this).parents().eq(3).removeClass('temp-hide');
      $(this).parents().eq(3).addClass('active-layout');
      
      layOut.css({
        'width': '100%',
        'margin-left': '0',
        'margin-right': '0'
      });
    }
  });
  btnCancel.click(function() {
    btnEdit.removeClass('show-edit');
    $(this).parents().find('.list-address-custom .item-add').removeClass('temp-hide');
    $(this).parents().find('.list-address-custom .item-add').removeClass('active-layout');
    $(this).parents().eq(3).removeClass('active-layout');
     layOut.css({
        'width': widthCurrnet,
        'margin-left': '10px',
        'margin-right': '10px'
      });
  });
  
//   fix checked default address
  let checkbox = $('#checkbox-address-default.checked-address input');
  checkbox.attr('checked','checked');
}

function loadMoreButton() {
   $('.js-load-more').on('click', function(){
     let $this =$(this),
     totalPages = parseInt($('[data-all-pages]').val()),
     currentPage = parseInt($('[data-this-page]').val()),
     datacollurl = $('[data-coll-url]').val();
     
     $this.attr('disabled', true);
     $this.find('[load-more-text]').addClass('hide');
     $this.find('[loader]').removeClass('hide');

     let nextUrl = $('[data-next-link]').val();
     let current_page_new = currentPage + 1;
     let next_coll = currentPage + 2;
    
     $.ajax({
       url: nextUrl,
       type: 'GET',
       dataType: 'html',
       success: function(responseHTML){
         $('[data-next-link]').val(datacollurl + "?page="+next_coll);
         $('[data-this-page]').val(current_page_new);
         $('.grid--view-items').append($(responseHTML).find('.grid--view-items').html());
       },
       complete: function() {
         if(current_page_new < totalPages) {
           	$this.attr('disabled', false); 
            $this.find('[load-more-text]').removeClass('hide'); 
            $this.find('[loader]').addClass('hide');
         } 
         if(current_page_new >= totalPages) {
           $this.find('[load-more-text]').text('Products Finished').removeClass('hide'); 
           $this.find('[loader]').addClass('hide');
           $this.css('display','none');
         } 
       }
     })
  });
}


function checkCustomer() {
  let condition = window.location.search;
  let lang=$('html').attr('lang');
  if(lang == 'fr') {
    string = 'Cette adresse e-mail est déjà abonnée.';
  } else {
    string = 'This email address has already subscribed.';
  }
  
  if (condition === '?contact%5Btags%5D=newsletter&form_type=customer') {
    scrollToDiv($('footer'));
    $('footer .title-newsletter').after('<p class="form-message form-message--success">'+string+'</p>');
  }
  
  function scrollToDiv(element) {
    $('html, body').animate({
      scrollTop: element.offset().top - 600
    }, 350);
  }
}

function eyePassword() {
  $(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye-slash fa-eye");
    let input = $(this).parent().find('input');
    if(input.attr('type') === "password") {
      input.attr("type", "text");
    } else {
	  input.attr("type", "password");
    }
  });
}

function validateEmail() {
  let patternEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let lang =$('html').attr('lang');
  let form = $('form');
  let emailLogin = $('#customer_login input[type="email"]');
  let emailContact = $('.contact-template input[type="email"]');   
  let emailFooter = $('footer input[type="email"]'); 
  let emailReset = $('#RecoverEmail');
  let emailRegister = $('#RegisterForm-email');
  let tel = $('input[type="tel"]');
  let submit = $('input[type="submit"]');
  let btnSubmit = $('button[type="submit"]');
  emailContact.after('<span class="note-validate-emailContact" style="position:absolute;font-size:13px;bottom:-20px"></span>');   
  emailLogin.after('<span class="note-validate-emailLogin" style="position:absolute;font-size:13px;bottom:-20px"></span>');   
  emailFooter.after('<span class="note-validate-emailFooter" style="position:absolute;font-size:13px;bottom:-20px"></span>');   
  emailReset.after('<span class="note-validate-emailReset" style="position:absolute;font-size:13px;bottom:-20px"></span>');     
  emailRegister.after('<span class="note-validate-emailRegister" style="position:absolute;font-size:13px;bottom:-20px"></span>');   
  tel.after('<span class="note-validate-tel"style="position:absolute;font-size:13px;bottom:-20px"></span>');
  
  
  validEmail(emailContact,'.note-validate-emailContact');
  validEmail(emailFooter,'.note-validate-emailFooter');  
  validEmail(emailLogin,'.note-validate-emailLogin');
  validEmail(emailReset, '.note-validate-emailReset');  
  validEmail(emailRegister, '.note-validate-emailRegister');
  validTel(tel,'.note-validate-tel');
  
  if(emailFooter.val() === '') {
       submit.attr('disabled','disabled');
       btnSubmit.attr('disabled','disabled');
    } else {
       submit.removeAttr('disabled');        
       btnSubmit.removeAttr('disabled');
   }
  function validEmail(object, classObject) {
    object.keydown(
  	   function () {
        if(lang === 'en') {
          if(object.val().match(patternEmail)) {
          form.addClass('valid');
          form.removeClass('invalid');
          submit.removeAttr('disabled');        
          btnSubmit.removeAttr('disabled');
          $(classObject).html('');
//           $(classObject).css('color','green');

          } else if(object.val() === '') {
            form.removeClass('valid');
            form.addClass('invalid');
            submit.attr('disabled','disabled');
            btnSubmit.attr('disabled','disabled');
            $(classObject).html('');
          } else {
            form.removeClass('valid');
            form.addClass('invalid');
            submit.attr('disabled','disabled');
            btnSubmit.attr('disabled','disabled');
            $(classObject).html('Please enter valid email address!');
           $(classObject).css('color','red');
          }
        } else {
          if(object.val().match(patternEmail)) {
          form.addClass('valid');
          form.removeClass('invalid');
          submit.removeAttr('disabled');
          btnSubmit.removeAttr('disabled');
          $(classObject).html('');
//           $(classObject).css('color','green');
          } else if(email.val() === '') {
            form.removeClass('valid');
            form.removeClass('invalid');
            submit.attr('disabled','disabled');
            btnSubmit.attr('disabled','disabled');
            $(classObject).html('');
          } else {
            form.removeClass('valid');
            form.addClass('invalid');
            submit.attr('disabled','disabled');
            btnSubmit.attr('disabled','disabled');
            $(classObject).html('Veuillez saisir une adresse e-mail valide !');
            $(classObject).css('color','red');
          }
        }
        $("form").on("keypress", function (event) {
          let keyPressed = event.keyCode || event.which;

          if($('form').hasClass('invalid')) {  
            if (keyPressed === 13) {
              event.preventDefault();
              return false;
            }
          } else {
            if (keyPressed === 13) {
              event.preventDefault();
            }
          }
        });
      }
    );
     object.change(
  	   function () {
        if(lang === 'en') {
          if(object.val().match(patternEmail)) {
          form.addClass('valid');
          form.removeClass('invalid');
          submit.removeAttr('disabled');        
          btnSubmit.removeAttr('disabled');
          $(classObject).html('');
//           $(classObject).css('color','green');

          } else if(object.val() === '') {
            form.removeClass('valid');
            form.addClass('invalid');
            submit.attr('disabled','disabled');
            btnSubmit.attr('disabled','disabled');
            $(classObject).html('');
          } else {
            form.removeClass('valid');
            form.addClass('invalid');
            submit.attr('disabled','disabled');
            btnSubmit.attr('disabled','disabled');
            $(classObject).html('Please enter valid email address!');
           $(classObject).css('color','red');
          }
        } else {
          if(object.val().match(patternEmail)) {
          form.addClass('valid');
          form.removeClass('invalid');
          submit.removeAttr('disabled');
          btnSubmit.removeAttr('disabled');
          $(classObject).html('');
//           $(classObject).css('color','green');
          } else if(email.val() === '') {
            form.removeClass('valid');
            form.removeClass('invalid');
            submit.attr('disabled','disabled');
            btnSubmit.attr('disabled','disabled');
            $(classObject).html('');
          } else {
            form.removeClass('valid');
            form.addClass('invalid');
            submit.attr('disabled','disabled');
            btnSubmit.attr('disabled','disabled');
            $(classObject).html('Veuillez saisir une adresse e-mail valide !');
            $(classObject).css('color','red');
          }
        }
        $("form").on("keypress", function (event) {
          let keyPressed = event.keyCode || event.which;

          if($('form').hasClass('invalid')) {  
            if (keyPressed === 13) {
              event.preventDefault();
              return false;
            }
          } else {
            if (keyPressed === 13) {
              event.preventDefault();
            }
          }
        });
      }
    );
  } 
  function validTel(object, classObject) {
     object.keydown(
      function() {
        if(lang === 'en') {
          let telInter = object.val();
          if(jQuery.isNumeric(telInter) && (telInter.length <= 10) && (telInter.length > 8)) {
            form.addClass('valid');
            form.removeClass('invalid');
            submit.removeAttr('disabled');
            $(classObject).html('');
//             $(classObject).css('color','green');
          } else if(object.val() === '') {
            form.removeClass('valid');
            form.removeClass('invalid');
            submit.removeAttr('disabled');
            $(classObject).html('');
          } else {
            form.removeClass('valid');
            form.addClass('invalid');
            submit.attr('disabled','disabled');
            $(classObject).html('Please enter valid telephone number!');
            $(classObject).css('color','red');

          }
        } else {
          let telInter = object.val();
          if(jQuery.isNumeric(telInter) && (telInter.length <= 10) && (telInter.length > 8)) {
            form.addClass('valid');
            form.removeClass('invalid');
             submit.removeAttr('disabled');
            $(classObject).html('');
//             $(classObject).css('color','green');

          } else if(object.val() === '') {
            form.removeClass('valid');
            form.removeClass('invalid');
            submit.removeAttr('disabled');
            $('.note-validate-tel').html('');
          } else {
            form.removeClass('valid');
            form.addClass('invalid');
            submit.attr('disabled','disabled');
            $(classObject).html('Veuillez saisir un numéro de téléphone valide!');
            $(classObject).css('color','red');
          }
        }
        $("form").on("keypress", function (event) {
          let keyPressed = event.keyCode || event.which;

          if($('form').hasClass('invalid')) {  
            if (keyPressed === 13) {
              event.preventDefault();
              return false;
            }
          } else {
            if (keyPressed === 13) {
              event.preventDefault();
            }
          }
        });
      }
    );
     object.change(
      function() {
        if(lang === 'en') {
          let telInter = object.val();
            if(jQuery.isNumeric(telInter) && (telInter.length <= 10) && (telInter.length > 8)) {
            form.addClass('valid');
            form.removeClass('invalid');
            submit.removeAttr('disabled');
            $(classObject).html('');
//             $(classObject).css('color','green');
          } else if(object.val() === '') {
            form.removeClass('valid');
            form.removeClass('invalid');
            submit.removeAttr('disabled');
            $(classObject).html('');
          } else {
            form.removeClass('valid');
            form.addClass('invalid');
            submit.attr('disabled','disabled');
            $(classObject).html('Please enter valid telephone number!');
            $(classObject).css('color','red');

          }
        } else {
          let telInter = object.val();
          if(jQuery.isNumeric(telInter) && (telInter.length <= 10) && (telInter.length > 8)) {
            form.addClass('valid');
            form.removeClass('invalid');
             submit.removeAttr('disabled');
            $(classObject).html('');
//             $(classObject).css('color','green');

          } else if(object.val() === '') {
            form.removeClass('valid');
            form.removeClass('invalid');
            submit.removeAttr('disabled');
            $('.note-validate-tel').html('');
          } else {
            form.removeClass('valid');
            form.addClass('invalid');
            submit.attr('disabled','disabled');
            $(classObject).html('Veuillez saisir un numéro de téléphone valide!');
            $(classObject).css('color','red');
          }
        }
        $("form").on("keypress", function (event) {
          let keyPressed = event.keyCode || event.which;

          if($('form').hasClass('invalid')) {  
            if (keyPressed === 13) {
              event.preventDefault();
              return false;
            }
          } else {
            if (keyPressed === 13) {
              event.preventDefault();
            }
          }
        });
      }
    );
  }
  
  $('.template-product .product-form__item.product-form__item--submit button[type="submit"]').removeAttr('disabled');  
  $('.template-customers-reset_password input[type="submit"]').removeAttr('disabled');  
  $('.template-cart input[type="submit"]').removeAttr('disabled');
  $('.shopify-challenge__button.btn').removeAttr('disabled');
  $('.rush-block').removeAttr('disabled');
  
  let listAddress = $('.list-address-custom li.item-add');
  
  listAddress.each(function(i, e) {
    let form = $(e).find('form');
    let submit = $(e).find('form input[type="submit"]');
    let tel = $(e).find('form input[type="tel"]');
    submit.removeAttr('disabled');
    
    validTel(tel,'.note-validate-tel');
  });
  
}

function animationHeaderBanner() {
  let heading = $('.officience-hero h1');
  let string = heading.text();
  let array = string.split('');
  heading.html('');

  for(let i=0; i < parseInt(array.length); i++) {
    let j = i + 1;
    heading.append("<span class='wow fadeInUp' data-wow-delay='"+(j+0.5)/(parseInt(array.length))+"s'>"+array[i]+"</span>");
  }
}