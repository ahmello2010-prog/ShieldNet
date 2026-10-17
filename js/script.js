// ShieldNet - script.js
const modal = document.getElementById("login-modal");

// الروابط المعطلة: تفتح مودال يوصي بتسجيل الدخول
document.querySelectorAll(".is-locked").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        if (modal) modal.showModal();
    });
});

// إغلاق المودال بزر "Maybe later" أو بالضغط على الخلفية
if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.closest("[data-close-modal]")) modal.close();
    });
}

// نافذة الخصوصية والشروط (Policy Modal)
const policyModal = document.getElementById("policy-modal");
const policyTitle = document.getElementById("policy-modal-title");
const policyContent = document.getElementById("policy-modal-content");

const policyTexts = {
    privacy: {
        title: "Privacy Policy",
        html: "<p>At ShieldNet, data confidentiality and client security are foundational principles. All corporate premises details, patrol telemetry, and client communications remain strictly encrypted and confidential. We never share property intelligence with unverified entities.</p>"
    },
    terms: {
        title: "Terms of Service",
        html: "<p>ShieldNet acts as an enterprise security platform connecting corporate estates and properties with verified Egyptian security contractors. All security personnel and firms undergo thorough credential verification and licensing checks prior to deployment.</p>"
    }
};

document.querySelectorAll("[data-open-policy]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const type = btn.getAttribute("data-open-policy");
        if (policyModal && policyTexts[type]) {
            policyTitle.textContent = policyTexts[type].title;
            policyContent.innerHTML = policyTexts[type].html;
            policyModal.showModal();
        }
    });
});

if (policyModal) {
    policyModal.addEventListener("click", (e) => {
        if (e.target === policyModal || e.target.closest("[data-close-policy]")) {
            policyModal.close();
        }
    });
}

// تأثير عد تصاعدي سلس وبسيط لأرقام المنصة
const statValues = document.querySelectorAll(".stat-value[data-target]");
if (statValues.length > 0) {
    const duration = 1600;
    const startTime = performance.now();

    function updateCounters(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Quadratic ease-out
        const easeOut = 1 - (1 - progress) * (1 - progress);

        statValues.forEach((el) => {
            const target = parseInt(el.getAttribute("data-target"), 10);
            const current = Math.floor(easeOut * target);
            el.innerHTML = `${current.toLocaleString()}<span class="stat-plus">+</span>`;
        });

        if (progress < 1) {
            requestAnimationFrame(updateCounters);
        }
    }

    requestAnimationFrame(updateCounters);
}
