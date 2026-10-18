// ShieldNet - session.js
// Demo-mode session persisted in the device's localStorage (shared by all pages)

export const SESSION_KEY = "shieldnet_demo_session";

export function getSession() {
    try {
        const raw = localStorage.getItem(SESSION_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (err) {
        return null;
    }
}

export function startSession(data = {}) {
    const session = { demo: true, name: "Demo User", startedAt: Date.now(), ...data };
    try {
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } catch (err) {
        console.warn("[ShieldNet] Could not persist demo session:", err);
    }
    return session;
}

export function endSession() {
    try {
        localStorage.removeItem(SESSION_KEY);
    } catch (err) {
        console.warn("[ShieldNet] Could not clear demo session:", err);
    }
}
