(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');

    if (!close || !modalOpen || !modal) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        modal.style.visibility = 'visible';
        document.body.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        modal.style.visibility = 'hidden';
        document.body.overflow = 'initial';
    });
});
