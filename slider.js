$(document).ready(function(){
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        const offset = -index * 100 + '%';
        $('.slides').css('transform','translateX('+ offset +')');
    }

    function nextSlide(){
        currentIndex = (currentIndex+1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex =(currentIndex-1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000);

    $('.next').click(nextSlide);
    $('.prev').click(prevSlide);
});
