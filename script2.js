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



