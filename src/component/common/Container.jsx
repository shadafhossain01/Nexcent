import React from 'react'
import styled from 'styled-components'

const Container = ({children}) => {
  return (
    <Wrapper>
    {children}
    </Wrapper>
       
   
  )
}

export default Container

const Wrapper=styled.div`
width:1208px;
margin:0 auto;
`;
