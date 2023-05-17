import React from "react";
import "./asset/css/landingPage.css";
import { Typography } from 'antd';
const LandingPage = () => {
  const {Title,Paragraph} = Typography
  return (
    <div className="landingPage">
      <div className="left__panel">
        <Title level={1}>Lorem ipsum dolor adipisicing elit.</Title>
        <p className="pe-5"> Quae beatae, voluptate eligendi dolores amet delectus. Exercitationem, velit reiciendis. </p>
      </div>
      <div class="slidercircle">
        <div class="circle-one">
          <div class="circle-arround-one"></div>
        </div>
        <div class="circle-two">
          <div class="circle-arround-two-1 anima"></div>

          <div class="circle-arround-two-2 anima"></div>

          <div class="circle-arround-two-3 anima"></div>

          <div class="circle-arround-two-4 anima"></div>
        </div>
        <div class="circle-middle">
         <img src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg" alt="blogImage" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
