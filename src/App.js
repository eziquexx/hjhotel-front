import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserIndex from "./pages/UserIndex";
import AdminIndex from "./pages/AdminIndex";
import PaymentPage from "./component/PaymentPage";
import AboutPage from "./component/AboutPage";

//24.11.12 지은 [완료] : Router, Routes, Route 적용 테스트
function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<UserIndex />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/admin" element={<AdminIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
