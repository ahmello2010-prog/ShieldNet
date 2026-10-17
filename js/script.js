// ShieldNet - script.js
const modal = document.getElementById("login-modal");

// الروابط المعطلة: تفتح مودال يوصي بتسجيل الدخول
document.querySelectorAll(".nav-link.is-locked").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        modal.showModal();
    });
});

// إغلاق المودال بزر "Maybe later" أو بالضغط على الخلفية
modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest("[data-close-modal]")) modal.close();
});
