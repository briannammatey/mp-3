import styled from "styled-components";

const StyledMain=styled.main`
    width: 70%;
    background-color:  #f3d5fb;
    
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    
    @media screen and (max-width: 1000px){
        flex-direction: column;
        width: 100%;
    }
    
`;
const StyledInfo = styled.div`
    
        font-size: calc(2px + 1.5vw);;
        margin-top: 2%;
    font-family: "Dubai Medium";
    ;
    `
const StyledMainContent=styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    margin-left: 3%;
    margin-top:5%;
`
const StyledMainInfo=styled.div`
    list-style: none;
    font-size: calc(1px + 1.3vw);

padding:1%;
font-family: "Dubai Medium", "serif"; 
font-weight: bold;
`




const StyledMainInfoList=styled.div`
    margin-bottom:5%;
    font-family: "Dubai Medium", "serif";
    font-weight:bold;
    font-size: calc(2px + 2.1vw);;
    flex-wrap: wrap;
    padding-left:8%;

    color: #372d2d;`
const StyledTitle=styled.div`
    font-family: "Segoe UI Black", fantasy;;
`


const StyledImage=styled.div  `  display:block;

    border: 5px double #372d2d;
    width: 100%; img{width:100%;
        height:auto;
        display: block;
    }
    
`
const StyledAbout=styled.div  `
    width: 100%;
    
    text-align: center;
    @media screen and (max-width:1000px){
        flex-direction: column;
        width: 100%;
        height: auto;
        align-items: center;
        margin-left: 0%;
        font-size: calc(4px + 5vw);
        
        
    }

`
const StyledHeader = styled.div`
    font-family: "Dubai Medium", "serif";
    font-weight:bold;
    font-size: calc(1px + 1.5vw);;
    text-align: center;
`;

export default function Home() {
    return (<StyledMain>
            <StyledHeader>Home</StyledHeader>
            <StyledTitle>

            <h1>Hi! My name is Brianna Matey</h1>
            </StyledTitle>
            <StyledMainContent>
                <StyledImage>
                <img  src="../../brianna_matey.jpeg" alt="Brianna Matey"/>  </StyledImage>
                <StyledMainInfo>
                    <StyledMainInfoList> ︎ Computer Science & Economics Undergrad ︎</StyledMainInfoList>
                    <StyledMainInfo> Student at Boston University ︎</StyledMainInfo>
                    <StyledMainInfo> Aspiring Full-Stack Engineer ︎</StyledMainInfo>
                    <StyledMainInfo> ︎Artist ︎</StyledMainInfo>
                </StyledMainInfo>
            </StyledMainContent>
            <StyledAbout>
                <StyledInfo> <strong>About Me!</strong></StyledInfo>

                <StyledInfo> My name is Brianna Matey, and I am currently a junior at Boston University
                    studying <strong>Computer Science & Economics</strong></StyledInfo>
                <StyledInfo> My interests alligns with <strong>Full Stack Development, AI/ML, IOS/Android
                    Devlopment</strong></StyledInfo>
                <StyledInfo> Also I am also interested in Entreprenuership, and solving issues related
                    to <strong>Accessibility, Health, and Education</strong></StyledInfo>
                <StyledInfo>Fun Fact: I love to paint self portraits of myself</StyledInfo>

            </StyledAbout>
        </StyledMain>
    );
}