import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import useAuthStore from '../../../../../src/state/authStore';
import '../css/MemberLoginPage.css';

function MemberLoginPage() {
    const [formData, setFormData] = useState({ userId: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { setToken } = useAuthStore(); // Zustand 스토어의 상태와 메서드 가져오기

    // 입력값 변경 처리
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // 로그인 처리 함수
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || '로그인 실패');
            }

            const data = await response.json();

            // JWT 디코딩
            const decodedToken = jwtDecode(data.token);
            const expiryTime = decodedToken.exp * 1000; // 만료 시간 (밀리초)

            // Zustand에 토큰 저장
            setToken(data.token, expiryTime);

            alert('로그인 성공!');
            navigate('/'); // 홈 페이지로 이동
        } catch (error) {
            setErrorMessage(error.message || '로그인 요청 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className="login-page">
            <h1>로그인</h1>

            {/* 오류 메시지 표시 */}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <div className="login-form">
                <input
                    type="text"
                    name="userId"
                    placeholder="아이디를 입력하세요"
                    value={formData.userId}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호를 입력하세요"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button
                    id="login-button"
                    onClick={handleLogin}
                    className="custom-login-button"
                >
                    로그인
                </button>
            </div>

            <div className="login-options">
                <p>
                    <button
                        onClick={() => alert('아이디 찾기x')}
                        className="btn-link"
                    >
                        아이디 찾기
                    </button>
                    {' '}
                    /{' '}
                    <button
                        onClick={() => alert('비번 찾기x')}
                        className="btn-link"
                    >
                        비밀번호 찾기
                    </button>
                    {' '}
                    /{' '}
                    <button
                        onClick={() => navigate('/terms')}
                        className="btn-link"
                    >
                        회원가입
                    </button>
                </p>
            </div>
        </div>
    );
}

export default MemberLoginPage;
