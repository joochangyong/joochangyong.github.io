import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import face from '../assets/images/face.jpg'

const HomeIndex = () => {
  const siteTitle = '주창용의 포트폴리오'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h1>
              "도전에 성공하는 비결은 단 하나, 결단코 포기하지 않는 일이다."
              <br />
            </h1>
          </header>
          <h3>
            새로운 것에 대한 두려움을 갖지않고 도전하겠습니다.
            <br />
            정해진 목표를 이루기 위해 "오기"를 가지고 끊임없이 노력하겠습니다.
            <br />
            Node.js & Express, Springboot를 이용하여 개발한 경험이 있으며 
            현재도 BackEnd개발자의 길을 가기위해 꾸준히 노력하고 있습니다.
          </h3>
          <ul className="actions">
            <li>
              <a href="https://github.com/joochangyong" target="_blank" className="button">
                github
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Projects</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>연락 기다리겠습니다!</h2>
          <div className="row">
          <body>
            <img style={{width:200, height: 230}} src={face} alt="My Image"></img>
          </body>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  부산광역시 사상구
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  010-3103-3706
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  wnckddyd0525@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
