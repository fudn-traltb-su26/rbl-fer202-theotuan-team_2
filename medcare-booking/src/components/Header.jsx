import React from 'react';

function Header() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', padding: '15px 40px', background: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0d6efd' }}>🏥 MedCare</div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '30px', margin: 0, padding: 0 }}>
        <li><a href="#home" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Trang chủ</a></li>
        <li><a href="#doctors" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Bác sĩ</a></li>
        <li><a href="#specialties" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Chuyên khoa</a></li>
      </ul>
      <div style={{ fontSize: '20px', cursor: 'pointer', position: 'relative' }}>
        📅 <span style={{ position: 'absolute', top: '-8px', right: '-10px', background: 'red', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '12px' }}>0</span>
      </div>
    </nav>
  );
}

export default Header;