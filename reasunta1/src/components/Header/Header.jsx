import { ReactElement } from 'react'
import React from 'react'

// type HeadingProps = {
//     title: string
// }

const Header = ({ title}) => {
  return <header className='header' ><h1 >{title}</h1></header>
}

export default Header
