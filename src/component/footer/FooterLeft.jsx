import React from 'react'
import Logo from "../../images/FooterLogo.png"
import styled from 'styled-components'
import ins from "../../images/ins.png"
import dribble from "../../images/dribble.png"
import twitter from "../../images/twitter.png"
import yt from "../../images/yt.png"


const FooterLeft = () => {
  return (
    <Wrapper>
        <img src={Logo}/>
    <p> Copyright © 2025 Nexcent ltd. </p>
    <p> All rights reserved </p>
    <SidebySide>
    <img src={ins}/>
    <img src={dribble}/>
    <img src={twitter}/>
    <img src={yt}/>
    </SidebySide>
    </Wrapper>
  )
}

export default FooterLeft

const Wrapper=styled.div`
margin-right:280px;
p{
    color:#F5F7FA;
    font-weight:400;
    font-size:13px;
    line-height:25px;
    font-family: "Inter", sans-serif;

}

img{
    margin-bottom:30px;
}

`

const SidebySide=styled.div`
display:flex;
column-gap:16px;
margin-top:30px;
`