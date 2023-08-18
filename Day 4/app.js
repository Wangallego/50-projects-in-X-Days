const button = document.getElementById('search-button');
const search = document.getElementById('search');

function addClass() {
    if (!search.classList.contains('w-[16rem]')) {
        search.classList.add('w-[16rem]');
    }else{
        search.classList.remove('w-[16rem]')
        search.disable
    }
}



button.addEventListener('click', addClass);
