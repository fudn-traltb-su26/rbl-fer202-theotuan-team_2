import React from 'react';
import DoctorCard from './DoctorCard';

// Mảng nháp tạo vòng lặp cho tuần 2
const MOCK_DOCTORS = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

function DoctorGrid() {
  return (
    <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {MOCK_DOCTORS.map((doctor) => (
        <DoctorCard key={doctor.id} />
      ))}
    </div>
  );
}

export default DoctorGrid;