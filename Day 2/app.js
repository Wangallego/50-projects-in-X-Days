const imgs = document.querySelectorAll('.panel');

imgs.forEach(img => {
    img.addEventListener('click', () => {
        imgs.forEach(otherImg => {
            if (otherImg !== img) {
                otherImg.classList.remove('w-[22rem]');
            }
        });
        img.classList.toggle('w-[22rem]');
    });
});
