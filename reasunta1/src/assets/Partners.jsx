import React from 'react'

const Partners = () => {
  const eStyle = {
    color: '#DB4437',
    letterSpacing: '-30px',
  };

  const spaceStyle = {
    letterSpacing: '-10px', // Adjust as needed
  };
  return (
    <div className='container' id='partners'>
      <h2 style={{textAlign: 'center', fornWeight: 'bold', color: '#1a4b7e', marginTop: '3rem', zIndex: '2'}}>Your №1 Financial Assistance with REASUNTA and COMMERZBANK</h2>
      <h2 style={{textAlign: 'center', fornWeight: 'bold', color: 'black', marginTop: '3rem', zIndex: '2'}}>Our General Partners:</h2>
      <h2 style={{textAlign: 'center', fornWeight: 'bold', marginTop: '3rem', zIndex: '2'}}>
      <p >
        <span style={{ color: '#4285F4', letterSpacing: '-30px'  }}>G</span>
        <span style={{ color: '#DB4437', letterSpacing: '-30px' }}>o</span>
        <span style={{ color: '#F4B400', letterSpacing: '-30px' }}>o</span>
        <span style={{ color: '#4285F4', letterSpacing: '-30px' }}>g</span>
        <span style={{ color: '#0F9D58' , letterSpacing: '-30px'}}>l</span>
        <span style={{ color: '#DB4437' , letterSpacing: '-30px'}}>e</span>
        <span style={spaceStyle}>&nbsp;</span>
        Chocolate
      </p>
      </h2>
    </div>
  )
}

export default Partners
