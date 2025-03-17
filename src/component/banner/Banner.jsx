import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'

const Banner = () => {
  return (
    <Section>
<Container>
<Flex>
    <div>
    <h1>Lessons and insights <br/> <bg>from 8 years</bg> </h1>
    <p>Where to grow your business as a photographer: site or social media?</p>
    <button>Register</button>
    </div>
    <div>
    <img src='../../../Illustration.png' />
    </div>
</Flex>
</Container>
    </Section>
  )
}

export default Banner

const Section=styled.div`
background-color:#F5F7FA;
padding:96px 0px;
`

const Flex=styled.div`
justify-content:space-between;
display:flex;

h1{
    font-family: Inter;
font-size: 64px;
font-style: normal;
font-weight: 600;
line-height: 76px;
}

bg{
    color:#4CAF4F;
}

p{
    color: #717171;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
margin-top:16px;
}

button{
    margin-top:32px;
    padding:14px 32px;
    background-color:#4CAF4F;
    border:none;
    border-radius:5px;
    color:#fff;
}

`