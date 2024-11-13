import React from 'react';
import ButtonEx from '../../../common/ButtonEx';
import '../css/MemberSignUpComplete.css';
import headImage from '../../../../assets/images/head.png';

function SignUpComplete() {
    return (
        <div className="signup-complete-page">
            <h1>가입 완료</h1>
            <div className="signup-steps">
                <span>1 약관 동의</span>
                <span>2 회원 정보 입력</span>
                <span>3 가입 완료</span>
            </div>

            <div className="rewards-card">
                <img src={headImage} alt="리워즈 카드" />
                <div className="user-info">
                    <p>이름: An Sungjune</p>
                    <p>회원 번호: RX00988</p>
                    <p>아이디: Headaehe</p>
                </div>
            </div>

            <p className="special-offer">리워즈 회원만의 특별한 혜택을 누려보세요</p>
            <div className="buttons">
                <ButtonEx id="home-button" action={() => alert("홈으로 이동")}>홈으로 이동</ButtonEx>
                <ButtonEx id="promo-button" action={() => alert("프로모션 보기")}>프로모션 보기</ButtonEx>
            </div>
        </div>
    );
}

export default SignUpComplete;