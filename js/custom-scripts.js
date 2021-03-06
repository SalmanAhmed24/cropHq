$('#testimonial').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})
$('.loop').owlCarousel({
    center: true,
    items:5,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        1200:{
            items:5,
            center:true,
            nav:true
        },
        600:{
            items:3,
            center:true,
            nav:true

        },
        300:{
            items:3,
            center:true,
            nav:true
        }
    }
})