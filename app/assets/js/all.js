




$(document).ready(function () {
  // 改按鈕方向
    $('.modal-btn').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
    // 側邊欄
    $('.sidebar-menu-item').click(function (e) { 
      // e.preventDefault();
      $(this).addClass('active');
      $(this).parent().siblings().children().removeClass('active');
    });
});

// 多選
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
