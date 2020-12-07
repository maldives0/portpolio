
import React from 'react';
import { Global, css } from '@emotion/react';

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
       margin:0 !important;
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
padding: 30px 0  5% 220px;

`;