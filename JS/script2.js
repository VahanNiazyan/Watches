'use strict'
$(document).ready(function () {


///////////////////////////////  Input Open and Close //////////////////

    $('#icon1').click(function () {
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
    $('#icon2').click(function () {
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
})

///////////////////////////////  Menu Open and Close //////////////////

let menu = document.getElementById('bars')
let down = document.getElementById('down')
let clos = document.getElementById('clos')
menu.onclick = function (){
    $('.responsive-menu').css({ "visibility": "visible",'opacity':1,'height':'290px','padding-top':'10px'})
    $('#clos').css({ "display": "block"})
    $('#bars').css({ "display": "none"})
}

down.onclick = function (){
    $('.responsive-menu').css({ "visibility": "visible",'opacity':1,'height':'290px','padding-top':'10px'})
    $('#clos').css({ "display": "block"})
    $('#bars').css({ "display": "none"})
}



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

// $(".filter-button").click(function(){
//     var value = $(this).attr('data-filter');
    
//     if(value == "hdpe")
//     {
//         $('.filter').filter('.'+value).show('3000');
//         $(".filter").not('.'+value).hide('3000');
//     }
//     else
//     {
//         $(".filter").not('.'+value).hide('3000');

//         if(value == "sprinkle"){
//         $('.sprinkle').filter('.'+value).show('3000');
//         }else if(value == "spray"){
//             $('.spray').filter('.'+value).show('3000');
//         }else if(value == "irrigation"){
//             $('.irrigation').filter('.'+value).show('3000');
//         }
//     }
// });

// if ($(".filter-button").removeClass("active")) {
// $(this).removeClass("active");
// }
// $(this).addClass("active");
////////////////////////menu-nav active///////////////////////////////////////////

// $('.menu-nav a').click(function(){
//     $('.menu-nav a').removeClass('active')
//    $(this).addClass('active')
// })



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



////////////////////////////////////// The image enlarges when clicked ////////////////////////////////////


$(".images-v").click(function() {

    let images = "";
  
    images = $(this).attr("src");

    $('#bigimg').attr('src',images)
  
  });
  
  $("#m-img img").click(function() {

    let images = "";
  
    images = $(this).attr("src");

    $('.modal-img').attr('src',images)
  
  });
