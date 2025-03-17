import React from 'react'

import client1 from "../../images/client1.png"
import client2 from "../../images/client2.png"
import client3 from "../../images/client3.png"
import client4 from "../../images/client4.png"
import client5 from "../../images/client5.png"
import client6 from "../../images/client6.png"
import client7 from "../../images/client7.png"
import styled from 'styled-components'


export const Company = () => {
  return (
    <Imgdiv>
        <img src={client1} />
        <img src={client2} />
        <img src={client3} />
        <img src={client4} />
        <img src={client5} />
        <img src={client6} />
        <img src={client7} />
    </Imgdiv>
    
  )
}

const Imgdiv=styled.div`
display:flex;
margin-top:36px;
justify-content:space-between;
`