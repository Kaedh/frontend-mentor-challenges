const shareBtn = document.getElementById('share-btn');

shareBtn.addEventListener('click', () => {
    document.getElementById('hidden-menu').classList.toggle('visible')
    document.querySelector('.share-box').classList.toggle('show-arrow')
});