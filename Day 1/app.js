const progressBarContainers = document.querySelectorAll('.progress-container');
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    if (currentIndex < progressBarContainers.length) {
        progressBarContainers[currentIndex].querySelector('.progress-bar').style.width = '100%';
        currentIndex++;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        progressBarContainers[currentIndex].querySelector('.progress-bar').style.width = '0';
    }
});
