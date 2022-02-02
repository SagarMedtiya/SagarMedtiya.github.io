$(document).ready(function(){
    $('#profile__ripple').ripples({
        resolution: 1024,
        dropRadius: 15,
    });
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        effect: "creative",
        creativeEffect: {
            prev: {
              shadow: true,
              translate: ["-125%", 0, -800],
              rotate: [0, 0, -90],
            },
            next: {
              shadow: true,
              translate: ["125%", 0, -800],
              rotate: [0, 0, 90],
            },
          },
          autoplay: {
            delay: 1500,
            disableOnInteraction: true,
          },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        
      });
});
