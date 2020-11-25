// const slides = document.querySelectorAll('.image-to-show');
// let currentSlide = 0;
// let isSliderActive = true;

// function showNextImage() {
//     if(!isSliderActive) return;
//     slides[currentSlide].classList.remove('image-visible');
//     setTimeout(() => {
//         slides[currentSlide].style.display = 'none';
//         currentSlide++;
//         if(currentSlide === slides.length) {
//             currentSlide = 0;
//         }
//         slides[currentSlide].classList.add('image-visible');
//         slides[currentSlide].style.display = 'block';
//     }, 500)
// }


// slides[0].style.display = 'block';
// setInterval(showNextImage, 3000);

// document.querySelector('.pauseBtn').addEventListener('click', () => {
//     isSliderActive = false;
// });

// document.querySelector('.continueBtn').addEventListener('click', () => {
//     isSliderActive = true;
// });

let intervalId;
const slides = Array.from(document.querySelectorAll('.image-to-show'));
const stopBtn = document.querySelector('.pauseBtn');
const startBtn = document.querySelector('.continueBtn');

function showNextImage() {
    const currentSlide = slides.indexOf(document.querySelector('.image-visible'));
    slides[currentSlide].classList.remove('image-visible');
    setTimeout(() => {
        slides[currentSlide].style.display = 'none';
        const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        slides[nextSlide].classList.add('image-visible');
        slides[nextSlide].style.display = 'block';
    }, 500)
}
slides[0].style.display = 'block';

function startImageSwitch() { 
    if(!intervalId) {
        intervalId = setInterval(showNextImage, 3000);
    }
    
}

function stopImageSwitch() {
    clearInterval(intervalId);
    intervalId = null;
}

startImageSwitch();

stopBtn.addEventListener('click', () => {
    stopImageSwitch();
    stopBtn.disabled = true;
    startBtn.disabled = false;
});

startBtn.addEventListener('click', () => {
    startImageSwitch();
    startBtn.disabled = true;
    stopBtn.disabled = false;
});
