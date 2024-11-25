import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null, // JWT 토큰 초기 상태
    tokenExpiry: null,

};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload; // 토큰 저장
            state.tokenExpiry = action.payload.expiry;
        },
        clearToken(state) {
            state.token = null; // 토큰 삭제
            state.tokenExpiry = null;

        },
    },
});

export const { setToken, clearToken } = authSlice.actions; // 액션 생성기
export default authSlice.reducer; // 리듀서
