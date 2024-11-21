import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 useNavigate 훅
import ButtonEx from '../../../common/ButtonEx';
import '../css/MemberLoginPage.css';

function MemberLoginPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // 페이지 이동

    // 입력값 변경 처리
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // 로그인 버튼 클릭 시 실행되는 함수
    const handleLogin = async () => {
        try {
            // 백엔드 로그인 API 호출
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // 로그인 성공
                alert('로그인 성공!');
                navigate('/'); // 홈으로 이동
            } else {
                // 로그인 실패
                const errorText = await response.text();
                setErrorMessage(errorText); // 백엔드에서 반환된 에러 메시지 출력
            }
        } catch (error) {
            // 네트워크 오류 등 예외 처리
            setErrorMessage('로그인 요청 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className="login-page">
            <h1>로그인</h1>

            <p>잘바즈 회원은 가입 없이 이용할 수 있습니다.</p>
            <p>//🫵🏼 당신은 아닙니다!!!! </p>

            {/* 오류 메시지 표시 */}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <div className="login-form">
                <input
                    type="text"
                    name="email"
                    placeholder="이메일 넣어라!!"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호를 입력하던가 말던가"
                    value={formData.password}
                    onChange={handleChange}
                />
                <ButtonEx id="login-button" action={handleLogin}>
                    로그인
                </ButtonEx>
            </div>

            <div className="login-options">
                <label>
                    {/*<input type="checkbox" /> 아이디 또는 리워즈 번호 저장*/}
                </label>
                <p>아이디 찾기 / 비밀번호 찾기 / 회원가입</p>
            </div>

            {/*<ButtonEx id="sns-login" action={() => alert("카카오톡 로그인")}>*/}
            {/*    가라 카카오톡 아이콘*/}
            {/*</ButtonEx>*/}
        </div>
    );
}

export default MemberLoginPage;
