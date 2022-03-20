$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    // element.style.width='500px',
    responsive: [{
      breakpoint: 851,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }]
  });
});

$(document).ready(function () {
  $(".SlickCarousel").slick({
    rtl: false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay: true,
    autoplaySpeed: 3000, //  Slide Delay
    speed: 800, // Transition Speed
    slidesToShow: 5, // Number Of Carousel
    slidesToScroll: 1, // Slide To Move 
    pauseOnHover: false,
    appendArrows: $(".Container .Head .Arrows"), // Class For Arrows Buttons
    prevArrow: '<span class="Slick-Prev"></span>',
    nextArrow: '<span class="Slick-Next"></span>',
    easing: "linear",
    responsive: [{
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
  })
})

// Navbar Toggle

// var count;
var ele;
// count=0;
// if(document.getElementsByClassName('icon')[0].style.display=='inline'){
//   count++;
// }
// else{
//   count=0;
// }
ele = document.getElementById('hamburger');
function toggleNavbar() {
  // if(count%2==0)
  if(ele.style.display == 'none')
  {
    ele.style.display = 'flex';
    ele.style.height = 'auto';
    
  } 
  else{
    ele.style.display = 'none';
  }
}
// ele.onclick = toggleNavbar();
