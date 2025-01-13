document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.btn-primary');
    if (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            alert('Thank you for contacting us');
        });
    }
});
