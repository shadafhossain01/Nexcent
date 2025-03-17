import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'
import Img from "../../images/tesla.png"
import SectionPera from '../common/SectionPera'
import { Company } from '../client/Company'

const Review = () => {
  return (
    <Background>
        <Container>
        <Sidebyside>
            <div className='left'>
                <img src={Img} />
            </div>
            <div className='right'>
                <SectionPera>
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </SectionPera>
                <span>Tim Smith</span>
            <SectionPera>
            British Dragon Boat Racing Association
            </SectionPera>
          <div className='side'>
          <Company/>
          <h3>Meet all customers</h3>
          </div>

            </div>
            </Sidebyside>
        </Container>
    </Background>
  )
}

export default Review

const Background=styled.div`
Background:#F5F7FA;
margin:48px 0px;
padding:32px 0px;
`

const Sidebyside=styled.div`
display:flex;
.left{
    width:30%;
    margin-right:78px;
}
.right{
    width:70%;
}
span{
    display:inline-block;
    color:#4CAF4F;
    font-weight:600;
font-size:20px;
line-height:28px;
font-family: "Inter", sans-serif;
margin-top:16px;
margin-bottom:8px;
}
.side{
display:flex;
align-items:center;
justify-content:space-between;

div{
    width:70%
}
h3{
    color:#4CAF4F;
    font-weight:600;
font-size:20px;
line-height:28px;
font-family: "Inter", sans-serif;
margin-top:36px;
}
}

`