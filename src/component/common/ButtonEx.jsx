










































import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * 24.11.21 성준: 기존 ButtonEx 컴포넌트를 통합 및 확장
 * 추가된 기능:
 *    - url 속성 지원: useNavigate를 사용해 버튼 클릭 시 특정 경로로 이동 가능.
 *    - action이 우선 실행되며, 없을 경우 url로 이동.
 *    - type, className, children은 그대로 유지.
 *
 * 사용법:
 * 1. url만 사용: 버튼 클릭 시 해당 경로로 이동
 *    <ButtonEx id="home-button" url="/">홈으로 간다</ButtonEx>
 *
 * 2. action만 사용: 버튼 클릭 시 특정 동작 실행
 *    <ButtonEx id="action-button" action={() => alert('Clicked!')}>클릭!</ButtonEx>
 *
 * 3. action 후 이동: 동작 실행 후 명시적으로 useNavigate 호출
 *    <ButtonEx
 *        id="action-url-button"
 *        action={() => {
 *            console.log('동작 실행');
 *            nav("/path");
 *        }}
 *    >
 *        동작 후 이동
 *    </ButtonEx>
 */

function ButtonEx({ id, className, children, action = null, type = "button", url = "/" }) {
    const nav = useNavigate(); // URL 이동을 위한 useNavigate hook 추가

    /**
     * 24.11.21 성준: 버튼 클릭 시 동작 처리
     * action이 있으면 우선 실행.
     * action이 없고 url이 설정되었다면 해당 경로로 이동.
     */
    const handleClick = () => {
        if (action) {
            action(); // action이 있으면 실행
        } else if (url) {
            nav(url); // action이 없고 url이 있으면 경로 이동
        }
    };

    return (
        /**
         * 24.11.21 성준: 버튼 컴포넌트 반환
         * - id: 버튼의 고유 ID
         * - className: 스타일링을 위한 클래스 이름
         * - onClick: handleClick 함수 연결
         * - type: 기본값은 "button", 필요시 "submit" 등으로 변경 가능
         */
        <button id={id} className={className} onClick={handleClick} type={type}>
            {children}
        </button>
    );
}

export default ButtonEx;
