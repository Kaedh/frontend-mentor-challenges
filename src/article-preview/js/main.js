const shareBtn = document.getElementById('share-btn')

shareBtn.addEventListener('click', () => {
    console.log('Clicked')
    document.getElementById("hidden-menu").classList.toggle('visible')

})