import React from 'react';

const MOCK_SPECIALTIES = [
  { id: 1, name: 'Nội Tổng Quát' },
  { id: 2, name: 'Nhi Khoa' },
  { id: 3, name: 'Da Liễu' },
  { id: 4, name: 'Tai Mũi Họng' },
  { id: 5, name: 'Răng Hàm Mặt' }
];

function SpecialtyList() {
  return (
    <div style={{ padding: '20px' }}>
      {MOCK_SPECIALTIES.length > 0 ? (
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {MOCK_SPECIALTIES.map((spec) => (
            <div key={spec.id} style={{ padding: '15px 25px', background: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', color: '#495057', transition: 'all 0.2s' }}>
              🔹 {spec.name}
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: '#666' }}>Không có chuyên khoa nào tồn tại.</p>
      )}
    </div>
  );
}

export default SpecialtyList;
