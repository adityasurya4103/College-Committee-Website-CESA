function Toggle() {
    const navbar = document.getElementById("nav");
    // navbar.style.display="block";
    console.log('clicked');
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    }
    else {
        navbar.style.display = "block";
    }

}


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
  });

