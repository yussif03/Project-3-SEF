var navbar = document.querySelector(".navbar");
    window.onscroll = function () {
        if (window.pageYOffset > 100) {
            navbar.style.opacity = 0.8;
        } else {
            navbar.style.opacity = 1;
        }
    };

document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
      trigger: 'focus'
    });
  });
});

var copybtn = document.querySelectorAll(".copybtn")
function showAlert() {
  alert("تم نسخ النص.")
}
copybtn.forEach(function(btn) {
  btn.addEventListener("click", showAlert)
})