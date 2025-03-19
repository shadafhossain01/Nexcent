import React from 'react'
import SectionHeading from '../common/SectionHeading'
import SectionPera from '../common/SectionPera'
import Container from '../common/Container'
import styled from 'styled-components'
import MarketingBox from './MarketingBox'

const Marketing = () => {



  return (
    <>
       <Section>
       <Container>
        <SectionHeading>
        Caring is the new marketing
        </SectionHeading>
        <SectionPera>
        The Nexcent blog is the best place to read about the latest membership insights, <br/> trends and more. See who's joining the community, read about how our community <br/> are increasing their membership income and lot's more.​
        </SectionPera>
        <SidebySide>
            <MarketingBox pera="Creating Streamlined Safeguarding Processes with OneRen"/>
            <MarketingBox pera="What are your safeguarding responsibilities and how can you manage them?"/>
            <MarketingBox pera="Revamping the Membership Model with Triathlon Australia"/>
        </SidebySide>
        </Container>
       </Section>
    </>
  )
}

export default Marketing

const Section=styled.div`
padding-bottom:90px;

P{
    text-align:center;
    margin-top:8px;
    margin-bottom:20px;
    font-size: 16px;
    line-height: 24px;
}

`

const SidebySide=styled.div`
display:flex;
justify-content:space-between;

`