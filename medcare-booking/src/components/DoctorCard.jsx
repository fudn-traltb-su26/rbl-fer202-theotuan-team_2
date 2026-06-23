import React from 'react';

function DoctorCard({ doctor, onBookAppointment }) {
  // Logic tự động tính toán % ưu đãi giá khám dựa trên data đầu vào
  const discount = doctor.originalPrice > doctor.price 
    ? Math.round(((doctor.originalPrice - doctor.price) / doctor.originalPrice) * 100) 
    : 0;

  return (
    <div style={{ border: '1px solid #e0e0e0', padding: '20px', borderRadius: '12px', width: '230px', background: '#fff', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', position: 'relative' }}>
      {/* Hiển thị badge giảm giá nếu có chênh lệch giá gốc */}
      {discount > 0 && (
        <span style={{ position: 'absolute', top: '12px', left: '12px', background: '#dc3545', color: 'white', padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold' }}>
          GIẢM {discount}%
        </span>
      )}
      
      <img 
        src={doctor.avatar} 
        alt={doctor.name} 
        style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px' }} 
      />
      <h5 style={{ margin: '0 0 8px 0', color: '#333', fontSize: '18px' }}>{doctor.name}</h5>
      <p style={{ color: '#0d6efd', fontSize: '14px', fontWeight: '500', margin: '0 0 10px 0' }}>{doctor.specialty}</p>
      
      <div style={{ color: '#ffc107', marginBottom: '10px', fontSize: '14px' }}>
        ⭐⭐⭐⭐⭐ <span style={{ color: '#666' }}>({doctor.rating})</span>
      </div>
      
      <div style={{ fontSize: '13px', color: '#6c757d', marginBottom: '8px' }}>
        ⏳ {doctor.experience}
      </div>

      <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#212529', marginBottom: '15px' }}>
        {doctor.price?.toLocaleString('vi-VN')}đ{' '}
        {discount > 0 && (
          <span style={{ textDecoration: 'line-through', color: '#adb5bd', fontSize: '12px', fontWeight: 'normal' }}>
            {doctor.originalPrice?.toLocaleString('vi-VN')}đ
          </span>
        )}
      </div>

      <button 
        disabled={doctor.stock === 0}
        onClick={() => onBookAppointment(doctor)}
        style={{ 
          background: doctor.stock === 0 ? '#6c757d' : '#0d6efd', 
          color: '#fff', 
          border: 'none', 
          padding: '10px', 
          borderRadius: '6px', 
          width: '100%', 
          fontWeight: '500', 
          cursor: doctor.stock === 0 ? 'not-allowed' : 'pointer',
          transition: 'background 0.2s'
        }}
      >
        {doctor.stock === 0 ? 'Hết lịch hẹn' : 'Đặt lịch ngay'}
      </button>
    </div>
  );
}

export default DoctorCard;