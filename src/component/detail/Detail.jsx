import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'
import SectionPera from '../common/SectionPera'
import DetailBox from './DetailBox'
import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"
import icon3 from "../../images/icon3.png"
import icon4 from "../../images/icon4.png"

const Detail = () => {
  return (
    <Section>
        <Container>
        <SidebySide>
        <div className='left'>
            <h3>
            Helping a local <br/> 
            <span> business reinvent itself </span>
            </h3>
            <SectionPera>
            We reached here with our hard work and dedication
            </SectionPera>
        </div>
        <div className='right'>
          <Side>
            <DetailBox icon={icon1} text="2,245,341" pera="Members"/>
            <DetailBox icon={icon2} text="46,328" pera="Clubs"/>
            <DetailBox icon={icon3} text="828,867" pera="Event Bookings"/>
            <DetailBox icon={icon4} text="1,926,436" pera="Payments"/>
          </Side>
        </div>
        </SidebySide>
      </Container>
    </Section>
  )
}

export default Detail

const Section=styled.div`
padding:64px 0px;
background-color:#F5F7FA;
`

const SidebySide=styled.div`
display:flex;


.left{
  margin-right:204px;
}

h3{
  color:#4D4D4D;
font-weight:600;
font-size:36px;
line-height:44px;
font-family: "Inter", sans-serif;
span{
 color:#4CAF4F;
}
}

`
const Side=styled.div`

display:grid;
grid-template-columns:repeat(2,1fr);
column-gap: 120px;
    row-gap: 25px;

`