"use strict";

// 側邊欄
// 改按鈕方向
$(document).ready(function () {
  $('.modal-btn').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });
}); // 多選

var modalIcon = document.querySelectorAll('.modal-check-icon');
modalIcon = Array.from(modalIcon);

function changeHandler() {
  console.log(this);

  if (this.textContent.trim() === 'check_box_outline_blank') {
    this.textContent = "check_box";
  } else {
    this.textContent = "check_box_outline_blank";
  }
}

modalIcon.forEach(function (item) {
  item.addEventListener('click', changeHandler);
});
//# sourceMappingURL=all.js.map
