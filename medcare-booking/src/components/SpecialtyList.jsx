import React from 'react';

function SpecialtyList({ specialties }) {
  if (!specialties || specialties.length === 0) {
    return <p style={{ textAlign: 'center', color: '#6c757d' }}>Không tìm thấy danh mục chuyên khoa nào.</p>;
  }

  return (
    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
      {specialties.map((spec) => (
        <div 
          key={spec.id} 
          style={{ padding: '15px 25px', background: '#fff', border: '1px solid #e9ecef', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', color: '#495057', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          {/* Render class icon động được chuẩn bị sẵn từ db */}
          <span style={{ color: '#0d6efd' }}>🔹</span>
          <span>{spec.name}</span>
          <span style={{ background: '#e7f1ff', color: '#0d6efd', fontSize: '12px', padding: '2px 6px', borderRadius: '10px', marginLeft: '5px' }}>
            {spec.doctorCount} BS
          </span>
        </div>
      ))}
    </div>
  );
}

export default SpecialtyList;