const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

let userInput = [];

window.addEventListener(
  'keydown',
  (event) => {
    if (event.defaultPrevented) {
      return;
    }

    let handled = false;
    if (event.key !== undefined) {
      handled = true;
    } else if (event.keyCode !== undefined) {
      handled = true;
    }

    if (handled) {
      event.preventDefault();
      userInput.push(event.key);
      if (userInput.length === konamiCode.length && userInput.every((key, index) => key === konamiCode[index])) {
        Swal.fire({
            title: 'Code Konami saisi !',
            html: '<img src="./image/jojeu.jpg" style="width: 100%;">', // Remplacez le chemin par le chemin réel de votre image
          });
        userInput = [];
      } else if (userInput.length >= konamiCode.length) {
        userInput = [];
      }
    }
  },
  true
);