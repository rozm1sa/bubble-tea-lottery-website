/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    let scrollAmount = 0;
    const scrollStep = document.querySelector('.carousel-item').offsetWidth;

    nextButton.addEventListener('click', () => {
        scrollAmount += scrollStep;
        carousel.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    prevButton.addEventListener('click', () => {
        scrollAmount -= scrollStep;
        carousel.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});


document.getElementById('lotteryForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    console.log('Submitting data:', data); // Log form data before submission

    fetch('https://script.google.com/macros/s/AKfycbwctWjeHV3ASDiz-Smm4vfhMLdqy42fXwC1mR1qLE_fY77Do3sjeYhnCMIOK_wVo6Xi/exec', {
        redirect: "follow",
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        }
    }).then(response => response.json()).then(response => {
        console.log('Response from server:', response); // Log server response
        if(response.result === 'success') {
            alert('Jūsu pieteikums ir saņemts!'); // Add an alert message here
        } else {
            alert('Kļūda! Lūdzu mēģiniet vēlreiz.');
        }
    }).catch(error => {
        console.error('Error:', error); // Log any errors
        alert('error');
    });
});

document.getElementById('lotteryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Form submitted!');
});



  
