import React from 'react'
import styled from 'styled-components'

const SectionPera = ({children}) => {
  return (
    <Pera>
        {children}
    </Pera>
  )
}

export default SectionPera

const Pera=styled.p`
color:#717171;
font-weight:400;
font-size:16px;
line-height:30px;
font-family: "Inter", sans-serif;
`