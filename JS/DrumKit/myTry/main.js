var key;
window.addEventListener('keydown', function(e) {
    console.log(e.keyCode);
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    setTimeout(() => {key.classList.remove('playing')}, 300);
    console.log(key);
})
