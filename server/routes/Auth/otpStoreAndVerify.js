const otpStore = new Map();
const maxResendCount = 3;
const RESEND_WINDOW_MS = 15 * 60 * 1000; // 15 min window

export function saveOtp(email, otp) {
    const now = Date.now();
    const existing = otpStore.get(email);
    if (existing) {
        // Check if resend limit reached
        if (existing.resendCount >= maxResendCount && now - existing.firstRequest < RESEND_WINDOW_MS) {
            return false; // Resend limit reached
        }
    }

    otpStore.set(email, {otp, expires: now + 5 * 60 * 1000, resendCount: existing ? existing.resendCount + 1 : 0, firstRequest: existing ?  existing.firstRequest : now});
}

export function verifyOTP(email, otp) {
    const record = otpStore.get(email);
    if(!record) {
        return false;
    }
    if(record.expires < Date.now()) {
        otpStore.delete(email);
        return false;
    }
    if (record.otp !== otp) return false;
    otpStore.delete(email); // OTP used
    return true;
}

export function clearExpiredOtps() {
    const now = Date.now();
    for (const [email, record] of otpStore) {
        if (record.expires < now) otpStore.delete(email);
    }
}