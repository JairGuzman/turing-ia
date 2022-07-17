

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});




window.addEventListener('load', function(){
    new Glider(this.document.querySelector('.carrousel'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.navigation-points',
        arrows: {
            prev: '.navigation-left',
            next: '.navigation-right'
        }
    });

    new Glider(this.document.querySelector('.carrousel-historias'),{
        slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  dots: '.navigation-points2',
  arrows: {
    prev: '.navigation-left2',
    next: '.navigation-right2'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 'auto',
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
    });
})

$(window).on("scroll", function () {
    if ($(window).scrollTop() > $("#welcome").offset().top - 100) {
        $(".nav").addClass("active");
    } else {
        $(".nav").removeClass("active");
    };
});