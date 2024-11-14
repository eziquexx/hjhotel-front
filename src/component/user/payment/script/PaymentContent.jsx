import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';


//24.11.15 지은 [진행중] : 체크박스 테스트 및 작업중
export default function PaymentContent() {

  // 체크박스의 선택 상태를 관리할 state
  const [checkbox, setCheckBoxes] = useState({
    checkbox1 : false,
    checkbox2 : false,
    checkbox3 : false,
    checkbox4 : false,
    checkbox5 : false,
  });

  // 전체 선택/해제 상태를 관리하는 state
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAllChange = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);

    setCheckBoxes({
      checkbox1: isChecked,
      checkbox2: isChecked,
      checkbox3: isChecked,
      checkbox4: isChecked,
      checkbox5: isChecked,
    })
  }

  useEffect(() => {
    // 만약에 ischecked가 아니면, 전체 선택 x
    
  })

  // useEffect(() => {
  //   if (selectAll == true) {
  //     // all checked
  //     setCheckBoxes({
  //       checkbox1: true,
  //       checkbox2: true,
  //       checkbox3: true,
  //       checkbox4: true,
  //       checkbox5: true,
  //     });
      

  //   } else {
  //     setCheckBoxes({
  //       checkbox1: false,
  //       checkbox2: false,
  //       checkbox3: false,
  //       checkbox4: false,
  //       checkbox5: false,
  //     });
  //   }
  // })

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setCheckBoxes(isChecked);
  }

  




  return (
    <div className="payment_container">
      <h1>예약 결제</h1>
      <div className="payment_selectRoomList">
        <h2>선택 객실 목록</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th>객실명</th>
                <th>이용일</th>
                <th>인원</th>
                <th>결제금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>디럭스룸</td>
                <td>2024-11-11</td>
                <td>성인 2/아동 0/유아 0</td>
                <td>200,000원</td>
              </tr>
            </tbody>
          </table>
          <div>
            <ul>
              <li>총 금액</li>
              <li>200,000원</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="payment_termsConditions">
        <h2>약관동의</h2>
        <div>
          <Form>
            {['checkbox'].map((type) => (
              <div key={type}>
                <Form.Check 
                  type={type}
                  label="전체 선택"
                  id="allCheckbox"
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                />
                <div>
                  <Form.Check 
                    type={type}
                    label="(필수) 이용시 유의사항에 동의"
                    id="checkbox1"
                    checked={checkbox.checkbox1}
                    onChange={handleCheckboxChange}
                  />
                  <Form.Check 
                    type={type}
                    label="(필수) 취소수수료(예약시점과 무관한 이용일 기준)에 동의"
                    id="checkbox2"
                    checked={checkbox.checkbox2}
                    onChange={handleCheckboxChange}
                  />
                  <Form.Check 
                    type={type}
                    label="(필수) 개인정보 수집 및 이용에 동의"
                    id="checkbox3"
                    checked={checkbox.checkbox3}
                    // onChange={handleCheckboxChange}
                  />
                  <Form.Check 
                    type={type}
                    label="(필수) 개인정보 제 3자제공의 동의"
                    id="checkbox4"
                    checked={checkbox.checkbox4}
                    // onChange={handleCheckboxChange}
                  />
                  <Form.Check 
                    type={type}
                    label="(필수) 이용자가 미성년자가 아니며 성인임에 동에"
                    id="checkbox5"
                    checked={checkbox.checkbox5}
                    // onChange={handleCheckboxChange}
                  />
                </div>

              </div>
            ))}
            
          </Form>
        </div>
      </div>
    </div>
  );
}
