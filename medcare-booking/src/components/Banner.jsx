import React from 'react';

function Banner() {
  return (
    <div style={{ background: 'linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)', color: 'white', padding: '80px 40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '40px', marginBottom: '20px', fontWeight: 'bold' }}>Đặt Lịch Khám Nhanh - Khỏe Mạnh Mỗi Ngày</h1>
      <p style={{ fontSize: '18px', marginBottom: '30px', maxWidt: '600px', margin: '0 auto 30px auto' }}>
        Kết nối với hơn 100+ chuyên gia, bác sĩ hàng đầu. Đặt lịch hẹn dễ dàng, an toàn và bảo mật thông tin tuyệt đối.
      </p>
      <button style={{ background: '#ffffff', color: '#0d6efd', border: 'none', padding: '12px 25px', borderRadius: '25px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        Đặt khám ngay
      </button>
    </div>
  );
}

export default Banner;