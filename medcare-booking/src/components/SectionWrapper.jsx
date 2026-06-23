import React from 'react';

function SectionWrapper({ title, subtitle, backgroundColor = '#ffffff', children }) {
  return (
    <section style={{ backgroundColor: backgroundColor, padding: '60px 20px', transition: 'background 0.3s' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '30px', fontWeight: 'bold', color: '#212529', margin: '0 0 10px 0' }}>
          {title}
        </h2>
        {subtitle && (
          <p style={{ fontSize: '16px', color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
            {subtitle}
          </p>
        )}
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {children} {/* Nơi đục lỗ để chèn cấu phần con tương ứng vào */}
      </div>
    </section>
  )
}

export default SectionWrapper;