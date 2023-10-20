import React from 'react'
const Footer = () => {
  return (
    <footer className='footer'>
      <h2>REASUNTA</h2>
      <hr className="divider" />
      <p><span> Copyright ©</span><span>All rights reserved</span><span>{new Date().getFullYear()}</span></p>
    </footer>
  )
}

export default Footer
