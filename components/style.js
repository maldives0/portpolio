
import React from 'react';
import { Global, css } from '@emotion/react';
import { Input } from 'antd';
import styled from '@emotion/styled';
import { Slide } from 'react-full-page';
export const GlobalLayout = () => (
  <Global
    styles={css`
  
  .site-layout-background {
    background: #fff;
  }
         `
    } />
);
export const InputSearch = styled(Input.Search)`
vertical-align: middle;
margin-right:5px;`
  ;
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
min-height: '500px'
`;