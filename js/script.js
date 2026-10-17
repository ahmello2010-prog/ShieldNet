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
        title: "Privacy & Guard Vetting Policy",
        html: "<p>At ShieldNet, candidate confidentiality and client property security are paramount. Guard background checks, identification records, and hiring estate discussions remain strictly protected and confidential.</p>"
    },
    terms: {
        title: "Security Guard Staffing Terms",
        html: "<p>ShieldNet operates as a premier professional network connecting verified physical security guards and protection officers with commercial estates and private properties. All candidates undergo credential auditing before deployment.</p>"
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

// التحكم في القائمة الجانبية للهاتف (Mobile Sidebar Drawer)
const mobileDrawer = document.getElementById("mobile-nav-drawer");
const drawerBackdrop = document.getElementById("mobile-drawer-backdrop");
const menuToggle = document.getElementById("mobile-menu-toggle");
const brandingBtn = document.getElementById("mobile-branding-btn");
const drawerCloseBtn = document.getElementById("drawer-close-btn");

function openMobileDrawer() {
    if (mobileDrawer && drawerBackdrop) {
        mobileDrawer.classList.add("is-open");
        drawerBackdrop.classList.add("is-active");
        mobileDrawer.setAttribute("aria-hidden", "false");
        if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
    }
}

function closeMobileDrawer() {
    if (mobileDrawer && drawerBackdrop) {
        mobileDrawer.classList.remove("is-open");
        drawerBackdrop.classList.remove("is-active");
        mobileDrawer.setAttribute("aria-hidden", "true");
        if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    }
}

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", openMobileDrawer);
}

// دعم النقر على الشعار إذا كان مرئياً
if (brandingBtn) {
    brandingBtn.addEventListener("click", () => {
        if (window.innerWidth <= 992) {
            openMobileDrawer();
        }
    });
}

if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", closeMobileDrawer);
}

if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", closeMobileDrawer);
}

// إغلاق القائمة عند الضغط على أي رابط بداخلها
document.querySelectorAll(".drawer-link").forEach((link) => {
    link.addEventListener("click", () => {
        closeMobileDrawer();
    });
});

// إغلاق بزر الهروب Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer && mobileDrawer.classList.contains("is-open")) {
        closeMobileDrawer();
    }
});

// تأثير عد تصاعدي سلس وبسيط لأرقام المنصة
const statValues = document.querySelectorAll(".stat-value[data-target]");
if (statValues.length > 0) {
    const duration = 1600;
    const startTime = performance.now();

    function updateCounters(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - (1 - progress) * (1 - progress);

        statValues.forEach((el) => {
            const target = parseInt(el.getAttribute("data-target"), 10);
            const isPercent = target < 100;
            const current = isPercent ? (easeOut * 99.4).toFixed(1) : Math.floor(easeOut * target).toLocaleString();
            const suffix = isPercent ? "%" : "+";
            el.innerHTML = `${current}<span class="stat-plus">${suffix}</span>`;
        });

        if (progress < 1) {
            requestAnimationFrame(updateCounters);
        }
    }

    requestAnimationFrame(updateCounters);
}
