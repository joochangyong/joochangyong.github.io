import thumb01 from '../../../assets/images/thumbs/project1.jpg'
import thumb02 from '../../../assets/images/thumbs/project2.jpg'
import thumb03 from '../../../assets/images/thumbs/project3.jpg'
import thumb04 from '../../../assets/images/thumbs/project4.jpg'
import React from 'react'


export const DEFAULT_IMAGES = [
    {
      id: '1',
      caption: '바질컴퍼니 - 포장 및 택배관리 시스템',
      description: 
      <ul>
        <li><b>기간</b> : 2021.07~2021.11(5개월)</li>
        <li><b>포지션</b> : 백엔드</li>
        <li><b>담당 역할</b> : RestAPI 개발 및 데이터통신, CCTV 통신</li>
        <li><b>기술 스택</b> : : Spring Boot, JPA, vue.js, AWS EC2, MySQL(MariaDB)</li>
        <li><b>개발 인원 :</b> : 3</li>
        <li><b>상세 내용</b> : 포장 및 택배 관리 전체 API개발, RestTemplate를 이용한 카카오 알림톡 서비스 연동, RTSP를 이용한 CCTV 연동</li>
        <br />
      </ul>,
      
    },
    {
      id: '2',
      caption: '바질컴퍼니 - MES',
      description: 
      <ul>
        <li><b>기간</b> : 2021.01~2021.06(6개월)</li>
        <li><b>포지션</b> : 백엔드</li>
        <li><b>담당 역할</b> : RestAPI 개발</li>
        <li><b>기술 스택</b> : : Spring Boot, JPA, vue.js, AWS EC2, NoSQL(MongoDB), MySQL(MariaDB)</li>
        <li><b>개발 인원 :</b> : 3</li>
        <li><b>상세 내용</b> : 자재 입하, 입고검사, 판매실적조회 등 일부 API 개발, 그 외 이슈사항 처리, LOGBACK 구현</li>
        <br />
      </ul>,
      
    },
    {
      id: '3',
      href: 'https://github.com/joochangyong/Springboot_bookstore',
      target: '_blank',
      thumbnail: thumb01,
      caption: '학부생 - SpringBoot를 이용한 BookStore',
      description: 
      <ul>
        <li><b>토이 프로젝트</b><br/>SpingBoot, JPA를 이용해 구축한 온라인 서점 시스템입니다.</li>
        <br />
        <li><b>구현 기술</b> : SpringBoot, JPA, JavaScript, MySQL, AWS RDS, Mustache, Spring security<br /><b>배포</b> : AWS EC2, AWS S3, AWS CodeDeploy, AWS Route53, Nginx, travis-ci
        {/* 👉<a href="http://bookstore.joochangyong.xyz/" target="_blank">페이지 이동</a> */}
        </li>
      </ul>,
      
    },
    {
      id: '4',
      href: 'https://github.com/joochangyong/Unity_Maze_Game_using_EEG',
      target: '_blank',
      thumbnail: thumb02,
      caption: '학부생 - 전신마비자를 위해 EEG를 활용한 미로 찾기 게임',
      description: 
      <ul>
        <li><b>졸업프로젝트</b><br/>BCI(Brain-Computer Interface)기반으로 전신마비환자 두명이 EEG를 통해 상호협력을 이루며 미로찾기게임을 할 수 있는 시스템입니다.</li>
        <br />
        <li><b>게임 구현</b> : Unity엔진, C#<br /><b>뇌파데이터 학습 및 수집</b> : Emotiv사의 Epoc+, EmotivBCI <br /><b>키보드매칭</b> : Node-Red Interface</li>
      </ul>,
    },
    {
      id: '5',
      href: 'https://github.com/joochangyong/Node.js_selfInterior',
      target: '_blank',
      thumbnail: thumb03,
      caption: '학부생 - 셀프인테리어 공유 시스템',
      description: 
      <ul>
        <li><b>팀프로젝트</b><br/>셀프 인테리어를 도전해보고 싶지만 셀프 인테리어에 대한 지식이 부족하여 도전하지 못하는 사람들에게 도움이 되고, 다른 사람들이 올린 사진에 달린 태그를 통해 제품을 구매 할 수 있는 시스템입니다.</li>
        <br />
        <li><b>구현 기술</b> : Node.js & express, ejs, MySQL</li>
        <br />
      </ul>
    },
    {
      id: '6',
      href: 'https://github.com/joochangyong/Node.js_handmade',
      target: '_blank',
      thumbnail: thumb04,
      caption: '학부생 - 핸드메이드 상품 홍보 및 판매 시스템',
      description: 
      <ul>
        <li><b>팀프로젝트</b><br/>직접 만든 핸드메이드 제품을 스토리를 통하여 홍보 및 판매하고 다른 사용자의 제품을 구매 할 수 있는 시스템입니다.</li>
        <br />
        <li><b>구현 기술</b> : Node.js & express, ejs, MySQL</li>
      </ul>,
    }
]