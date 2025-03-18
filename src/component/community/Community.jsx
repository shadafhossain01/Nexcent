import React from 'react'
import styled from 'styled-components'
import SectionHeading from '../common/SectionHeading'
import SectionPera from '../common/SectionPera'
import CommmunityBoxes from './CommmunityBoxes'

const Community = () => {
  return (
    <Section>
        <SectionHeading>
        Manage your entire community <br/> in a single system
        </SectionHeading>
        <SectionPera>
        Who is Nextcent suitable for?
        </SectionPera>
        <CommmunityBoxes/>
    </Section>
  )
}

export default Community

const Section=styled.section`
margin:50px 0px;
p{
    text-align:center;
}
`