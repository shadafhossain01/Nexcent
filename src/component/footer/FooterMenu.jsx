import React from 'react'
import styled from 'styled-components'

const FooterMenu = ({children}) => {
  return (
  <Wrapper>
    {children}
  </Wrapper>
  )
}

export default FooterMenu

const Wrapper=styled.div`

h3{
  color:#FFFFFF;
font-weight:600;
font-size:20px;
line-height:28px;
font-family: "Inter", sans-serif;
margin-bottom:24px;
}

ul{
  list-style-type:none;

  li{
    color:#F5F7FA;
font-weight:400;
font-size:14px;
line-height:20px;
font-family: "Inter", sans-serif;
margin-bottom:12px;
  }
}


`