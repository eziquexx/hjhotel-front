import { create } from 'zustand'; // 기본 내보내기 대신 명시적으로 가져오기
import { devtools } from 'zustand/middleware';

const useAuthStore = create(
    devtools((set, get) => ({
        token: null,
        expiry: null,
        setToken: (newToken, expiryTime) => {
            console.log("Setting token in Zustand:", newToken, "Expiry:", expiryTime);
            set({ token: newToken, expiry: expiryTime }, false, 'auth/setToken');
        },

        clearToken: () => set({ token: null, expiry: null }, false, 'auth/clearToken'),
        isTokenValid: () => {
            const { token, expiry } = get();
            if (!token || !expiry) return false;
            return Date.now() < expiry;
        },
    }))
);

export default useAuthStore;
