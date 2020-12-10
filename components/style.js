
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
  .site-sider-layout,
  ant-layout-sider ant-layout-sider-dark site-sider-layout {
    background: #fff;
    width: 150px !important;
    max-width:150px !important;
    min-width:150px !important;
    height:100vh;
    position:fixed;
    left:0;
    z-index:99;
  }
  .basic-layout-background{
    background:#f0f2f5;
  }
  .ant-row{
    margin-right:0 !important;
  }
 
      .ant-drawer-right {
        overflow:hidden;
      }
      .ant-drawer-right.ant-drawer-open .ant-drawer-content-wrapper{
        width:300px !important;
      }
      .ant-drawer-body{
       overflow:hidden;
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

export const SlideStyle = styled.div`
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
height:100%;
position:relative;
top:0;
left:0;
padding: 5% 0 5% 170px;
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
  width:90%;
}
.textarea.ant-input{
  min-width:auto;
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
        .site-drawer-render-in-current-wrapper{
          margin-top : 20px;
          font-size: 20px;
          text-align:center;
          border: 1px solid #fff;
          width:400px;
          padding:15px;
        }
        .ant-card-head-title{
          font-size:20px;
          text-align: center;
        }
        .ant-card-body{
          height:30%;
         padding:14px;
         font-size:13px;
        }
             `
    } />
);

export const AboutLayout = () => (
  <Global
    styles={css`
  .ant-typography {
  line-height: 2em;
  text-align: center;
  
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
`
    } />
);