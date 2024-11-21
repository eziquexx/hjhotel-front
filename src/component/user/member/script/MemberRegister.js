import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonEx from '../../../common/ButtonEx'; // 사용자 정의 버튼 컴포넌트
import '../css/MemberRegister.css';

const MemberRegister = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        phone: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate(); // 페이지 이동을 위한 hook

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 비밀번호 확인 검증
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    name: formData.name,
                    phone: formData.phone,
                }),
            });

            if (!response.ok) {
                throw new Error('회원가입에 실패했습니다.');
            }

            const result = await response.json(); // JSON 응답 처리
            setSuccessMessage(result.message); // 서버에서 반환한 메시지 표시
            setErrorMessage('');

            // 서버에서 제공한 리다이렉트 URL로 이동
            navigate(result.redirectUrl);
        } catch (error) {
            setErrorMessage(error.message); // 에러 메시지 표시
        }
    };

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <h2>회원가입</h2>

            {/* 에러 메시지 */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}

            {/* 이메일 입력 */}
            <div className="form-group">
                <label htmlFor="email">이메일*</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="사용할 이메일을 입력하세요"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* 비밀번호 입력 */}
            <div className="form-group">
                <label htmlFor="password">비밀번호*</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="비밀번호를 입력하세요"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="비밀번호를 다시 입력하세요"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* 이름 입력 */}
            <div className="form-group">
                <label htmlFor="name">이름*</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="이름을 입력하세요"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* 연락처 입력 */}
            <div className="form-group">
                <label htmlFor="phone">연락처*</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="연락처를 입력하세요"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>

            <ButtonEx id="registerSubmit" type="submit">
                가입 완료
            </ButtonEx>
        </form>
    );
};

export default MemberRegister;
