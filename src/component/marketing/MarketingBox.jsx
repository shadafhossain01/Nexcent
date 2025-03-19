import React from 'react'
import styled from 'styled-components'

const MarketingBox = ({pera}) => {
  return (
    <>
    <Box>
        <p>
        {pera}
        </p>

        <h6>Read More ➙ </h6>
    </Box>
    </>
  )
}

export default MarketingBox

const Box=styled.div`
margin-top:65px;
background-color:#F5F7FA;
padding:16px;
border-radius:8px;
text-align:center;
box-shadow:0px 8px 16px rgba(171,190,209,0.4);

P{
    width:227px;
    color:#717171;
font-weight:600;
font-size:18px;
line-height:28px;
font-family: "Inter", sans-serif;
}

h6{
    color:#4CAF4F;
font-weight:600;
font-size:20px;
line-height:28px;
font-family: "Inter", sans-serif;
}
`;