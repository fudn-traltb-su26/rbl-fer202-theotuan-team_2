import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import SpecialtyList from './components/SpecialtyList';
import DoctorGrid from './components/DoctorGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="medcare-app">
      <Header />
      <Banner />
      
      {/* Vùng chuyên khoa */}
      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '10px', color: '#212529' }}>Chuyên Khoa Y Tế</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>Chọn chuyên khoa để tìm kiếm bác sĩ phù hợp</p>
        <SpecialtyList />
      </div>

      {/* Vùng danh sách bác sĩ */}
      <div style={{ padding: '40px 20px', textAlign: 'center', background: '#f8f9fa' }}>
        <h2 style={{ marginBottom: '10px', color: '#212529' }}>Đội Ngũ Bác Sĩ Nổi Bật</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>Các chuyên gia y tế hàng đầu sẵn sàng hỗ trợ bạn</p>
        <DoctorGrid />
      </div>

      <Footer />
    </div>
  );
}

export default App;