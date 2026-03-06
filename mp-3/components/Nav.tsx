import {Link} from "react-router";
import styled from "styled-components";
const StyledNav = styled.nav`
width: 30%;;
background-color: #ededed;
    
    
    flex-direction: column;
    display: flex;
@media screen and (max-width: 750px) {
    width:100%;
    flex-direction: row;
    display: flex;
   

}
`;
const StyledList = styled.ul`
display:flex;
    flex-direction: column;
    align-items: center;
    padding-left:0;
    list-style: none;
    margin:0;
    width : 100%; 
    @media screen and (max-width: 750px) {
        flex-direction:row;
        justify-content: space-between;
        align-items: center;
        width:100%;
    }
    ;
`

const StyledListItem = styled.li`
    width: 80%;
    margin: 8% auto;
    padding: 1% 3%;
    border: 1px solid #323131;
    text-align: center;
    @media screen and (max-width: 750px) {
        margin: 1%;
        padding: 1%;
        flex:1;
    }`;

const StyledLink = styled(Link)`
    font:bold  calc(1px + 1.5vw) "Century Gothic", sans-serif;
color:black;
  
text-decoration:none;

@media screen and (max-width: 1000px) {
    font-size:calc(2px + 1vw);
}`




export default function Nav(){
    return (
        <StyledNav>
            <StyledList>
                <StyledListItem><StyledLink to="/">Home</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to ="/education/education.html" >Education</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to ="/experiences/experiences.html" className="nav-link">Experiences</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to = "/projects/projects.html" >Projects</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/achievements/achievements.html" className="nav-link">Acheivements</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/certifications/certifications.html" className="nav-link">Certifications</StyledLink></StyledListItem>


            </StyledList>
        </StyledNav>
    )
}