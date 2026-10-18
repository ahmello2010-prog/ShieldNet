// ShieldNet - script.js
// بنية مركزية شاملة لإدارة وتصنيف مشغلات جميع الأزرار على الهواتف والمتصفحات

document.addEventListener("DOMContentLoaded", () => {
    /* ========================================================
       1. العناصر المرجعية ونصوص السياسات
       ======================================================== */
    const loginModal = document.getElementById("login-modal");
    const loginModalTitle = document.getElementById("login-modal-title");
    const loginModalDesc = document.getElementById("login-modal-desc");
    const policyModal = document.getElementById("policy-modal");
    const policyTitle = document.getElementById("policy-modal-title");
    const policyContent = document.getElementById("policy-modal-content");

    const mobileDrawer = document.getElementById("mobile-nav-drawer");
    const drawerBackdrop = document.getElementById("mobile-drawer-backdrop");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");

    const toastEl = document.getElementById("action-toast");
    const toastMessage = document.getElementById("toast-message");
    let toastTimeout = null;

    // نصوص النوافذ المخصصة لسياسة الخصوصية والشروط
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

    /* ========================================================
       2. دوال مساعدة لإظهار الإشعارات والنوافذ
       ======================================================== */
    let lastModalActionTime = 0;

    function showToast(message, duration = 3200) {
        if (!toastEl || !toastMessage) return;
        toastMessage.textContent = message;
        toastEl.classList.add("is-visible");
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toastEl.classList.remove("is-visible");
        }, duration);
    }

    function openModal(modalEl) {
        if (!modalEl) return;
        lastModalActionTime = Date.now();
        modalEl.classList.add("is-active");
        modalEl.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
    }

    function closeModal(modalEl) {
        if (!modalEl) return;
        // حماية ضد الإغلاق اللحظي الخاطئ الناتج عن نقرات اللمس المتتالية
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

    function updateLoginModalCopy(portalName) {
        if (!loginModalTitle || !loginModalDesc) return;
        if (portalName && portalName !== "Guard Network Access") {
            loginModalTitle.textContent = `Access ${portalName}`;
            loginModalDesc.textContent = `Please sign in or create a verified account to view ${portalName} and access certified security personnel profiles.`;
        } else {
            loginModalTitle.textContent = "Access Guard Network";
            loginModalDesc.textContent = "Join Egypt's verified security personnel network. Sign in to hire experienced, background-checked security guards or create your verified security guard candidate profile.";
        }
    }

    /* ========================================================
       3. المدير الموحد لجميع مشغلي الأزرار (ButtonActionManager)
          - يجمع المشغلات في فئات محددة (Modals, Navigation, Interactive, Custom)
          - يقبل إضافة أزرار جديدة مستقبلاً بسهولة
       ======================================================== */
    const ButtonActionManager = {
        // فئات الأزرار المعيارية
        categories: {
            MODAL: "modal",
            NAVIGATION: "nav",
            ACTION: "action",
            CUSTOM: "custom"
        },

        // سجل المشغلات المبوب حسب الفئة والمعرّف
        handlers: {
            /* ----- فئة النوافذ المنبثقة (MODAL ACTIONS) ----- */
            "modal:open-login": (target) => {
                const portal = target.getAttribute("data-portal") || "Guard Network Access";
                updateLoginModalCopy(portal);
                closeMobileDrawer();
                openModal(loginModal);
            },
            "modal:close-login": () => {
                closeModal(loginModal);
            },
            "modal:open-policy": (target) => {
                const policyKey = target.getAttribute("data-policy") || "privacy";
                if (policyTexts[policyKey]) {
                    if (policyTitle) policyTitle.textContent = policyTexts[policyKey].title;
                    if (policyContent) policyContent.innerHTML = policyTexts[policyKey].html;
                }
                closeMobileDrawer();
                openModal(policyModal);
            },
            "modal:close-policy": () => {
                closeModal(policyModal);
            },
            "modal:submit-access": () => {
                closeModal(loginModal);
                showToast("✓ تم إرسال الطلب بنجاح! جاري التوجيه لبوابة الحراس...");
            },
            "modal:close-all": () => {
                closeAllModals();
            },

            /* ----- فئة التنقل والقائمة الجانبية (NAVIGATION ACTIONS) ----- */
            "nav:toggle-drawer": () => {
                isDrawerOpen() ? closeMobileDrawer() : openMobileDrawer();
            },
            "nav:open-drawer": () => {
                openMobileDrawer();
            },
            "nav:close-drawer": () => {
                closeMobileDrawer();
            },
            "nav:home": () => {
                closeMobileDrawer();
                window.scrollTo({ top: 0, behavior: "smooth" });
            },
            "nav:locked-portal": (target) => {
                const portal = target.getAttribute("data-portal") || target.textContent.trim();
                updateLoginModalCopy(portal);
                closeMobileDrawer();
                openModal(loginModal);
            },

            /* ----- فئة تفاعل المنصة والخدمات (INTERACTIVE ACTIONS) ----- */
            "action:explore-guards": () => {
                updateLoginModalCopy("Verified Guard Directory");
                closeMobileDrawer();
                openModal(loginModal);
            },
            "action:create-account": () => {
                updateLoginModalCopy("Create Guard / Employer Account");
                closeMobileDrawer();
                openModal(loginModal);
            }
        },

        /**
         * دالة تسجيل مشغل جديد (تتيح إضافة أي زر مستقبلاً من أي مكان)
         * @param {string} actionKey - معرّف الزر مثل 'payroll:download' أو 'modal:open-custom'
         * @param {Function} handler - الدالة التي ستنفذ عند الضغط
         */
        registerAction(actionKey, handler) {
            if (typeof handler === "function") {
                this.handlers[actionKey] = handler;
            }
        },

        /**
         * الدالة المركزية لتنفيذ المشغل المناسب للزر
         */
        dispatch(actionKey, element, event) {
            if (!actionKey) return false;

            if (typeof this.handlers[actionKey] === "function") {
                try {
                    this.handlers[actionKey](element, event);
                    return true;
                } catch (error) {
                    console.error(`[ButtonActionManager] Error executing '${actionKey}':`, error);
                    return false;
                }
            }

            // معالجة مرنة في حال إضافة زر مودال بدون تسجيل يدوي
            if (actionKey.startsWith("modal:open-")) {
                openModal(loginModal);
                return true;
            }

            console.warn(`[ButtonActionManager] No handler registered for: '${actionKey}'`);
            return false;
        },

        /**
         * استنتاج نوع الزر ومعرّفه تلقائياً
         */
        resolveAction(element) {
            if (!element) return null;

            // 1. أولوية السمة الصريحة data-action
            const explicitAction = element.getAttribute("data-action");
            if (explicitAction) return explicitAction;

            // 2. التحقق من سمات التوافق القديمة
            if (element.hasAttribute("data-close-modal")) return "modal:close-login";
            if (element.hasAttribute("data-close-policy")) return "modal:close-policy";
            if (element.hasAttribute("data-open-policy")) return "modal:open-policy";
            if (element.hasAttribute("data-open-modal")) return "modal:open-login";

            // 3. التحقق من فئات العناصر (CSS Classes)
            if (element.classList.contains("mobile-menu-btn")) return "nav:toggle-drawer";
            if (element.classList.contains("drawer-close-btn")) return "nav:close-drawer";
            if (element.classList.contains("mobile-drawer-backdrop")) return "nav:close-drawer";
            if (element.classList.contains("is-locked")) return "nav:locked-portal";
            if (element.classList.contains("btn-register")) return "action:create-account";
            if (element.classList.contains("btn-drawer")) return "action:create-account";
            if (element.classList.contains("btn-explore")) return "action:explore-guards";

            return null;
        }
    };

    // إتاحة الكائن على المستوى العام window لسهولة الوصول والإضافة في أي وقت
    window.ButtonActionManager = ButtonActionManager;
    window.ShieldNetDispatch = (actionKey, el) => ButtonActionManager.dispatch(actionKey, el);

    /* ========================================================
       4. مستمع الأحداث المركزي الموحد (Master Event Delegation)
          - يلتقط كل النقرات واللمس على كامل الصفحة
          - يمنع الأخطاء في الهواتف الذكية ومتصفحات الويب
       ======================================================== */
    document.addEventListener("click", (e) => {
        // البحث عن أقرب عنصر قابل للنقر أو يحمل معرّف إجراء
        const clickable = e.target.closest(
            "[data-action], button, .btn, .nav-link, .drawer-link, .mobile-menu-btn, .mobile-fixed-cta, [data-open-policy], [data-close-modal], [data-close-policy]"
        );

        if (!clickable) return;

        const actionKey = ButtonActionManager.resolveAction(clickable);
        if (actionKey) {
            e.preventDefault();
            e.stopPropagation();
            ButtonActionManager.dispatch(actionKey, clickable, e);
        }
    }, { passive: false });

    // إغلاق المودال أو القائمة بمفتاح Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            ButtonActionManager.dispatch("modal:close-all");
            ButtonActionManager.dispatch("nav:close-drawer");
        }
    });

    // إغلاق القائمة الجانبية تلقائياً عند تغيير حجم الشاشة إلى وضع سطح المكتب
    window.addEventListener("resize", () => {
        if (window.innerWidth > 992 && isDrawerOpen()) {
            closeMobileDrawer();
        }
    });

    /* ========================================================
       5. عداد الإحصائيات التصاعدي السلس (Smooth Stat Counters)
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
