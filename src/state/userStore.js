// src/state/userStore.js
import { create } from 'zustand';

const useUserStore = create((set) => ({
    userInfo: null, // 사용자 정보

    // 사용자 정보 설정
    setUserInfo: (info) => set({ userInfo: info }),

    // 사용자 정보 초기화
    clearUserInfo: () => set({ userInfo: null }),
}));

export default useUserStore;
