function playSound(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const sound = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    if(!sound) {return}
    sound.currentTime = 0;
    sound.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    console.log(e);
    if(e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound)
