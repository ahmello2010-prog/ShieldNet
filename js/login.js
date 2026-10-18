// ShieldNet - login.js
// Demo create-account / sign-in page. On confirm, saves the demo session and returns home.

import { getSession, startSession } from "./session.js";

(function initAuthPage() {
    // Already in demo mode -> nothing to do here
    if (getSession()) {
        window.location.replace("/");
        return;
    }

    const form = document.getElementById("auth-form");
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

    let mode = "signup";
    let submitting = false;

    const copy = {
        signup: {
            title: "Create Your Account",
            subtitle: "Join Egypt's verified security network. This is a demo: no real data is sent anywhere.",
            button: "Confirm & Continue",
            autocomplete: "new-password"
        },
        signin: {
            title: "Welcome Back",
            subtitle: "Sign in to continue. This is a demo: any valid email and password will work.",
            button: "Sign In",
            autocomplete: "current-password"
        }
    };

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
        document.title = `${mode === "signup" ? "Create Account" : "Sign In"} | ShieldNet`;
        errorEl.textContent = "";
    }

    function validate() {
        const email = emailInput.value.trim();
        if (mode === "signup" && nameInput.value.trim().length < 2) {
            nameInput.focus();
            return "Please enter your full name.";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
        setTimeout(() => window.location.assign("/"), 700);
    });

    if (new URLSearchParams(window.location.search).get("mode") === "signin") {
        setMode("signin");
    }
})();
