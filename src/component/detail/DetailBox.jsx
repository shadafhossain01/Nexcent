import React from 'react'
import styled from 'styled-components'



const DetailBox = ({icon,text,pera}) => {
  return (
    <>
        <div className='box'>
        <Sidebyside>
        <div>
            <img src={icon}/>
        </div>
        <div>
            <h6>{text}</h6>
            <p>{pera}</p>
        </div>
        </Sidebyside>
        </div>
    </>
  )
}

export default DetailBox

const Sidebyside=styled.div`
display:flex;
img{
    margin-right:12px;
}
h6{
    color:#4D4D4D;
font-weight:600;
font-size:25px;
font-family: "Inter", sans-serif;
}

p{
    color:#717171;
font-weight:400;
font-size:16px;
line-height:26px;
font-family: "Inter", sans-serif;
}
`