let modalIcon = document.querySelectorAll('.modal-check-icon');
modalIcon = Array.from(modalIcon);

function changeHandler() {
    console.log(this);
    if (this.textContent.trim() === 'check_box_outline_blank') {
        this.textContent = `check_box`;
    } else {
        this.textContent = `check_box_outline_blank`;
    }
}

modalIcon.forEach(item => {
    item.addEventListener('click', changeHandler);
});
