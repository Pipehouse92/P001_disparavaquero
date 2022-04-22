document.addEventListener('click', function (e) {
    let body = document.querySelector('body');
    let bullet = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    bullet.classList.add('bullet');
    bullet.style.left = x + 'px';
    bullet.style.top = y + 'px';
    body.appendChild(bullet);

    //sonido del disparo
    let sound = document.getElementById('audio');
    sound.play()

    //Sangre en el escenario despues del tiro
    //Sangre al azar con una imagen
    let images = [
        'url("blood1.png")',
        'url("blood2.png")',
        'url("blood3.png")',
        'url("blood4.png")',
    ]
    let blood = document.createElement('span');
    blood.classList.add('blood');

    let bg = images[Math.floor(Math.random()* images.length)];

    blood.style.backgroundImage = bg;
    blood.style.left = Math.random() * innerWidth + 'px';
    blood.style.top = Math.random() * innerHeight + 'px';
    body.appendChild(blood);

    //Extraer balas y sangre despues de 4 segundos
    setTimeout(function () {
        bullet.remove();
        blood.remove();
    }, 4000);
})

