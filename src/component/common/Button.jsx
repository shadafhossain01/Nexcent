import React from 'react'
import styled from 'styled-components'

const Button = ({children}) => {
  return (
<Btn> {children} </Btn>
  )
}

export default Button

const Btn=styled.button`
    margin-top:32px;
    padding:14px 32px;
    background-color:#4CAF4F;
    border:none;
    border-radius:5px;
    color:#fff;
`