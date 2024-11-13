import React from 'react';
import ButtonEx from '../../../common/ButtonEx';
import '../css/MemberLoginPage.css';

function LoginPage() {
    return (
        <div className="login-page">
            <h1>로그인</h1>
            <ButtonEx id="rewards-login" action={() => alert("리워즈 로그인")}>리워즈 로그인</ButtonEx>
            <p>롯데호텔 리워즈 회원은 별도 가입 없이 이용할 수 있습니다.</p>

            <div className="login-form">
                <input type="text" placeholder="아이디 혹은 리워즈 번호를 입력하세요" />
                <input type="password" placeholder="비밀번호를 입력하세요" />
                <ButtonEx id="login-button" action={() => alert("로그인")}>로그인</ButtonEx>
            </div>

            <div className="login-options">
                <label>
                    <input type="checkbox" /> 아이디 또는 리워즈 번호 저장
                </label>
                <p>아이디 찾기 / 비밀번호 찾기 / 회원가입</p>
            </div>

            <ButtonEx id="sns-login" action={() => alert("카카오톡 로그인")}>
                카카오톡 아이콘
            </ButtonEx>
        </div>
    );
}

export default LoginPage;