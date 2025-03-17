import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'
import bannerImg from "../../images/illustration.png"
import Button from '../common/Button'

const Banner = () => {
  return (
    <Section>
<Container>
<Flex>
    <div>
    <h1>Lessons and insights <br/> <bg>from 8 years</bg> </h1>
    <p>Where to grow your business as a photographer: site or social media?</p>
    <Button>Register</Button>
    </div>
    <div>
    <img src={bannerImg} />
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
`