'use strict'


$(document).ready(function () {


/////////////////////////  Images Carousel //////////////////

let previous = document.querySelector('.previous')
let next = document.querySelector('.next')
let img1 = document.getElementById('image')
img1.style.transitionDuration = "0.5s"

    let images = [
        'images/sevtion_carousel/carousel2.jpg',
        'images/sevtion_carousel/carousel1.jpg',
    ]

    let imageIndex = 0
    Previous()
    next.onclick = function () {
        ++imageIndex

        if (imageIndex === images.length) {
            imageIndex = 0
        }
        $("h1").css({ 'top': '-25px', "opacity": "0" }).animate({ top: 0,opacity: 1},400)
        $(".carosel-text-p1").css({ 'top': '-25px', "opacity": "0" }).animate({ top: 0,opacity: 1},500)
        $(".carosel-text-p2").css({ 'top': '-15px', "opacity": "0"}).animate({ top: 0,opacity: 1},500)
        $("#button").css({ 'top': "30px", "opacity": "0" }).animate({ top: 0,opacity: 1}, 700)

        $("#image").css("background-image", 'url(' + images[imageIndex] + ')');
    }

    function Previous() {
        --imageIndex

        if (imageIndex === -1) {
            imageIndex = images.length - 1
        }

        $(".carosel-text-h5").css({ 'top': '200px', "opacity": "0",'transform-origin': '10px 290px' })
        $(".carosel-text-h5").css({ 'top': 0, "opacity": "1",'transform-origin': '0', 'transform': 'rotate(0deg)','transition-duration':'0.6s'})

        $("h1").css({ 'top': '-25px', "opacity": "0" }).animate({ top: 0,opacity: 1},400)
        $(".carosel-text-p1").css({ 'top': '-25px', "opacity": "0" }).animate({ top: 0,opacity: 1},500)
        $(".carosel-text-p2").css({ 'top': '-15px', "opacity": "0"}).animate({ top: 0,opacity: 1},500)
        $("#button").css({ 'top': "30px", "opacity": "0" }).animate({ top: 0,opacity: 1}, 600)
        $("#image").css("background-image", 'url(' + images[imageIndex] + ')');
    }

    setInterval(Previous,5000)
    previous.onclick = Previous

///////////////////////////////  Input Open and Close //////////////////

    $('#icon1').on('click',function () {
        $('.inpop').css({ "visibility": "visible", "opacity": "1", "transition-duration": ".8s" })
        $('#icon2').css({ "display": "block", "transition-duration": ".8s" })
        $(".header-second-div1").css({ "padding-left": "9.8px" })
        $('#icon1').css({ "transition-duration": ".8s" })
        let maxWidth = window.matchMedia("(max-width: 1000px)")
        let main = document.querySelector('.header-second-icon')
        if(maxWidth = main){
            $('#icon2').css({"visibility": "visible", "positione": "absolute",'top':'55px','left':'202px',"transition-duration": ".8s",'opacity':1 })
        }
    })
    $('#icon2').on('click',function () {
        $('.inpop').css({ "visibility": "hidden", "opacity": "0", "transition-duration": ".8s" })
        $('#icon2').css({ "display": "none",})
        $('#icon1').css({ "transition-duration": ".8s" })
        $(".header-second-div1").css({ "padding-left": "54.5px" })
        let maxWidth = window.matchMedia("(max-width: 1000px)")
        let main = document.querySelector('.header-second-icon')
        if(maxWidth = main){
            $('#icon2').css({ "visibility": "hidden","transition-duration": ".8s",'opacity':0 })
        }
    })


///////////////////////////////  Menu Open and Close //////////////////

let menu = document.getElementById('bars')
// let down = document.getElementById('down')
let clos = document.getElementById('clos')
menu.onclick = function (){
    $('.responsive-menu').css({ "visibility": "visible",'opacity':1,'height':'290px','padding-top':'10px'})
    $('#clos').css({ "display": "block"})
    $('#bars').css({ "display": "none"})
}

$('#down').click(function(){
    if($('.responsive-menu').css( "visibility") == "hidden"){
    $('.responsive-menu').css({ "visibility": "visible",'opacity':1,'height':'290px','padding-top':'10px'})
    $('#clos').css({ "display": "block"})
    $('#bars').css({ "display": "none"})
}else{
    $('#down').click(function(){
    $('.responsive-menu').css({ "visibility": "hidden",'opacity':0,'height':0,'padding-top':0})
        $('#clos').css({ "display": "none"})
        $('#bars').css({ "display": "block"})
    })
}
})
clos.onclick = function (){
        $('.responsive-menu').css({ "visibility": "hidden",'opacity':0,'height':0,'padding-top':0})
        $('#clos').css({ "display": "none"})
        $('#bars').css({ "display": "block"})  
        
}

///////////////////////////////  Menu Open Home1 Home2 //////////////////

////1////

$('#plus1').on("click", function() {
        $('#minus1').css({'display':'block','transition-duration': '0.4s'})
        $('.open1').css({'display':'block','transition-duration': '0.4s','opacity': 1})
        $('#plus1').css({'display':'none','transition-duration': '0.4s'})
})
$('#minus1').on("click", function() {
    $('#minus1').css({'display':'none','transition-duration': '0.4s'})
    $('.open1').css({'display':'none','transition-duration': '0.4s',})
    $('#plus1').css({'display':'block','transition-duration': '0.4s'})
})

/////2////

$('#plus2').on("click", function() {
    $('#minus2').css({'display':'block','transition-duration': '0.4s'})
    $('.open2').css({'display':'block','transition-duration': '0.4s','opacity': 1})
    $('#plus2').css({'display':'none','transition-duration': '0.4s'})
})

$('#minus2').on("click", function() {
$('#minus2').css({'display':'none','transition-duration': '0.4s'})
$('.open2').css({'display':'none','transition-duration': '0.4s',})
$('#plus2').css({'display':'block','transition-duration': '0.4s'})
})

/////3////

$('#plus3').on("click", function() {
    $('#minus3').css({'display':'block','transition-duration': '0.4s'})
    $('.open3').css({'display':'block','transition-duration': '0.4s','opacity': 1})
    $('#plus3').css({'display':'none','transition-duration': '0.4s'})
})
$('#minus3').on("click", function() {
$('#minus3').css({'display':'none','transition-duration': '0.4s'})
$('.open3').css({'display':'none','transition-duration': '0.4s',})
$('#plus3').css({'display':'block','transition-duration': '0.4s'})
})

/////3////

$('#plus4').on("click", function() {
    $('#minus4').css({'display':'block','transition-duration': '0.4s'})
    $('.open4').css({'display':'block','transition-duration': '0.4s','opacity': 1})
    $('#plus4').css({'display':'none','transition-duration': '0.4s'})
})
$('#minus4').on("click", function() {
$('#minus4').css({'display':'none','transition-duration': '0.4s'})
$('.open4').css({'display':'none','transition-duration': '0.4s',})
$('#plus4').css({'display':'block','transition-duration': '0.4s'})
})

///////////////////////////////  Menu max-width Close //////////////////

$(window).resize(function() {

    let scrolMenu = document.querySelector('.header-thirt-menu-icon')
    let x = window.matchMedia("(max-width: 1000px)")

    if(scrolMenu = x.matches){
        $('.header-ul').css({ "display": "none"})
        $('#clos').css({ "display": "none"})
        $('#bars').css({ "display": "block"})
        $('.responsive-menu').css({ "display": 'block'})
    }else{
        $('.header-ul').css({ "display": "flex",'opacity':1})
        $('.responsive-menu').css({ "display": 'none'})
        $('#bars').css({ "display": "none"})
    }
});


///////////////////////////////  Menu Scrol FIxed //////////////////

window.onscroll = function() {myFunction()};

let header = document.querySelector(".header-thirt-div");

function myFunction() {

let scrolMenu = document.querySelector('.header-thirt-menu-icon')
let x = window.matchMedia("(max-width: 1000px)")

    if(scrolMenu = x.matches){
    if (window.pageYOffset > 450) {
      header.classList.add("fix-search");
    }
     else {
      header.classList.remove("fix-search");
    }
}else{
    if (window.pageYOffset > 225) {
        header.classList.add("fix-search");
      }
       else {
        header.classList.remove("fix-search");
      }
}


///////////////////////////////  Scrol Show Hide ////////////////////////

if(window.pageYOffset > 150){
    $(".scroll-top").css({'visibility':'visible','opacity':1,'transitionDuration':'0.8s'})
}else if(window.pageYOffset < 150){
    $(".scroll-top").css({'visibility':'hidden','opacity':0,'transitionDuration':'0.8s'})
}

  }


///////////////////////////////  Scrol Top ////////////////////////

$( ".scroll-top" ).click(function() {
    if ($('html').scrollTop()) {
    $('html').animate({scrollTop:0},'slow')
    return
    }
  });


/////////////////////////////////  Gallery  ///////////////////////////

$(".filter-button").click(function(){
    var value = $(this).attr('data-filter');
    
    if(value == "hdpe")
    {
        $('.filter').filter('.'+value).show('3000');
        $(".filter").not('.'+value).hide('3000');
    }
    else
    {
        $(".filter").not('.'+value).hide('3000');

        if(value == "sprinkle"){
        $('.sprinkle').filter('.'+value).show('3000');
        }else if(value == "spray"){
            $('.spray').filter('.'+value).show('3000');
        }else if(value == "irrigation"){
            $('.irrigation').filter('.'+value).show('3000');
        }
    }
});

if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");
////////////////////////menu-nav active///////////////////////////////////////////

$('.menu-nav a').click(function(){
    $('.menu-nav a').removeClass('active')
   $(this).addClass('active')
})



//////////////////////// modal number -+ /////////////////////////////////////////

$('.up').click(function(){
    let count = parseInt($('#count').val());
    $('#count').val(count+1)
})

$('.down').click(function(){
    let count = parseInt($('#count').val());
    if(count > 0){
    $('#count').val(count-1)
}
})


/////////////////////////////// description nav-link //////////////////////////////////

$('#nav-link1').click(function(){
    $('#nav-block1').css({'display':'block','color':'white'})
    $('#nav-block2').css({'display':'none'})
    $('#nav-block3').css({'display':'none'})
})

$('#nav-link2').click(function(){
    $('#nav-block2').css({'display':'block'})
    $('#nav-block1').css({'display':'none'})
    $('#nav-block3').css({'display':'none'})
})

$('#nav-link3').click(function(){
    $('#nav-block3').css({'display':'block'})
    $('#nav-block1').css({'display':'none'})
    $('#nav-block2').css({'display':'none'})
})

$('.description a').click(function(){
    $('.description a').removeClass('clas')
    $(this).addClass('clas')
})


 ////////////////////////////////////// modal-The image enlarges when clicked ////////////////////////////////////

 $("#m-img img").click(function() {

    var images = "";
  
    images = $(this).attr("src");
console.log(images)
    $('.modal-img').attr('src',images)
  
  });



 $(".modal-header .slick-track img").click(function() {

    let images = "";
  
    images = $(this).attr("src");

    $('.modal-img').attr('src',images)
  
  });





// Card Script   ///////////////////////////////

  let card_item = $('#card-item')
  let price = $('.card-span').find('.productPrice');
  let name = $('.card-section-text').find('.productName')
  let buttons = $('.card-button').find('.card-add');

  buttons.on('click',addToCard(this))


function addToCard(item){
    for(let i = 0; i < buttons.length; i++){
        let itemId = $(buttons[i]).attr('id',`item${i+1}`);
        let id = buttons[i].id.slice(4, 6)
        console.log(id);
        //  localStorage.setItem(`name${id}`,name[id].text())
      }
}



});