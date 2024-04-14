
        const navtrigerbtn = document.getElementById("nav_trigger_btn")
        const navmenu = document.getElementById("nav-menu")
   

        navtrigerbtn.onclick = function () {
          navmenu.classList.toggle("h-0")
          navmenu.classList.toggle("nav")
        }
        // let li = document.querySelectorAll("#saad")   // foreach (callbackfunction (e اجباري  , index , array اختياري){},this argument) 
        // li.forEach( function(e){
        //  e.addEventListener("click" , () =>{
        //   navmenu.classList.add("hidden")
        //  })
        // })


        let links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute('href'));
        if (target && window.innerWidth <= 1024) {
          navmenu.classList.toggle("h-0")
          navmenu.classList.toggle("nav")
            let targetPosition = target.offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute('href'));
        if (target && window.innerWidth >= 1025) {
            let targetPosition = target.offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});




// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 3,
    }
  },
}); 


 // تهيئة Swiper
 var swipers = new Swiper('.swiper-container', {
  // خيارات التحكم بالسلايدر
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 3,
    }
  },
   // المسافة بين الشرائح
   loop: true, // تكرار السلايدر
   navigation: {
     nextEl: '.swiper-button-next', // الزر التالي
     prevEl: '.swiper-button-prev', // الزر السابق
   },
 });



//  scroll btn
let btn = document.querySelector(".kem")

   window.onscroll = function () {
   if (window.scrollY >= 1000) {
   btn.style.display = "block"
  }
  else{
     btn.style.display = "none"
   }
   }

   btn.onclick = function () {
    window.scrollTo({
      top:0,
      left:0,
      behavior:"smooth"
    })
  }
  
  
  let contactbtn = document.querySelector(".contact-btn")
  
  contactbtn.onclick = function () {
    window.location.href = 'http://wa.me/+201556477029'
  }


  
  // let body = document.body
  // body.setInterval(() => {
  //   window.location.href = 'index.html';
  // }, 3000);



  // scrollReveal
  const sr = ScrollReveal({
    origin: "bottom",
    distance: '60px',
    duration: 3000,
    delay: 600,
});

// hero
sr.reveal('.hero__text' , { origin: 'top' });

  //  steps
  sr.reveal(".steps__step" , {distance:"100px" , interval:100})


  // about
  sr.reveal(".about__text" , { origin: 'left' })
  sr.reveal(".about__img" , { origin: 'right' , delay:800 })

  // testmonials
  sr.reveal(".testimonial__title" , {  origin:"top" })
  sr.reveal(".testmonial__bg" , { delay:800 })
  sr.reveal(".testmonial__slider" , { delay:1200 })
  
  
  // brands
  sr.reveal(".brands__image" , { distance:"100px" , interval:100})
  
  // work
  sr.reveal(".work__title " , {origin:"top"})
  sr.reveal(".swiper-wrapper" ,{origin:"left" , delay:800})
  
  // stats
  sr.reveal(".stats__title" , { origin:"top"})
  sr.reveal(".stats " , { distance:"100px" })
  sr.reveal(".stats__item" , { distance:"100px" , interval:100})
  
  
  // news
  sr.reveal(".zozo" , { origin:"top"})
  sr.reveal(".news__item " , { delay:1000 , interval:100})
  
  // CONTACT
  sr.reveal(".contact__container" )
  sr.reveal(".contact__text" , { origin:"top" , delay:800})
  
  
  // footer
  sr.reveal(".footer__item" , { origin:"left"})
  sr.reveal(".footer__items" , { origin:"right"})
  sr.reveal(".footer-copy " , {delay:800})


