window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.backgroundImage = 'radial-gradient(#df0303, #000000)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});