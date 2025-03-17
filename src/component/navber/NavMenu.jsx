import React from 'react'
import styled from 'styled-components'

const NavMenu = () => {
  return (
    <>
    <Unorder>
    <Order>Home</Order>
            <Order>Service</Order>
            <Order>Feature</Order>
            <Order>Product</Order>
            <Order>Testimonial</Order>
            <Order>FAQ</Order>
    </Unorder>
      
 
    </>
  )
}

export default NavMenu

const Unorder=styled.ul`
display:flex;

`

const Order=styled.li`
margin:0px 15px;
list-style-type:none;
cursor:pointer;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;

&:hover{
    color:green;
}

`;