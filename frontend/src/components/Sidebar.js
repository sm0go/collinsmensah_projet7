import React, { useState } from 'react'
import Figure from 'react-bootstrap/Figure'
import icon from '../image/logo/icon-orange.png'
import * as FaIcon from 'react-icons/fa'
import * as AiIcon from 'react-icons/ai'
import * as HiIcon from 'react-icons/hi'
import * as RiIcon from 'react-icons/ri'
import * as BsIcon from 'react-icons/bs'
import * as MdIcon from 'react-icons/md'
import * as CgIcon from 'react-icons/cg'
import './SidebarCSS.css'
import { IconContext } from 'react-icons'

function Sidebar() {

  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  
  const SidebarData = [
    {
      title: 'Groupo',
      path: '/groupo',
      icon: <RiIcon.RiGroupLine />,
      cName: 'nav-text',
    },
    {
      title: 'Messagerie',
      path: '/profile/message',
      icon: <AiIcon.AiOutlineMessage />,
      cName: 'nav-text',
    },
    {
      title: 'Mes posts',
      path: '/profile/post',
      icon: <BsIcon.BsPersonPlus />,
      cName: 'nav-text',
    },
    {
      title: 'Poster',
      path: '/profile/add',
      icon: <MdIcon.MdOutlineAddComment />,
      cName: 'nav-text',
    },
    {
      title: 'Mon Profile',
      path: '/settings',
      icon: <CgIcon.CgProfile />,
      cName: 'nav-text',
    },
    {
      title: 'Déconnexion',
      path: '/login',
      icon: <HiIcon.HiOutlineLogout />,
      cName: 'nav-text',
    },
  ]

  return (
    <>
      <IconContext.Provider value = {{size : '24'}}>
      <button className='z-index fixed-top menu-bars d-flex mb-3'>
        <FaIcon.FaBars className='toggle-icon' onClick={showSidebar}/>
      </button>
      <nav className = {sidebar ? 'bg-white nav-menu active z-index-first' : 'nav-menu'}>
        <ul className='d-flex flex-column nav-menus-items'>
          <li className='bg-white navbar-toggle'>
            <button className='menu-bars'>
              <AiIcon.AiOutlineClose className='close-icon' onClick={showSidebar}/>
            </button>
          </li>
          <div className='mb-auto'>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} >
                  <a href={item.path}>
                    {item.icon}
                    <span className='span'>{item.title}</span>
                  </a>
                </li>
              )
            })}
          </div>
          <div className='margin-auto'>
            <Figure className='mx-4'>
            <Figure.Image
              height={180}
              width={180}
              sizes='250x250'
              src={icon}
              />
            </Figure>
          </div>
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar




