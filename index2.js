// let slides = document.querySelectorAll("mySlides");
// let btns = document.querySelectorAll("manual_btn");
// let currentSlide = 1;
// let manualNav = function(manual) {
//     slides.forEach((mySlides) => {
//         mySlides.classList.remove("active");
//         btns.forEach((manual_btn) => {
//             manual_btn.classList.remove("active");
//         })
//     })
//     slides[manual].classList.add("active");
//     btns[manual].classList.add("active");
// }

// btns.forEach((manual_btn, i) => {
//     manual_btn.addEventListener("click", () => {
//         manualNav(i);
//         currentSlide = i;
//     });
// });

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("manual_btn");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000);
}


$(document).ready(function(){  
    $(".img1").hover(function(){  
      $(".img1").attr('src','./home-img/Sticky-Rolls-Notes.png')
      .width('60%')
      .height('60%'); 
      }, function(){  
      $(".img1").attr('src','./home-img/Sticky-Roll-Notes1.png')  
    });
    $(".img2").hover(function(){  
        $(".img2").attr('src','./home-img/Bamboo-Collection.png')
        .width('60%')
        .height('60%');  
        }, function(){  
        $(".img2").attr('src','./home-img/bamboo-dinner-plate.png')
        });
      $(".img3").hover(function(){  
        $(".img3").attr('src','./home-img/Project-Planners.png')
        .width('60%')
        .height('60%');  
        }, function(){  
        $(".img3").attr('src','./home-img/Project-Planner.png')
        });
      $(".img4").hover(function(){  
        $(".img4").attr('src','./home-img/2022-Desk-and-Wall-Calendar.png')
        .width('60%')
        .height('60%');  
        }, function(){  
        $(".img4").attr('src','./home-img/2022-Desk-calendar-01.png')
        });
      $(".img5").hover(function(){  
        $(".img5").attr('src','./home-img/Habit-Movement-Tracker.png')
        .width('60%')
        .height('60%');  
        }, function(){  
        $(".img5").attr('src','./home-img/Habit-Tracker.png')
        });
      $(".img6").hover(function(){  
        $(".img6").attr('src','./home-img/double-wall-cups-002.png')
        .width('60%')
        .height('60%');  
        }, function(){  
        $(".img6").attr('src','./home-img/Groovy-Cups-S4.png')
        });
      $(".img7").hover(function(){  
        $(".img7").attr('src','./home-img/Placemat-Banner-Square.png')
        .width('60%')
        .height('60%');  
        }, function(){  
        $(".img7").attr('src','./home-img/Placemat-Yellow-W-Fork.png')
        });
      
      
  });