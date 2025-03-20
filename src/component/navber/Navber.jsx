import styled from "styled-components";
import Container from "../common/Container"
import NavMenu from "./NavMenu";
import Logo from "../../images/Logo.png"

function Navber(){
    return(
        <>
<Header>
<Container>
        <Flex>
            <img src={Logo} />
            <NavMenu/>
            <Btngroup>
                <span>Login</span>
                <button>Sign Up</button>
            </Btngroup>

        </Flex>
        </Container>
</Header>
        </>
    )
}

export default Navber;

const Flex=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`

const Btngroup=styled.div`
padding:30px 0px;
display:flex;
gap:15px;
align-items:center;
button{
    border-radius: 6px;
background: #4CAF4F;
    padding:10px 20px;
    border:none;
    color:#fff;
}

span{
   color: #4CAF4F;
   font-family: "Inter", sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px;
margin-right:24px;
}


`

const Header=styled.div`
background-color:#F5F7FA;
`