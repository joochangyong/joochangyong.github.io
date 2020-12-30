import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/headerMe.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        안녕하세요 저는 <b>BackEnd개발자</b>를 지망하는<b>주창용</b>입니다.
        <br />
        끝없는 도전과 노력하는 개발자가 되겠습니다.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
