import React from 'react'
import styled from 'styled-components'
import Img from "../../images/left1.png"
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import SectionPera from '../common/SectionPera'
import Button from '../common/Button'

export const Unlock = () => {
  return (
   <Container>
    <Section>
    <div className='left'>
    <img src={Img} />
    </div>
    <div className='right' >
        <SectionHeading> The unseen of spending  <br/> years at Pixelgrade </SectionHeading>
        <SectionPera> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</SectionPera>
        <Button>Learn More</Button>
    </div>
   </Section> 
   </Container>
  )
}

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