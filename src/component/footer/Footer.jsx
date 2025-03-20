import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'
import FooterLeft from './FooterLeft'
import FooterMenu from './FooterMenu'
import Sent from "../../images/send.png"

const Footer = () => {
  return (
    <>
    <Section>
    <Container>
    <SidebySide>
    <div>
      <FooterLeft/>
    </div>
    <div>
      <Side>
        <div>
          <FooterMenu>
          <h3>Company</h3>
    <ul>
      <li>About us</li>
      <li>Blog</li>
      <li>Contact us</li>
      <li>Pricing</li>
      <li>Testimonials</li>
    </ul>
          
           </FooterMenu>
        </div>
        <div>
        <FooterMenu>
        <h3>Support</h3>
    <ul>
      <li>Help center</li>
      <li>Terms of service</li>
      <li>Legal</li>
      <li>Privacy policy</li>
      <li>Status</li>
    </ul>
        </FooterMenu>
        </div>
        <div>
          <h3>Stay up to date</h3>
          <Div>
            <p>Your email address</p>
            <img src={Sent} />
          </Div>
        </div>
      </Side>
    </div>
    </SidebySide>
    </Container>
    </Section>
    </>
  )
}

export default Footer

const Section=styled.div`
padding:64px 0px;
background-color:#263238;
`
const SidebySide=styled.div`
display:flex;
`
const Side=styled.div`
display:flex;
column-gap:138px;

h3{
  color:#FFFFFF;
font-weight:600;
font-size:20px;
line-height:28px;
font-family: "Inter", sans-serif;
margin-bottom:24px;
}
`

const Div=styled.div`
background:#515B60;
display:flex;
justify-content:space-between;
border-radius:8px;
padding:11px 12px;
width:255px;

p{
  color:#D9DBE1;
font-weight:400;
font-size:14px;
line-height:20px;
font-family: "Inter", sans-serif;
}
`