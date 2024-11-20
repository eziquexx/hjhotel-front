import React, { useState } from 'react';
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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

            const result = await response.json();

            if (response.ok) {
                setSuccessMessage(result.message);
                setErrorMessage('');
            } else {
                setErrorMessage(result.message);
                setSuccessMessage('');
            }
        } catch (error) {
            setErrorMessage('회원가입 요청 중 오류가 발생했습니다.');
            setSuccessMessage('');
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
