import React, { useState } from 'react'
import Figure from 'react-bootstrap/Figure'
import icon from '../image/logo/icon-white.png'
import './SidebarCSS.css'

function Brand() {
  return (
    <div className='mt-3 d-flex navbar'>
      <Figure className='mx-auto'>
        <Figure.Image className=''
        height={200}
        width={200}
        sizes='200x200'
        src={icon}
        />
      </Figure>
    </div>
  )
}

export default Brand
