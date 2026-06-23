import React from 'react';

function Footer() {
  return (
    <footer style={{ background: '#212529', color: '#f8f9fa', padding: '30px 20px', textAlign: 'center', marginTop: '50px' }}>
      <p style={{ margin: '0 0 10px 0', fontWeight: '500' }}>🏥 Hệ thống Đặt lịch khám bệnh trực tuyến MedCare</p>
      <p style={{ margin: 0, fontSize: '14px', color: '#adb5bd' }}>
        © {new Date().getFullYear()} MedCare Team. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;