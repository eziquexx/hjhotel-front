import AdminHeader from "../component/common/AdminHeader";
import AdminContents from '../component/common/AdminContents';

const AdminContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
};

//24.11.14 지은 [완료] : 관리자 페이지 경로 테스트.
export default function AdminPage() {
  return (
    <div style={AdminContainerStyle}>
      <AdminHeader />
      <AdminContents />
    </div>
  );
}
