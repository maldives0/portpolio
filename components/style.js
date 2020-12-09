
import React from 'react';
import { Global, css } from '@emotion/react';
import { Card } from 'antd';
import styled from '@emotion/styled';
import { Slide } from 'react-full-page';
export const GlobalLayout = () => (
  <Global
    styles={css`
  
  .site-layout-background {
    background: #fff;
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
padding: 0 0 5% 220px;

`;

export const FormStyle = styled.div`

display: flex;
justify-content: center;
align-items:center;
.ant-input{
  width:280px;
}
.textarea.ant-input{
  min-width:auto;
}
    
`

export const AboutLayout = () => (
  <Global
    styles={css`    
              .ant-typography {
      line-height: 2em;
      text-align: center;
    }      
    .ant-typography .ant-typography-secondary {
        font-size:1.4em;
    }  
             `
    } />
);
export const ExperienceLayout = () => (
  <Global
    styles={css`    
    .ant-card-cover{
      padding: 10px;
         }
    .ant-typography{
      margin-bottom:20px;
    }
    .ant-card{
      width:240px;
      margin-right:15px;
    }
             `
    } />
);