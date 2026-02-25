
import styled from 'styled-components';
const HeaderWrapper = styled.header`
position: relative;
background-color: mediumpurple;
display: flex;
align-items: center;
justify-content: center;
font-size:calc(2px + 2vw);
color:white;`
const StyledButton = styled.button`
position: absolute;
z-index: 1;
top: 6vh;
background-color: crimson;
border-radius: 33%;`
export default function Header({onLonginClick:any}){
    return(
        <HeaderWrapper>
            <h1>Brianna Matey</h1>
            <p> My online resume</p>
            <StyledButton type = "button" onClick={onLonginClick} ID = "log-in-btn"> Login</StyledButton>
        </HeaderWrapper>
    )
}