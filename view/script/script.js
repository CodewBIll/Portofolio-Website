window.addEventListener('load', () => {
    document.querySelector('.slogan').classList.add('show');
    document.querySelector('.icon').classList.add('show');
});

function createPopup(id){
    let popupNode = document.querySelector(id);
    let overlay = popupNode.querySelector('.overlay');
    let close = popupNode.querySelector('.close');
    function openPopup() {
        popupNode.classList.add('active');
    }
    function closePopup() {
        popupNode.classList.remove('active');
    }
    overlay.addEventListener('click', closePopup);
    close.addEventListener('click', closePopup);
    return openPopup
};

let popup = createPopup('#popup');
document.querySelector('#open-popup').addEventListener('click',popup);