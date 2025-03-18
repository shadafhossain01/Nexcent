import React from 'react'
import styled from 'styled-components'
import SectionPera from '../common/SectionPera'

const CommunityBox = ({icon,text}) => {
  return (
    <Box>
    <img src={icon}/>
    <h4> {text} </h4>
    <SectionPera>
    Our membership management software provides full automation of membership renewals and payments
    </SectionPera>
    </Box>
  

  )
}

export default CommunityBox


const Box=styled.div`
margin-top:26px;
text-align:center;
padding:24px;
width:293px;
box-shadow:0px 2px 4px 0px rgba(171,190,209,0.20);

h4{
    color:#4D4D4D;
font-weight:600;
font-size:28px;
line-height:36px;
font-family: "Inter", sans-serif;
margin-top:16px;
margin-bottom:8px;
}
p{
    font-size:14px;
}

`