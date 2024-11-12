// 24.11.12 성준[회원 정보 입력 폼] : 사용자 정보 입력 폼으로 중복 확인 버튼과 필수 입력 안내 포함
import React, { useState } from 'react';
import ButtonEx from '../../../common/ButtonEx'; // 사용자 정의 버튼 컴포넌트
import '../css/RegisterForm.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        userId: '',
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        birthDate: '',
        contactNumber: '',
        termsAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기에서 폼 검증 및 제출 처리
        console.log("회원 가입 데이터:", formData);
    };

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <h2>회원 정보 입력</h2>

            {/* 아이디 입력 */}
            <div className="form-group">
                <label htmlFor="userId">아이디*</label>
                <input
                    type="text"
                    id="userId"
                    name="userId"
                    placeholder="사용할 아이디를 입력하세요"
                    value={formData.userId}
                    onChange={handleChange}
                    required
                />
                <ButtonEx action={() => alert('중복 확인')} id="userIdCheck">중복확인</ButtonEx>
            </div>

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
                <ButtonEx action={() => alert('중복 확인')} id="emailCheck">중복확인</ButtonEx>
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
                    placeholder="한번 더 같은 비밀번호를 입력하세요"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* 이름 입력 */}
            <div className="form-group">
                <label htmlFor="fullName">이름:</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="이름을 입력하세요"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />

            </div>

            {/* 생년월일 입력 */}
            <div className="form-group">
                <label htmlFor="birthDate">생년월일*</label>
                <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* 연락처 입력 */}
            <div className="form-group">
                <label htmlFor="contactNumber">연락처*</label>
                <select name="countryCode" onChange={handleChange} required>
                    <option value="82">대한민국(+82)</option>
                    {/* 추가 국가 코드 옵션 */}
                </select>
                <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="전화번호를 입력하세요"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                />
            </div>

            <ButtonEx type="submit" id="registerSubmit">가입 완료</ButtonEx>
        </form>
    );
};

export default RegisterForm;
