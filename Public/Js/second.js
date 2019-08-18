$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        },
        1200:{
            items:5,
            nav:true,
            loop:true
        }
    }
})