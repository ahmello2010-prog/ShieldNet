// ShieldNet - script.js
// Centralized Action Manager + persistent Demo Mode (sign in / create account / log out)

import { SESSION_KEY, getSession, startSession, endSession } from "./session.js";

(function initShieldNet() {
    function start() {
        /* ========================================================
           1. DOM References and State
           ======================================================== */
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

        // Every button that is locked until the user enters Demo Mode
        const lockableEls = document.querySelectorAll('[data-action="nav:locked-portal"]');
        // Sign In / Log Out buttons and Create Account / Check Your Profile buttons
        const signInEls = document.querySelectorAll('[data-auth="signin"]');
        const signUpEls = document.querySelectorAll('[data-auth="signup"]');

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
           2. Demo Mode (persisted in localStorage)
           ======================================================== */
        function isDemoMode() {
            return !!getSession();
        }

        // Single source of truth: reads the saved session and updates the whole UI
        function applyAuthState() {
            const on = isDemoMode();
            document.body.classList.toggle("demo-on", on);

            lockableEls.forEach((el) => {
                el.classList.toggle("is-locked", !on);
                if (on) {
                    el.removeAttribute("aria-haspopup");
                } else {
                    el.setAttribute("aria-haspopup", "dialog");
                }
            });

            signInEls.forEach((el) => {
                el.textContent = on ? "Log Out" : "Sign In";
            });

            signUpEls.forEach((el) => {
                el.textContent = on ? "Check Your Profile" : "Create Account";
            });
        }

        function enableDemoMode() {
            startSession();
            applyAuthState();
        }

        function disableDemoMode() {
            endSession();
            applyAuthState();
        }

        /* ========================================================
           3. Helper Functions (Modals, Toasts, Drawer)
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

        // Temporary destination for every unlocked button
        function goToPlaceholder() {
            closeMobileDrawer();
            window.location.hash = "#";
        }

        /* ========================================================
           4. ButtonActionManager (Categorized Master Dispatcher)
           ======================================================== */
        const ButtonActionManager = {
            handlers: {
                /* ----- Modal Actions ----- */
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
                // Locked portals: go to the login page, or to # once Demo Mode is on
                "nav:locked-portal": () => {
                    closeMobileDrawer();
                    if (isDemoMode()) {
                        window.location.hash = "#";
                        return;
                    }
                    window.location.href = "/login.html";
                },

                /* ----- Interactive Platform Actions ----- */
                "action:explore-guards": () => {
                    goToPlaceholder();
                },
                // Create Account -> login page  |  Check Your Profile -> # (temporary)
                "action:create-account": () => {
                    closeMobileDrawer();
                    if (isDemoMode()) {
                        window.location.hash = "#";
                        return;
                    }
                    window.location.href = "/login.html";
                },
                // Sign In -> starts Demo Mode  |  Log Out -> resets everything
                "action:sign-in": () => {
                    closeMobileDrawer();
                    if (isDemoMode()) {
                        disableDemoMode();
                        showToast("Logged out: demo mode ended");
                    } else {
                        enableDemoMode();
                        showToast("Signed in (Demo Mode): all features unlocked");
                    }
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

                console.warn(`[ButtonActionManager] No handler registered for: '${actionKey}'`);
                return false;
            },

            resolveAction(element) {
                if (!element) return null;

                const explicitAction = element.getAttribute("data-action");
                if (explicitAction) return explicitAction;

                if (element.hasAttribute("data-close-policy")) return "modal:close-policy";
                if (element.hasAttribute("data-open-policy")) return "modal:open-policy";

                if (element.classList.contains("mobile-menu-btn")) return "nav:toggle-drawer";
                if (element.classList.contains("drawer-close-btn")) return "nav:close-drawer";
                if (element.classList.contains("mobile-drawer-backdrop")) return "nav:close-drawer";
                if (element.classList.contains("is-locked")) return "nav:locked-portal";
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
           5. Master Event Delegation (Touch & Click Support)
           ======================================================== */
        document.addEventListener(
            "click",
            (e) => {
                const clickable = e.target.closest(
                    "[data-action], button, .btn, .nav-link, .drawer-link, .mobile-menu-btn, .mobile-fixed-cta, [data-open-policy], [data-close-policy]"
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

        // Keep every open tab in sync (log in/out in one tab updates the others)
        window.addEventListener("storage", (e) => {
            if (e.key === SESSION_KEY || e.key === null) applyAuthState();
        });

        // Coming back from login.html via the browser's back/forward cache
        window.addEventListener("pageshow", applyAuthState);

        /* ========================================================
           6. Smooth Number Counters
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

        /* ========================================================
           7. Initial state: restore a saved Demo Mode session
           ======================================================== */
        applyAuthState();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }
})();
