// ShieldNet - script.js (نسخة متوافقة مع اللمس على الهواتف الحقيقية)

const root = document.documentElement;

/* ---------- أدوات فتح/إغلاق النوافذ (مع احتياطي للمتصفحات القديمة) ---------- */
function openDialog(dlg) {
    if (!dlg) return;
    if (typeof dlg.showModal === "function") {
        if (!dlg.open) dlg.showModal();
    } else {
        dlg.classList.add("dialog-fallback");
        dlg.setAttribute("open", "");
    }
}

function closeDialog(dlg) {
    if (!dlg) return;
    if (typeof dlg.close === "function") {
        dlg.close();
    } else {
        dlg.removeAttribute("open");
    }
}

/* ---------- نافذة تسجيل الدخول ---------- */
const modal = document.getElementById("login-modal");

// الروابط المعطلة: تفتح مودال يوصي بتسجيل الدخول
document.querySelectorAll(".is-locked").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        closeMobileDrawer(); // إغلاق القائمة أولاً إن كانت مفتوحة
        openDialog(modal);
    });
});

if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.closest("[data-close-modal]")) closeDialog(modal);
    });
}

/* ---------- نافذة الخصوصية والشروط ---------- */
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
            openDialog(policyModal);
        }
    });
});

if (policyModal) {
    policyModal.addEventListener("click", (e) => {
        if (e.target === policyModal || e.target.closest("[data-close-policy]")) {
            closeDialog(policyModal);
        }
    });
}

/* ---------- القائمة الجانبية للهاتف ---------- */
const mobileDrawer = document.getElementById("mobile-nav-drawer");
const drawerBackdrop = document.getElementById("mobile-drawer-backdrop");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const drawerCloseBtn = document.getElementById("drawer-close-btn");

// القائمة مغلقة افتراضياً: inert يمنعها من التقاط اللمس أو التركيز وهي خارج الشاشة
if (mobileDrawer) mobileDrawer.inert = true;

function isDrawerOpen() {
    return !!mobileDrawer && mobileDrawer.classList.contains("is-open");
}

function openMobileDrawer() {
    if (!mobileDrawer || !drawerBackdrop || isDrawerOpen()) return;
    mobileDrawer.inert = false;
    mobileDrawer.classList.add("is-open");
    drawerBackdrop.classList.add("is-active");
    mobileDrawer.setAttribute("aria-hidden", "false");
    if (mobileMenuBtn) mobileMenuBtn.setAttribute("aria-expanded", "true");
    root.classList.add("drawer-open");
}

function closeMobileDrawer() {
    if (!mobileDrawer || !drawerBackdrop || !isDrawerOpen()) return;
    mobileDrawer.classList.remove("is-open");
    drawerBackdrop.classList.remove("is-active");
    mobileDrawer.setAttribute("aria-hidden", "true");
    mobileDrawer.inert = true;
    if (mobileMenuBtn) mobileMenuBtn.setAttribute("aria-expanded", "false");
    root.classList.remove("drawer-open");
}

if (mobileMenuBtn) {
    mobileMenuBtn.setAttribute("aria-controls", "mobile-nav-drawer");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    mobileMenuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        isDrawerOpen() ? closeMobileDrawer() : openMobileDrawer();
    });
}

if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeMobileDrawer);
if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeMobileDrawer);

// إغلاق القائمة عند الضغط على أي رابط بداخلها
document.querySelectorAll(".drawer-link, .btn-drawer").forEach((link) => {
    link.addEventListener("click", closeMobileDrawer);
});

// إغلاق بزر الهروب
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMobileDrawer();
});

// عند تكبير الشاشة / تدوير الهاتف إلى وضع سطح المكتب
window.addEventListener("resize", () => {
    if (window.innerWidth > 992) closeMobileDrawer();
});

/* ---------- العد التصاعدي للأرقام ---------- */
// نحدّث نص الرقم فقط (بدون innerHTML في كل إطار) لتخفيف الحمل على الهاتف
const statValues = document.querySelectorAll(".stat-value[data-target]");
if (statValues.length > 0) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = 1600;
    const startTime = performance.now();

    const render = (progress) => {
        const easeOut = 1 - (1 - progress) * (1 - progress);
        statValues.forEach((el) => {
            const target = parseInt(el.getAttribute("data-target"), 10);
            const isPercent = target < 100;
            const current = isPercent ? (easeOut * 99.4).toFixed(1) : Math.floor(easeOut * target).toLocaleString();
            const node = el.firstChild;
            if (node && node.nodeType === Node.TEXT_NODE) node.nodeValue = current;
        });
    };

    function updateCounters(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        render(progress);
        if (progress < 1) requestAnimationFrame(updateCounters);
    }

    if (reduceMotion) render(1);
    else requestAnimationFrame(updateCounters);
}
