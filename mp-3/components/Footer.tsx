import {Link} from "react-router";
import styled from "styled-components";
const StyledFooter = styled.footer`
    padding: 1%;
    text-align: center;
    font-size: calc(1px+ 1vh);
`
export default function Footer() {
    return(

        <StyledFooter><p>All rights reserved  <Link to ="" > Credits</Link>&#169; </p>


        </StyledFooter>
    );
}