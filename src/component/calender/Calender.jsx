import React from 'react'
import styled from 'styled-components'
import Img from "../../images/left2.png"
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import SectionPera from '../common/SectionPera'
import Button from '../common/Button'

const Calender = () => {
  return (
    <Container>
    <Section>
    <div className='left'>
    <img src={Img} />
    </div>
    <div className='right' >
        <SectionHeading> How to design your site footer like <br/> we did </SectionHeading>
        <SectionPera> Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</SectionPera>
        <Button>Learn More</Button>
    </div>
   </Section> 
   </Container>
  )
}

export default Calender

const Section=styled.div`
padding:52px 0px;
display:flex;
align-items:center;
.left{
    width:40%;
    margin-right:50px;
}
.right{
    width:60%;
}
h2{
    text-align:left;
}
p{
    margin-top:16px;
}
`