import React from 'react';

function DoctorCard() {
  return (
    <div style={{ border: '1px solid #e0e0e0', padding: '20px', borderRadius: '12px', width: '230px', background: '#fff', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
      <img 
        src="https://picsum.photos/seed/doctor1/200/200" 
        alt="Bác sĩ" 
        style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px' }} 
      />
      <h5 style={{ margin: '0 0 8px 0', color: '#333', fontSize: '18px' }}>BS. CKI Nguyễn Văn A</h5>
      <p style={{ color: '#0d6efd', fontSize: '14px', fontWeight: '500', margin: '0 0 10px 0' }}>Nội Tổng Quát</p>
      <div style={{ color: '#ffc107', marginBottom: '10px', fontSize: '14px' }}>⭐⭐⭐⭐⭐ <span style={{ color: '#666' }}>(4.8)</span></div>
      <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#212529', marginBottom: '15px' }}>
        300.000đ <span style={{ textDecoration: 'line-through', color: '#adb5bd', fontSize: '12px', fontWeight: 'normal' }}>400.000đ</span>
      </div>
      <button style={{ background: '#0d6efd', color: '#fff', border: 'none', padding: '10px', borderRadius: '6px', width: '100%', fontWeight: '500', cursor: 'pointer' }}>
        Đặt lịch ngay
      </button>
    </div>
  );
}
