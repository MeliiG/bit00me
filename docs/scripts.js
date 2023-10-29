// JavaScript para el movimiento del puntero personalizado
document.addEventListener('mousemove', (e) => {
    const customPointer = document.querySelector('.custom-pointer');
    const x = e.clientX;
    const y = e.clientY;
    customPointer.style.left = x + 'px';
    customPointer.style.top = y + 'px';
});

// JavaScript para cambiar la clase cuando se hace clic
document.addEventListener('click', () => {
    const customPointer = document.querySelector('.custom-pointer');
    customPointer.classList.add('clicked');
    setTimeout(() => {
        customPointer.classList.remove('clicked');
    }, 300); // Cambia el puntero de nuevo a su color original después de 0.3 segundos (300 milisegundos)
});

