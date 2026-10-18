// ShieldNet - script.js
// نظام تفاعلي متوافق تماماً مع شاشات اللمس والهواتف الذكية ومتصفحات سطح المكتب

document.addEventListener("DOMContentLoaded", () => {
    /* ========================================================
       1. إدارة النوافذ المنبثقة (Universal Modals)
       ======================================================== */
    const loginModal = document.getElementById("login-modal");
    const policyModal = document.getElementById("policy-modal");
    const policyTitle = document.getElementById("policy-modal-title");
    const policyContent = document.getElementById("policy-modal-content");

    // نصوص سياسة الخصوصية وشروط الخدمة
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

    let lastModalActionTime = 0;

    function openModal(modalEl) {
        if (!modalEl) return;
        lastModalActionTime = Date.now();
        modalEl.classList.add("is-active");
        modalEl.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
    }

    function closeModal(modalEl) {
        if (!modalEl) return;
        // منع الإغلاق الفوري الناتج عن نقرة اللمس المزدوجة أو المتأخرة
        if (Date.now() - lastModalActionTime < 180) return;
        modalEl.classList.remove("is-active");
        modalEl.setAttribute("aria-hidden", "true");
        if (!document.querySelector(".custom-modal.is-active")) {
            document.body.classList.remove("modal-open");
        }
    }

    function closeAllModals() {
        document.querySelectorAll(".custom-modal.is-active").forEach(closeModal);
    }

    // الاستماع لأحداث الإغلاق (النقر على الخلفية المعتمة أو زر الإغلاق X أو الأزرار)
    document.querySelectorAll(".custom-modal").forEach((modalEl) => {
        modalEl.addEventListener("click", (e) => {
            const closeTrigger = e.target.closest("[data-close-modal], [data-close-policy]");
            if (closeTrigger) {
                e.preventDefault();
                closeModal(modalEl);
            }
        });
    });

    /* ========================================================
       2. إدارة القائمة الجانبية في الهاتف (Mobile Drawer)
       ======================================================== */
    const mobileDrawer = document.getElementById("mobile-nav-drawer");
    const drawerBackdrop = document.getElementById("mobile-drawer-backdrop");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const drawerCloseBtn = document.getElementById("drawer-close-btn");

    function isDrawerOpen() {
        return !!mobileDrawer && mobileDrawer.classList.contains("is-open");
    }

    function openMobileDrawer() {
        if (!mobileDrawer || !drawerBackdrop || isDrawerOpen()) return;
        mobileDrawer.classList.add("is-open");
        drawerBackdrop.classList.add("is-active");
        mobileDrawer.setAttribute("aria-hidden", "false");
        if (mobileMenuBtn) mobileMenuBtn.setAttribute("aria-expanded", "true");
    }

    function closeMobileDrawer() {
        if (!mobileDrawer || !drawerBackdrop || !isDrawerOpen()) return;
        mobileDrawer.classList.remove("is-open");
        drawerBackdrop.classList.remove("is-active");
        mobileDrawer.setAttribute("aria-hidden", "true");
        if (mobileMenuBtn) mobileMenuBtn.setAttribute("aria-expanded", "false");
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.setAttribute("aria-controls", "mobile-nav-drawer");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        mobileMenuBtn.addEventListener("click", (e) => {
            e.preventDefault();
            isDrawerOpen() ? closeMobileDrawer() : openMobileDrawer();
        });
    }

    if (drawerCloseBtn) {
        drawerCloseBtn.addEventListener("click", (e) => {
            e.preventDefault();
            closeMobileDrawer();
        });
    }

    if (drawerBackdrop) {
        drawerBackdrop.addEventListener("click", (e) => {
            e.preventDefault();
            closeMobileDrawer();
        });
    }

    /* ========================================================
       3. ربط أزرار وروابط فتح المودال بوكس باللمس والنقر
       ======================================================== */
    function triggerLoginModal(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        closeMobileDrawer();
        openModal(loginModal);
    }

    // جميع العناصر التفاعلية المرتبطة بطلب تسجيل الدخول أو الانضمام أو الروابط المقفلة
    const loginTriggers = document.querySelectorAll(
        ".is-locked, [data-open-modal='login'], .mobile-fixed-cta, .btn-register, .btn-drawer, .btn-explore"
    );

    loginTriggers.forEach((btn) => {
        btn.addEventListener("click", triggerLoginModal);
    });

    // روابط فتح سياسة الخصوصية وشروط الخدمة
    document.querySelectorAll("[data-open-policy]").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const type = btn.getAttribute("data-open-policy");
            if (policyModal && policyTexts[type]) {
                if (policyTitle) policyTitle.textContent = policyTexts[type].title;
                if (policyContent) policyContent.innerHTML = policyTexts[type].html;
                closeMobileDrawer();
                openModal(policyModal);
            }
        });
    });

    // إغلاق المودال أو القائمة عند الضغط على زر Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeAllModals();
            closeMobileDrawer();
        }
    });

    // إغلاق القائمة الجانبية إذا كبرت الشاشة لوضع سطح المكتب
    window.addEventListener("resize", () => {
        if (window.innerWidth > 992 && isDrawerOpen()) {
            closeMobileDrawer();
        }
    });

    /* ========================================================
       4. عداد الإحصائيات التصاعدي السلس (Smooth Stat Counters)
       ======================================================== */
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
                const current = isPercent
                    ? (easeOut * 99.4).toFixed(1)
                    : Math.floor(easeOut * target).toLocaleString();
                const node = el.firstChild;
                if (node && node.nodeType === Node.TEXT_NODE) {
                    node.nodeValue = current;
                }
            });
        };

        function updateCounters(currentTime) {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            render(progress);
            if (progress < 1) requestAnimationFrame(updateCounters);
        }

        if (reduceMotion) {
            render(1);
        } else {
            requestAnimationFrame(updateCounters);
        }
    }
});
