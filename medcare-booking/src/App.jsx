import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import SectionWrapper from './components/SectionWrapper';
import SpecialtyList from './components/SpecialtyList';
import DoctorGrid from './components/DoctorGrid';
import Footer from './components/Footer';
import doctor1 from './assets/buiquocdat.jpg';
import doctor2 from './assets/caoanhkhoa.jpg';
import doctor3 from './assets/dangphuc.jpg';
import doctor4 from './assets/dinhphuphuoc.jpg';

// MẢNG CƠ SỞ DỮ LIỆU ĐỘNG TUẦN 3 (Được bóc tách từ cấu trúc thiết kế db.json)
const CLINIC_SPECIALTIES = [
  { id: 1, name: 'Nội Tổng Quát', doctorCount: 3 },
  { id: 2, name: 'Nhi Khoa', doctorCount: 2 },
  { id: 3, name: 'Da Liễu', doctorCount: 2 },
  { id: 4, name: 'Tai Mũi Họng', doctorCount: 1 },
  { id: 5, name: 'Răng Hàm Mặt', doctorCount: 0 }
];

const CLINIC_DOCTORS = [
  {
    id: 1,
    name: 'BS. Bùi Quốc Đạt',
    specialty: 'Nội Tổng Quát',
    price: 300000,
    originalPrice: 400000,
    rating: 4.8,
    experience: '10 năm kinh nghiệm',
    avatar: doctor1,
    stock: 5
  },
  {
    id: 2,
    name: 'BS. Cao Anh Khoa',
    specialty: 'Nhi Khoa',
    price: 350000,
    originalPrice: 350000,
    rating: 4.9,
    experience: '8 năm kinh nghiệm',
    avatar: doctor2,
    stock: 2
  },
  {
    id: 3,
    name: 'BS. Đặng Phúc',
    specialty: 'Da Liễu',
    price: 250000,
    originalPrice: 300000,
    rating: 4.6,
    experience: '12 năm kinh nghiệm',
    avatar: doctor3,
    stock: 3 
  }, // <-- ĐÃ SỬA: Thêm dấu đóng ngoặc nhọn và dấu phẩy ở đây
  {
    id: 4,
    name: 'BS. Đinh Phú Phước',
    specialty: 'Tai Mũi Họng',
    price: 500000,
    originalPrice: 600000,
    rating: 5.0,
    experience: '20 năm kinh nghiệm',
    avatar: doctor4,
    stock: 4
  }
];

function App() {
  // Hàm Callback đón nhận tương tác ngược dòng từ component con đưa lên
  const handleBookAppointment = (doctor) => {
    console.log(`[Hệ thống MedCare] Ghi nhận yêu cầu đặt lịch khám với: ${doctor.name} - Chi phí: ${doctor.price.toLocaleString('vi-VN')}đ`);
  };

  return (
    <div className="medcare-app">
      <Header />
      <Banner />
      
      {/* Vị trí ứng dụng 1: Khối Chuyên khoa bọc bởi SectionWrapper */}
      <SectionWrapper 
        title="Chuyên Khoa Y Tế" 
        subtitle="Chọn chuyên khoa thích hợp để rút ngắn thời gian tìm kiếm bác sĩ chuyên khoa phụ trách"
        backgroundColor="#f8f9fa"
      >
        <SpecialtyList specialties={CLINIC_SPECIALTIES} />
      </SectionWrapper>

      {/* Vị trí ứng dụng 2: Khối Đội ngũ bác sĩ bọc bởi SectionWrapper */}
      <SectionWrapper 
        title="Đội Ngũ Bác Sĩ Nổi Bật" 
        subtitle="Đặt lịch hẹn trực tiếp với các chuyên gia y tế uy tín hàng đầu, tận tâm vì sức khỏe của bạn"
      >
        <DoctorGrid doctors={CLINIC_DOCTORS} onBookAppointment={handleBookAppointment} />
      </SectionWrapper>

      {/* Vị trí ứng dụng 3: Khối Giới thiệu tính năng dịch vụ bổ trợ bổ sung */}
      <SectionWrapper
        title="Tại Sao Nên Chọn MedCare?"
        subtitle="Hệ thống công nghệ tiên tiến mang lại trải nghiệm khám chữa bệnh tối ưu nhất"
        backgroundColor="#e7f1ff"
      >
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', color: '#0a58ca', fontWeight: '500' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', textAlign: 'center', width: '200px' }}>⏱️ Tiết kiệm thời gian</div>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', textAlign: 'center', width: '200px' }}>👨‍⚕️ Bác sĩ đầu ngành</div>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', textAlign: 'center', width: '200px' }}>🔒 Bảo mật tuyệt đối</div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}

export default App;