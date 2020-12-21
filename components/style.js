
import React from 'react';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

export const GlobalLayout = () => (
  <Global
    styles={css`
   
    .ant-menu-item,
    ant-menu-item ant-menu-item-selected {
    padding:0 15px !important;
    }
    .sider-layout{
    background: #fff;
       height:100vh;
    position:fixed;
    left:0;
    z-index:99;
  }
   
  .menufold-layout{
    font-size: 2em;
    position:fixed;
    left:20px;
    top:20px;
    z-index:1000;
  }
    .ant-row{
    margin-right:0 !important;
   }
   .ant-layout-footer{
     padding: 5px 0;
     width:100%;
     position: fixed;
     bottom:0;
     right:0;
     & >p{
       margin:0 25px 0 0 !important;
       text-align:right;
     }
   }
   .layout-background{
         height:0;
         width:100%;
   }
   .basic-layout-background-pc{
    background:#f0f2f5;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    position:relative;
    top:0;
    left:0;
    height:100%; 
    padding: 2% 0 3% 220px; 
  }
  .basic-layout-background-mobile{
    background:#f0f2f5;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    position:relative;
    top:0;
    left:0;
    height:100%; 
    padding: 2%; 
  }
  
  .home-layout-background{
    background:no-repeat url(/img/wall-e-meets-mac.jpg) center/100% 100%;
    width:100%;
    height:100vh; 
  }
             `
    } />
);


export const Logo = styled.div`
height:300px;
padding:10px;
display:flex;
justify-content:center;
flex-direction: column;
text-align: center; 
font-size:15px; 
line-height:2em;
text-transform:uppercase;

`;



export const ContactFlex = styled.div`
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;

`;

export const FormStyle = styled.div`

display: flex;
justify-content: center;
align-items:center;
.ant-input{
  width:320px;
  height:40px;
}
.ant-form-item textarea.ant-input{
  min-width:auto;
  width:400px;
  height:300px;
}
    
`
export const ContactLayout = () => (
  <Global
    styles={css`    
      .contact-list-style{
      display: flex;
      justify-content: center;
      align-items:center;
      font-size: 20px;
    }
      .ant-row{
      justify-content: center;
      align-items: center;
    }
      .message-button-display{
          margin-top:25px;
          display: flex;
        justify-content: center;
        }
        .ant-drawer-right {
          overflow:hidden;
        }
        .ant-drawer-right.ant-drawer-open .ant-drawer-content-wrapper{
          width:500px !important;
        }
        .ant-drawer-body{
         overflow:hidden;
        }
       .site-drawer-render-in-current-wrapper{
          margin-top : 10%;
          font-size: 20px;
          text-align:center;
          border: 1px solid #fff;
          padding:5%;
        }
        .ant-card-head-title{
          font-size:20px;
          text-align: center;
        }
      .ant-card-body{
          height:30%;
         padding:14px;
         font-size:13px;
         text-align:center;
        }
             `
    } />
);

export const AboutLayout = () => (
  <Global
    styles={css`
  .ant-typography-about,
  h1.ant-typography.ant-typography-about,
  h2.ant-typography.ant-typography-about,
  h3.ant-typography.ant-typography-about,
  h4.ant-typography.ant-typography-about {
  line-height: 1.2em;
  text-align: center;
  color:#fff;    
}     
.about-layout-background-pc{
  background:no-repeat url(/img/human-science.jpg) center/95% 95%;
  width:100%;
  height:100%;  
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  padding: 2% 2% 3% 260px;
  }
.about-layout-background-mobile{
  background:no-repeat url(/img/human-science.jpg) center/95% 95%;
  width:100%;
  height:100%;  
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  padding: 2%;
  }
`
    } />
);
export const ExperienceLayout = () => (
  <Global
    styles={css`
  .ant-card-cover{
  padding: 20px;
}
   h3.ant-typography{
  margin-bottom: 50px;
}
    .ant-card{
  margin-right: 15px;
}
.ant-card-meta{
  font-size:11px;
}
`
    } />
);
export const ProjectLayout = () => (
  <Global
    styles={css`
  .ant-card-cover{
  padding: 10px;
}
        .ant-card{
  margin-right: 15px;
}
.modal-image-style{
  margin:10px;
  width:100%;
  text-align: center;
}
.ant-modal{
  top:30px;
}
div.ant-descriptions.ant-descriptions-bordered{
  width:200%;
}
.ant-descriptions-item-content{
  line-height:2em;
}
`

    } />
);