document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');
    const messageTextarea = document.querySelector('#contact-form textarea[name="message"]');

    serviceItems.forEach(item => {
        item.setAttribute('draggable', true);
        item.addEventListener('dragstart', dragStart);
    });

    messageTextarea.addEventListener('dragover', dragOver);
    messageTextarea.addEventListener('dragleave', dragLeave);
    messageTextarea.addEventListener('drop', drop);

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.querySelector('h3').textContent);
    }

    function dragOver(e) {
        e.preventDefault();
        this.classList.add('drag-over');
    }

    function dragLeave(e) {
        this.classList.remove('drag-over');
    }

    function drop(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        const serviceName = e.dataTransfer.getData('text');
        this.value = 'Im interested in your "${serviceName}" service. Please provide more information.';
    }
});