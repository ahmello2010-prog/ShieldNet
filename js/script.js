/* =============================================================
   0. I18N - Shared Language System (English / Arabic)
   ============================================================= */
const LANG_KEY = "shieldnet_lang";

const TRANSLATIONS = {
    en: {
        langToggle: "العربية",
        navHome: "Home",
        navCompanies: "Security Companies",
        navServices: "Services",
        navAbout: "About Platform",
        navRequests: "My Requests",
        navTerms: "Terms and Conditions",
        navContact: "Contact Us",
        navSignIn: "Sign In",
        navLogOut: "Log Out",
        navSignUp: "Create Account",
        navProfile: "Check Your Profile",
        heroTitle: "Elite Security Guards <br />For Corporate & Estates",
        heroDesc: "The professional networking and hiring platform connecting trusted corporate facilities, commercial compounds, and luxury private properties with verified, top-tier security guards. Like LinkedIn for experienced security professionals—discover certified guards with verified backgrounds tailored to your property.",
        heroExplore: "Explore Guard Network <span class=\"arrow-icon\">→</span>",
        heroCreate: "Create Account",
        statGuards: "Verified Guards",
        statEstates: "Hiring Estates",
        statTrust: "Vetting Trust",
        badgeGuards: "100% Vetted Guards",
        subtextNetwork: "Guard Staffing Network",
        drawerLabel: "Platform Directory",
        footerTagline: "The premier professional networking & staffing platform connecting prestigious corporate estates, gated compounds, and luxury private properties with certified, vetted security guards and protection forces.",
        footerBadge: "100% Vetted & Background-Checked Guards",
        footerColLegal: "Guard Network & Legal",
        footerBrowse: "Browse Guard Directory",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service",
        footerVerify: "Guard Credential Verification",
        footerColSocial: "Connect With Us",
        footerSocialText: "Follow guard staffing announcements, placement updates, and estate security insights.",
        footerCopyright: "© 2026 ShieldNet. All rights reserved.",
        toastLogin: "Signed in (Demo Mode): all features unlocked",
        toastLogout: "Logged out: demo mode ended",
        toastLang: "Language changed to English"
    },
    ar: {
        langToggle: "English",
        navHome: "الرئيسية",
        navCompanies: "تصفح شركات الأمن",
        navServices: "الخدمات",
        navAbout: "عن المنصة",
        navRequests: "طلباتي",
        navTerms: "الشروط والأحكام",
        navContact: "تواصل معنا",
        navSignIn: "تسجيل الدخول",
        navLogOut: "تسجيل الخروج",
        navSignUp: "إنشاء حساب",
        navProfile: "الملف الشخصي",
        heroTitle: "نخبة حراس الأمن <br />للشركات والمنشآت الراقية",
        heroDesc: "المنصة المهنية الرائدة للتوظيف والربط الأمني، تجمع كبرى المنشآت والشركات والمجمعات الراقية مع نخبة حراس الأمن المعتمدين والموثقين جنائياً ومهنياً. شبكة احترافية متكاملة لاختيار الكفاءات الأمنية الأنسب لمنشأتك.",
        heroExplore: "استكشف شبكة الحراس <span class=\"arrow-icon\">←</span>",
        heroCreate: "إنشاء حساب",
        statGuards: "حراس موثقون",
        statEstates: "منشآت متعاقدة",
        statTrust: "نسبة التدقيق",
        badgeGuards: "حراس معتمدون ومفحوصون 100%",
        subtextNetwork: "شبكة التوظيف الأمني",
        drawerLabel: "دليل المنصة",
        footerTagline: "المنصة المهنية المعتمدة لتوظيف الكفاءات الأمنية والربط بين المنشآت الحيوية والمجمعات الخاصة وحراس الأمن المعتمدين وفِرق الحماية.",
        footerBadge: "حراس معتمدون ومفحوصون أمنياً بنسبة 100%",
        footerColLegal: "الشبكة الأمنية والشروط",
        footerBrowse: "تصفح دليل الحراس",
        footerPrivacy: "سياسة الخصوصية",
        footerTerms: "شروط الخدمة",
        footerVerify: "التحقق من المؤهلات الأمنية",
        footerColSocial: "تواصل معنا",
        footerSocialText: "تابع مستجدات التوظيف الأمني وإعلانات التعاقدات وتحديثات حماية المنشآت.",
        footerCopyright: "© 2026 ShieldNet. جميع الحقوق محفوظة.",
        toastLogin: "تم تسجيل الدخول (وضع تجريبي): تم تفعيل المزايا",
        toastLogout: "تم تسجيل الخروج بنجاح",
        toastLang: "تم تحويل لغة الموقع إلى العربية"
    }
};

function getLanguage() {
    try {
        const saved = localStorage.getItem(LANG_KEY);
        if (saved === "ar" || saved === "en") return saved;
    } catch (e) {
        // ignore
    }
    return "en";
}

function setLanguage(lang, triggerToast = false) {
    const validLang = lang === "ar" ? "ar" : "en";
    try {
        localStorage.setItem(LANG_KEY, validLang);
    } catch (e) {
        // ignore
    }

    document.documentElement.lang = validLang;
    document.body.classList.toggle("lang-ar", validLang === "ar");

    const dict = TRANSLATIONS[validLang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict && dict[key]) {
            if (el.hasAttribute("data-i18n-html")) {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });

    document.querySelectorAll(".lang-label").forEach((el) => {
        el.textContent = dict.langToggle;
    });

    applyAuthUI();

    if (triggerToast && typeof window.ShieldNetShowToast === "function") {
        window.ShieldNetShowToast(dict.toastLang);
    }
}

function toggleLanguage() {
    const next = getLanguage() === "ar" ? "en" : "ar";
    setLanguage(next, true);
}

/* =============================================================
   1. AUTH - Shared demo mode (runs on every page)
   ============================================================= */
const SESSION_KEY = "shieldnet_demo_session";
const LOGIN_URL = "/login.html";
const HOME_URL = "/";

function getSession() {
    try {
        const raw = localStorage.getItem(SESSION_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (err) {
        return null;
    }
}

function isLoggedIn() {
    return !!getSession();
}

function startSession(data = {}) {
    const session = { demo: true, name: "Demo User", startedAt: Date.now(), ...data };
    try {
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } catch (err) {
        console.warn("[ShieldNet] Could not persist demo session:", err);
    }
    return session;
}

function endSession() {
    try {
        localStorage.removeItem(SESSION_KEY);
    } catch (err) {
        console.warn("[ShieldNet] Could not clear demo session:", err);
    }
}

// Updates every auth-aware element on the current page
function applyAuthUI() {
    const on = isLoggedIn();
    const lang = getLanguage();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    document.body.classList.toggle("demo-on", on);

    document.querySelectorAll('[data-auth="locked"]').forEach((el) => {
        el.classList.toggle("is-locked", !on);
    });
    document.querySelectorAll('[data-auth="signin"]').forEach((el) => {
        el.textContent = on ? dict.navLogOut : dict.navSignIn;
    });
    document.querySelectorAll('[data-auth="signup"]').forEach((el) => {
        el.textContent = on ? dict.navProfile : dict.navSignUp;
    });
}

// Lets page sections (e.g. HOME) react: show a toast, close menus, ...
function emitAuthEvent(type) {
    document.dispatchEvent(new CustomEvent("shieldnet:auth", { detail: { type } }));
}

// Capture phase: runs before any other click handler on the page
document.addEventListener(
    "click",
    (e) => {
        const el = e.target.closest("[data-auth]");
        if (!el) return;

        const kind = el.dataset.auth;
        if (kind !== "signin" && kind !== "signup" && kind !== "locked") return;

        e.preventDefault();
        e.stopPropagation();

        if (kind === "signin") {
            if (isLoggedIn()) {
                endSession();
                applyAuthUI();
                emitAuthEvent("logout");
            } else {
                startSession();
                applyAuthUI();
                emitAuthEvent("login");
            }
            return;
        }

        // signup + locked
        if (isLoggedIn()) {
            window.location.hash = "#"; // temporary destination
            emitAuthEvent("navigate");
        } else {
            window.location.href = LOGIN_URL;
        }
    },
    true
);

// Keep tabs in sync and handle back/forward cache restores
window.addEventListener("storage", (e) => {
    if (e.key === SESSION_KEY || e.key === null) applyAuthUI();
    if (e.key === LANG_KEY) setLanguage(getLanguage());
});
window.addEventListener("pageshow", () => {
    applyAuthUI();
    setLanguage(getLanguage());
});

applyAuthUI();
setLanguage(getLanguage());

/* =============================================================
   2. HOME - index.html
   ============================================================= */
(function initHomePage() {
    function start() {
        // Only run on the home page
        if (!document.querySelector(".hero-container")) return;

        /* ----- DOM references ----- */
        const policyModal = document.getElementById("policy-modal");
        const policyTitle = document.getElementById("policy-modal-title");
        const policyContent = document.getElementById("policy-modal-content");

        const mobileDrawer = document.getElementById("mobile-nav-drawer");
        const drawerBackdrop = document.getElementById("mobile-drawer-backdrop");
        const mobileMenuBtn = document.getElementById("mobile-menu-btn");

        const toastEl = document.getElementById("action-toast");
        const toastMessage = document.getElementById("toast-message");
        let toastTimeout = null;
        let lastFocusedElement = null;
        let lastModalActionTime = 0;

        const policyTexts = {
            en: {
                privacy: {
                    title: "Privacy & Guard Vetting Policy",
                    html: "<p>At ShieldNet, candidate confidentiality and client property security are paramount. Guard background checks, identification records, and hiring estate discussions remain strictly protected and confidential.</p>"
                },
                terms: {
                    title: "Security Guard Staffing Terms",
                    html: "<p>ShieldNet operates as a premier professional network connecting verified physical security guards and protection officers with commercial estates and private properties. All candidates undergo credential auditing before deployment.</p>"
                }
            },
            ar: {
                privacy: {
                    title: "سياسة الخصوصية والتدقيق الأمني",
                    html: "<p>في ShieldNet، خصوصية المرشحين وأمن منشآت العملاء في مقدمة أولوياتنا. تظل سجلات الفحص الأمني والتحقق من الهوية ومفاوضات التعاقد سرية ومحمية بالكامل.</p>"
                },
                terms: {
                    title: "شروط التوظيف والتعاقد الأمني",
                    html: "<p>تعمل ShieldNet كمنصة مهنية رائدة تربط بين حراس الأمن المعتمدين وفِرق الحماية المؤهلة مع المنشآت التجارية والمجمعات السكنية. يخضع جميع الحراس لتدقيق مهني صارم قبل الاعتماد.</p>"
                }
            }
        };

        /* ----- Helpers: toast, modal, drawer ----- */
        function showToast(message, duration = 3200) {
            if (!toastEl || !toastMessage) return;
            toastMessage.textContent = message;
            toastEl.classList.add("is-visible");
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => toastEl.classList.remove("is-visible"), duration);
        }

        window.ShieldNetShowToast = showToast;

        function openModal(modalEl) {
            if (!modalEl) return;
            lastFocusedElement = document.activeElement;
            lastModalActionTime = Date.now();
            modalEl.classList.add("is-active");
            modalEl.setAttribute("aria-hidden", "false");
            document.body.classList.add("modal-open");
            const closeBtn = modalEl.querySelector(".modal-close-btn");
            if (closeBtn) closeBtn.focus();
        }

        function closeModal(modalEl) {
            if (!modalEl) return;
            // Guard against accidental double-tap synthetic closures
            if (Date.now() - lastModalActionTime < 180) return;
            modalEl.classList.remove("is-active");
            modalEl.setAttribute("aria-hidden", "true");
            if (!document.querySelector(".custom-modal.is-active")) {
                document.body.classList.remove("modal-open");
            }
            if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
                lastFocusedElement.focus();
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

        /* ----- ButtonActionManager ----- */
        const ButtonActionManager = {
            handlers: {
                "modal:open-policy": (target) => {
                    const policyKey = target.getAttribute("data-policy") || "privacy";
                    const currentLang = getLanguage();
                    const langPack = policyTexts[currentLang] || policyTexts.en;
                    if (langPack[policyKey]) {
                        if (policyTitle) policyTitle.textContent = langPack[policyKey].title;
                        if (policyContent) policyContent.innerHTML = langPack[policyKey].html;
                    }
                    closeMobileDrawer();
                    openModal(policyModal);
                },
                "modal:close-policy": () => closeModal(policyModal),
                "modal:close-all": () => closeAllModals(),

                "nav:toggle-drawer": () => (isDrawerOpen() ? closeMobileDrawer() : openMobileDrawer()),
                "nav:open-drawer": () => openMobileDrawer(),
                "nav:close-drawer": () => closeMobileDrawer(),
                "nav:home": () => {
                    closeMobileDrawer();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                },

                "action:toggle-lang": () => {
                    toggleLanguage();
                },

                // Temporary destination: #
                "action:explore-guards": () => {
                    closeMobileDrawer();
                    window.location.hash = "#";
                }
            },

            registerAction(actionKey, handler) {
                if (typeof handler === "function") this.handlers[actionKey] = handler;
            },

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
                console.warn(`[ButtonActionManager] No handler registered for: '${actionKey}'`);
                return false;
            },

            resolveAction(element) {
                if (!element) return null;

                const explicitAction = element.getAttribute("data-action");
                if (explicitAction) return explicitAction;

                if (element.hasAttribute("data-close-policy")) return "modal:close-policy";
                if (element.hasAttribute("data-open-policy")) return "modal:open-policy";

                if (element.classList.contains("nav-lang-btn") || element.classList.contains("drawer-lang-btn")) return "action:toggle-lang";
                if (element.classList.contains("mobile-menu-btn")) return "nav:toggle-drawer";
                if (element.classList.contains("drawer-close-btn")) return "nav:close-drawer";
                if (element.classList.contains("mobile-drawer-backdrop")) return "nav:close-drawer";
                if (element.classList.contains("btn-explore")) return "action:explore-guards";

                return null;
            }
        };

        window.ButtonActionManager = ButtonActionManager;
        window.ShieldNetDispatch = (actionKey, el) => ButtonActionManager.dispatch(actionKey, el);

        /* ----- Events ----- */
        // Buttons marked data-auth are handled by the AUTH section and never reach this.
        document.addEventListener(
            "click",
            (e) => {
                const clickable = e.target.closest(
                    "[data-action], button, .btn, .nav-link, .drawer-link, .mobile-menu-btn, [data-open-policy], [data-close-policy]"
                );
                if (!clickable) return;

                const actionKey = ButtonActionManager.resolveAction(clickable);
                if (actionKey) {
                    e.preventDefault();
                    e.stopPropagation();
                    ButtonActionManager.dispatch(actionKey, clickable, e);
                }
            },
            { passive: false }
        );

        // Feedback from the AUTH section (sign in / log out / navigate)
        document.addEventListener("shieldnet:auth", (e) => {
            closeMobileDrawer();
            const type = e.detail && e.detail.type;
            if (type === "login") showToast("Signed in (Demo Mode): all features unlocked");
            if (type === "logout") showToast("Logged out: demo mode ended");
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                ButtonActionManager.dispatch("modal:close-all");
                ButtonActionManager.dispatch("nav:close-drawer");
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 992 && isDrawerOpen()) closeMobileDrawer();
        });

        /* ----- Smooth number counters ----- */
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
                    if (node && node.nodeType === Node.TEXT_NODE) node.nodeValue = current;
                });
            };

            const updateCounters = (currentTime) => {
                const progress = Math.min((currentTime - startTime) / duration, 1);
                render(progress);
                if (progress < 1) requestAnimationFrame(updateCounters);
            };

            if (reduceMotion) render(1);
            else requestAnimationFrame(updateCounters);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }
})();

/* =============================================================
   3. LOGIN - login.html (create account / sign in)
   ============================================================= */
(function initLoginPage() {
    function start() {
        const form = document.getElementById("auth-form");
        // Only run on the login page
        if (!form) return;

        // Already in demo mode -> nothing to do here
        if (isLoggedIn()) {
            window.location.replace(HOME_URL);
            return;
        }

        const title = document.getElementById("auth-title");
        const subtitle = document.getElementById("auth-subtitle");
        const submitBtn = document.getElementById("auth-submit");
        const errorEl = document.getElementById("auth-error");
        const tabs = document.querySelectorAll(".auth-tab");
        const signupOnly = document.querySelectorAll('[data-only="signup"]');
        const nameInput = document.getElementById("auth-name");
        const emailInput = document.getElementById("auth-email");
        const passInput = document.getElementById("auth-password");
        const roleInput = document.getElementById("auth-role");

        const copy = {
            signup: {
                title: "Create Your Account",
                subtitle: "Join Egypt's verified security network. This is a demo: no real data is sent anywhere.",
                button: "Confirm & Continue",
                autocomplete: "new-password",
                page: "Create Account"
            },
            signin: {
                title: "Welcome Back",
                subtitle: "Sign in to continue. This is a demo: any valid email and password will work.",
                button: "Sign In",
                autocomplete: "current-password",
                page: "Sign In"
            }
        };

        let mode = "signup";
        let submitting = false;

        function setMode(next) {
            mode = next;
            const c = copy[mode];
            title.textContent = c.title;
            subtitle.textContent = c.subtitle;
            submitBtn.textContent = c.button;
            passInput.setAttribute("autocomplete", c.autocomplete);
            signupOnly.forEach((el) => el.classList.toggle("is-hidden", mode !== "signup"));
            tabs.forEach((tab) => {
                const active = tab.dataset.mode === mode;
                tab.classList.toggle("is-active", active);
                tab.setAttribute("aria-selected", String(active));
            });
            document.title = `${c.page} | ShieldNet`;
            errorEl.textContent = "";
        }

        function validate() {
            if (mode === "signup" && nameInput.value.trim().length < 2) {
                nameInput.focus();
                return "Please enter your full name.";
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
                emailInput.focus();
                return "Please enter a valid email address.";
            }
            if (passInput.value.length < 6) {
                passInput.focus();
                return "Password must be at least 6 characters.";
            }
            return "";
        }

        tabs.forEach((tab) => tab.addEventListener("click", () => setMode(tab.dataset.mode)));

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (submitting) return;

            const problem = validate();
            if (problem) {
                errorEl.textContent = problem;
                return;
            }
            errorEl.textContent = "";

            const email = emailInput.value.trim();
            const name = mode === "signup" ? nameInput.value.trim() : email.split("@")[0];

            // Same demo session the Sign In button creates -> everything unlocks on the home page
            startSession({ name, email, role: mode === "signup" ? roleInput.value : "client" });

            submitting = true;
            submitBtn.disabled = true;
            submitBtn.textContent = "✓ Confirmed, redirecting…";
            setTimeout(() => window.location.assign(HOME_URL), 700);
        });

        if (new URLSearchParams(window.location.search).get("mode") === "signin") {
            setMode("signin");
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }
})();
