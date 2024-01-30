import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo (1).png"
const Header = () => {
  return (

    <section className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__items">
            <div className="header__item">
              <img src={logo} alt="asd" className="header__logo" />
            </div>
            <div className="header__nav">
              <Link className='header__link' to={'/'}>Каталог</Link>
              <Link className='header__link' to={'/'}>Галерея</Link>
              <Link className='header__link' to={'/'}>О лаборатории</Link>
              <Link className='header__link' to={'/'}>Контакты</Link>
            </div>
            <div className="header__icons">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 19C8.58172 19 5 15.4183 5 11C5 6.58172 8.58172 3 13 3C17.4183 3 21 6.58172 21 11C21 15.4183 17.4183 19 13 19Z" stroke="#BAE249" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.99998 21L7.34998 16.65" stroke="#BAE249" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="#BAE249" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 17L15 12L10 7" stroke="#BAE249" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 12H3" stroke="#BAE249" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header