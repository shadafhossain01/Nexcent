import styled from "styled-components"
import Container from "../common/Container"
import SectionHeading from "../common/SectionHeading"
import SectionPera from "../common/SectionPera"
import { Company } from "./Company"


const Client = () => {
  return (
    <ClientSection>
 <Container>
<SectionHeading> Our Clients  </SectionHeading>
<SectionPera> We have been working with some Fortune 500+ clients </SectionPera>
<Company/>
</Container>   
    </ClientSection>

  )
}

export default Client

const ClientSection=styled.section`
margin:40px 0px;
p{
    text-align:center;
}
`
