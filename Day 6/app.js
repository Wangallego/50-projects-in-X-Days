const boxes = document.querySelectorAll('.box');


window.addEventListener('scroll', checkBox);

checkBox();

function checkBox(){
    const anchoVisible = window.innerHeight/5*4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < anchoVisible){
            box.classList.add('boxShow')
        }else {
            box.classList.remove('boxShow')
        }
    })
}

