import React from 'react'
import CommunityBox from './CommunityBox'
import Container from "../common/Container"

import club from "../../images/clubs.png"
import member from "../../images/membership.png"
import national from "../../images/national.png"
import styled from 'styled-components'

const CommmunityBoxes = () => {
  return (
    <Container>
        <Sidebyside>
        <CommunityBox icon={member} text="Membership Organisations" />
        <CommunityBox icon={national} text="National Associations" />
        <CommunityBox icon={club} text="Clubs And Groups" />
        </Sidebyside>
    </Container>
  )
}

export default CommmunityBoxes

const Sidebyside=styled.div`

display:flex;
justify-content:space-between;

`