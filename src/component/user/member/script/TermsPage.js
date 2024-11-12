// 24.11.12 성준[약관 동의 페이지] : 각 약관 동의를 개별적으로 처리하고, 모든 약관 동의 여부에 따라 '다음' 버튼 활성화
import React, { useState } from 'react';
import '../css/Member.css';

function TermsPage() {
    // 24.11.12 성준[상태 관리] : 각 약관 동의 상태를 저장하는 state
    const [terms, setTerms] = useState({
        all: false,        // 모든 약관 동의
        service: false,    // 서비스 이용 약관 동의
        privacy: false,    // 개인정보 수집 및 이용 동의
        marketing: false,  // 마케팅 정보 수신 동의 (선택 사항)
    });

    // 24.11.12 성준[이벤트 핸들러] : 체크박스 상태 업데이트
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setTerms((prevTerms) => {
            const newTerms = { ...prevTerms, [name]: checked };

            // '모두 동의'를 선택하면 모든 개별 약관 체크 상태도 동기화
            if (name === 'all') {
                return {
                    all: checked,
                    service: checked,
                    privacy: checked,
                    marketing: checked,
                };
            } else {
                // 개별 약관 중 하나라도 체크 해제되면 '모두 동의'는 해제
                newTerms.all = newTerms.service && newTerms.privacy && newTerms.marketing;
            }
            return newTerms;
        });
    };

    // 24.11.12 성준[검증] : 모든 필수 약관 동의 여부 확인
    const isAllChecked = terms.service && terms.privacy;

    return (
        <div className="terms-page">
            <h2>약관동의</h2>
            <p>롯데호텔 회원 약관에 동의하셔야 회원가입을 진행할 수 있습니다.</p>

            <div className="terms-checkbox">
                <label>
                    <input
                        type="checkbox"
                        name="all"
                        checked={terms.all}
                        onChange={handleCheckboxChange}
                    />
                    모두 동의합니다
                </label>
            </div>

            <div className="terms-checkbox">
                <label>
                    <input
                        type="checkbox"
                        name="service"
                        checked={terms.service}
                        onChange={handleCheckboxChange}
                    />
                    서비스 이용 약관 동의 (필수)
                </label>
            </div>

            <div className="terms-checkbox">
                <label>
                    <input
                        type="checkbox"
                        name="privacy"
                        checked={terms.privacy}
                        onChange={handleCheckboxChange}
                    />
                    개인정보 수집 및 이용 동의 (필수)
                </label>
            </div>

            <div className="terms-checkbox">
                <label>
                    <input
                        type="checkbox"
                        name="marketing"
                        checked={terms.marketing}
                        onChange={handleCheckboxChange}
                    />
                    마케팅 정보 수신 동의 (선택)
                </label>
            </div>

            <button
                onClick={() => alert("약관 동의가 완료되었습니다.")}
                disabled={!isAllChecked} // 필수 약관에 모두 동의해야 버튼 활성화
            >
                다음
            </button>
        </div>
    );
}

export default TermsPage;
