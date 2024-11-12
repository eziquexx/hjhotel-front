//24.11.12 지은 [완료] : PaymentContent 테스트
export default function PaymentContent() {
  return (
    <div>
      <h1>예약 결제</h1>
      <div>
        <h2>선택 객실 목록</h2>
        <div>
          <table>
            <tr>
              <th>객실명</th>
              <th>이용일</th>
              <th>인원</th>
              <th>결제금액</th>
            </tr>
            <tr>
              <td>디럭스룸</td>
              <td>2024-11-11</td>
              <td>성인 2/아동 0/유아 0</td>
              <td>200,000원</td>
            </tr>
          </table>
          <div>
            <ul>
              <li>총 금액</li>
              <li>200,000원</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2>약관동의</h2>
        <div></div>
      </div>
    </div>
  );
}
