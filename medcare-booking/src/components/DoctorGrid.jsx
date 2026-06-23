import React from 'react';
import DoctorCard from './DoctorCard';

function DoctorGrid({ doctors, onBookAppointment }) {
  // Xử lý trạng thái Empty State nếu không có dữ liệu bác sĩ nào
  if (!doctors || doctors.length === 0) {
    return (
      <div style={{ padding: '30px', textAlign: 'center', background: '#fff', borderRadius: '8px', border: '1px dashed #dee2e6' }}>
        <p style={{ color: '#6c757d', margin: 0, fontSize: '16px' }}>
          🔍 Hiện tại hệ thống chưa có thông tin bác sĩ nào thuộc danh mục này.
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', justifyContent: 'center', padding: '10px' }}>
      {doctors.map((doctor) => (
        <DoctorCard 
          key={doctor.id} 
          doctor={doctor} 
          onBookAppointment={onBookAppointment} 
        />
      ))}
    </div>
  );
}

export default DoctorGrid;