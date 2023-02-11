var video = document.querySelectorAll('video');
video.forEach(play => play.addEventListener('click', () => {
    play.classList.toggle('active');

    if (play.paused) {
        play.play();
    } else {
        play.pause();
        play.currentTime = 0;
    }
}));
const file = document.querySelector('#my_file');
file.addEventListener('change', function() {
    const choosedFile = this.files[0];
    if (choosedFile) {
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            img.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(choosedFile);
    }
});

/*var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function(popoverTigger) {
    return new bootstrap.Popover(popoverTigger);
});*/

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
})