import ButtonEx from "./ButtonEx";

//24.11.12 지은 [완료] : ButteonEx 적용 테스트.
export default function Header() {
  return (
    <div>
      <ButtonEx id={"home"} url={"/"}>
        <p>메인 홈</p>
      </ButtonEx>
      <ButtonEx id={"about"} url={"/about"}>
        <p>호텔소개</p>
      </ButtonEx>
      <ButtonEx id={"payment"} url={"/payment"}>
        <p>결제페이지</p>
      </ButtonEx>
    </div>
  );
}
