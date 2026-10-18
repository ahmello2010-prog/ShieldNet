// ShieldNet - script.js
// Centralized Action Manager and Event Architecture with Interactive Mock Login

(function initShieldNet() {
    function start() {
        /* ========================================================
           1. DOM References and State
           ======================================================== */
        const loginModal = document.getElementById("login-modal");
        const loginModalTitle = document.getElementById("login-modal-title");
        const loginModalDesc = document.getElementById("login-modal-desc");
        const modalSubmitCta = document.getElementById("modal-submit-cta");
        const modalCancelCta = document.getElementById("modal-cancel-cta");
        const policyModal = document.getElementById("policy-modal");
        const policyTitle = document.getElementById("policy-modal-title");
        const policyContent = document.getElementById("policy-modal-content");

        const mobileDrawer = document.getElementById("mobile-nav-drawer");
        const drawerBackdrop = document.getElementById("mobile-drawer-backdrop");
        const mobileMenuBtn = document.getElementById("mobile-menu-btn");
        const mobileFixedCta = document.querySelector(".mobile-fixed-cta");

        const toastEl = document.getElementById("action-toast");
        const toastMessage = document.getElementById("toast-message");
        let toastTimeout = null;
        let lastFocusedElement = null;

        // Mock Login State (Demo Session)
        let isDemoLoggedIn = false;

        // Demo portal data for unlocked exploration in mock mode
        const demoPortalData = {
            "Guard Profiles": {
                title: "Guard Profiles (Demo Preview)",
                desc: "Connected to verified officer registry: 14,250 certified candidates available for corporate facilities, residential compounds, and private estates across Egypt.",
                actionLabel: "Filter Profiles (Demo)"
            },
            "Job Quotes": {
                title: "Job Quotes (Demo Preview)",
                desc: "Active hiring requests: 1,280 estates requesting competitive security deployment proposals across corporate facilities and luxury estates.",
                actionLabel: "Review Quotes (Demo)"
            },
            "Client Portal": {
                title: "Client Portal (Demo Preview)",
                desc: "Estate Management Console: 24/7 post logs, guard check-ins, shift rotations, and live incident reporting logs.",
                actionLabel: "View Console (Demo)"
            },
            "Guard Agencies": {
                title: "Guard Agencies (Demo Preview)",
                desc: "Partner Agency Directory: 48 licensed security contractor agencies with verified compliance records and insurance audits.",
                actionLabel: "Browse Agencies (Demo)"
            },
            "Admin Portal": {
                title: "Admin Portal (Demo Preview)",
                desc: "Platform Governance: Verification queue, officer background checks, and clearance level accreditation console.",
                actionLabel: "Open Admin Tools (Demo)"
            }
        };

        // Vetting and staffing policies content
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
           2. Helper Functions (Modals, Toasts, Drawer)
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
            lastFocusedElement = document.activeElement;
            lastModalActionTime = Date.now();
            modalEl.classList.add("is-active");
            modalEl.setAttribute("aria-hidden", "false");
            document.body.classList.add("modal-open");

            // Accessible focus placement
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
            // Restore focus
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

        function configureLoginModalForDemo(portalName) {
            if (!loginModalTitle || !loginModalDesc || !modalSubmitCta) return;

            if (isDemoLoggedIn) {
                // If user is already in demo session and clicks a locked portal
                if (portalName && demoPortalData[portalName]) {
                    const data = demoPortalData[portalName];
                    loginModalTitle.textContent = data.title;
                    loginModalDesc.textContent = data.desc;
                    modalSubmitCta.textContent = data.actionLabel;
                    modalSubmitCta.setAttribute("data-action", "modal:demo-action");
                    modalSubmitCta.setAttribute("data-portal-name", portalName);
                    if (modalCancelCta) modalCancelCta.textContent = "Close Preview";
                    return;
                }

                // If user clicks Sign In while already in demo session (Session info)
                loginModalTitle.textContent = "ShieldNet Demo Session";
                loginModalDesc.textContent =
                    "Active Demo Session: Signed in as Capt. Tarek Mansour (Verified CSO — ID #SN-84920-EGY). All portal features and candidate registries are available to explore in Demo Mode.";
                modalSubmitCta.textContent = "Sign Out (Demo)";
                modalSubmitCta.setAttribute("data-action", "modal:logout");
                if (modalCancelCta) modalCancelCta.textContent = "Close";
                return;
            }

            // Standard Sign In state (pre-login)
            if (portalName && portalName !== "Guard Network Access" && portalName !== "Guard Network Login") {
                loginModalTitle.textContent = `Access ${portalName}`;
                loginModalDesc.textContent = `Please sign in or start a Demo Session to view ${portalName} and access certified security guard profiles.`;
            } else {
                loginModalTitle.textContent = "Access Guard Network";
                loginModalDesc.textContent =
                    "Join Egypt's verified security personnel network. Start a Demo Session to explore experienced, background-checked security guards and estate recruitment tools.";
            }

            modalSubmitCta.textContent = "Sign In (Demo Mode)";
            modalSubmitCta.setAttribute("data-action", "modal:submit-access");
            if (modalCancelCta) modalCancelCta.textContent = "Maybe later";
        }

        /* ========================================================
           3. ButtonActionManager (Categorized Master Dispatcher)
           ======================================================== */
        const ButtonActionManager = {
            categories: {
                MODAL: "modal",
                NAVIGATION: "nav",
                ACTION: "action",
                CUSTOM: "custom"
            },

            handlers: {
                /* ----- Modal Actions ----- */
                "modal:open-login": (target) => {
                    const portal = target.getAttribute("data-portal") || "Guard Network Access";
                    configureLoginModalForDemo(portal);
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
                // Mock Login: Signs in as demo user and unlocks demo exploration
                "modal:submit-access": () => {
                    isDemoLoggedIn = true;
                    if (mobileFixedCta) {
                        mobileFixedCta.textContent = "Demo User ✓";
                        mobileFixedCta.setAttribute("data-portal", "Demo Session");
                    }
                    closeModal(loginModal);
                    showToast("Signed in (Demo Mode): Exploring ShieldNet features");
                },
                // Demo Logout: Resets session back to initial
                "modal:logout": () => {
                    isDemoLoggedIn = false;
                    if (mobileFixedCta) {
                        mobileFixedCta.textContent = "Sign In";
                        mobileFixedCta.setAttribute("data-portal", "Guard Network Login");
                    }
                    closeModal(loginModal);
                    showToast("Signed out of Demo Mode");
                },
                // Demo Action inside unlocked portal
                "modal:demo-action": (target) => {
                    const portalName = target.getAttribute("data-portal-name") || "Portal";
                    closeModal(loginModal);
                    showToast(`Demo Preview: Interacting with ${portalName}`);
                },
                "modal:close-all": () => {
                    closeAllModals();
                },

                /* ----- Navigation Actions ----- */
                "nav:toggle-drawer": () => {
                    if (isDrawerOpen()) {
                        closeMobileDrawer();
                    } else {
                        openMobileDrawer();
                    }
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
                    configureLoginModalForDemo(portal);
                    closeMobileDrawer();
                    openModal(loginModal);
                },

                /* ----- Interactive Platform Actions ----- */
                // زر Explore: ينتقل مؤقتاً إلى # دون فتح أي مودال
                "action:explore-guards": () => {
                    closeMobileDrawer();
                    window.location.hash = "#";
                },
                // زر Create Account: ينتقل مؤقتاً إلى # دون فتح أي مودال
                "action:create-account": () => {
                    closeMobileDrawer();
                    window.location.hash = "#";
                },
                // زر Sign In: ينتقل مؤقتاً إلى # دون فتح أي مودال
                "action:sign-in": () => {
                    closeMobileDrawer();
                    window.location.hash = "#";
                }
            },

            registerAction(actionKey, handler) {
                if (typeof handler === "function") {
                    this.handlers[actionKey] = handler;
                }
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

                if (actionKey.startsWith("modal:open-")) {
                    configureLoginModalForDemo("Guard Network Access");
                    openModal(loginModal);
                    return true;
                }

                console.warn(`[ButtonActionManager] No handler registered for: '${actionKey}'`);
                return false;
            },

            resolveAction(element) {
                if (!element) return null;

                const explicitAction = element.getAttribute("data-action");
                if (explicitAction) return explicitAction;

                if (element.hasAttribute("data-close-modal")) return "modal:close-login";
                if (element.hasAttribute("data-close-policy")) return "modal:close-policy";
                if (element.hasAttribute("data-open-policy")) return "modal:open-policy";
                if (element.hasAttribute("data-open-modal")) return "modal:open-login";

                if (element.classList.contains("mobile-menu-btn")) return "nav:toggle-drawer";
                if (element.classList.contains("drawer-close-btn")) return "nav:close-drawer";
                if (element.classList.contains("mobile-drawer-backdrop")) return "nav:close-drawer";
                if (element.classList.contains("is-locked")) return "nav:locked-portal";
                // تأكيد توجيه أزرار Sign In و Create Account و Explore لعدم فتح المودال
                if (element.classList.contains("mobile-fixed-cta")) return "action:sign-in";
                if (element.classList.contains("btn-register")) return "action:create-account";
                if (element.classList.contains("btn-drawer")) return "action:create-account";
                if (element.classList.contains("btn-explore")) return "action:explore-guards";

                return null;
            }
        };

        window.ButtonActionManager = ButtonActionManager;
        window.ShieldNetDispatch = (actionKey, el) => ButtonActionManager.dispatch(actionKey, el);

        /* ========================================================
           4. Master Event Delegation (Touch & Click Support)
           ======================================================== */
        document.addEventListener(
            "click",
            (e) => {
                const clickable = e.target.closest(
                    "[data-action], button, .btn, .nav-link, .drawer-link, .mobile-menu-btn, .mobile-fixed-cta, [data-open-policy], [data-close-modal], [data-close-policy]"
                );

                if (!clickable) return;

                const actionKey = ButtonActionManager.resolveAction(clickable);
                if (actionKey) {
                    // If it's an action that navigates to # (explore, create-account, or sign-in),
                    // we close any mobile drawer and navigate to # without opening modals.
                    if (
                        actionKey === "action:explore-guards" ||
                        actionKey === "action:create-account" ||
                        actionKey === "action:sign-in"
                    ) {
                        e.preventDefault();
                        ButtonActionManager.dispatch(actionKey, clickable, e);
                        window.location.hash = "#";
                        return;
                    }

                    e.preventDefault();
                    e.stopPropagation();
                    ButtonActionManager.dispatch(actionKey, clickable, e);
                }
            },
            { passive: false }
        );

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                ButtonActionManager.dispatch("modal:close-all");
                ButtonActionManager.dispatch("nav:close-drawer");
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 992 && isDrawerOpen()) {
                closeMobileDrawer();
            }
        });

        /* ========================================================
           5. Smooth Number Counters
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

            const updateCounters = (currentTime) => {
                const progress = Math.min((currentTime - startTime) / duration, 1);
                render(progress);
                if (progress < 1) requestAnimationFrame(updateCounters);
            };

            if (reduceMotion) {
                render(1);
            } else {
                requestAnimationFrame(updateCounters);
            }
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }
})();
