$(document).ready(function() {
    $("#vegas-slider").vegas({
        timer: false,
        delay: 7000,
        transition: 'fade',
        transitionDuration: 2000,
        slides: [
            { src: "img/home/img_1.jpg" }
        ],
        overlay: 'https://cdnjs.cloudflare.com/ajax/libs/vegas/2.5.4/overlays/02.png'
    });
});