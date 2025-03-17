import React from 'react'
import styled from 'styled-components'

const SectionHeading = ({children}) => {
  return (
    <Mainheading>
        {children}
    </Mainheading>
  )
}

export default SectionHeading

const Mainheading=styled.h2`
color:#4D4D4D;
font-weight:600;
font-size:36px;
line-height:44px;
font-family: "Inter", sans-serif;
text-align:center;
`