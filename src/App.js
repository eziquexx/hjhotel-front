import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import FullScreenPage from "./pages/FullScreenPage";

//24.11.12 지은 [완료] : Router, Routes, Route 적용 테스트
function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<FullScreenPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
