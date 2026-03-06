import styled from "styled-components";
const StyledImage=styled.div  `  display:block;

    border: 5px double #372d2d;
    width:50%; img{width:100%;
        height:auto;
        display: block;}`
const StyledCertifications = styled.div`
ul{
    list-style: none;
}
    ul li{
        font-family: "Dubai Medium", "serif";

        font-size: calc(2px + 2.0vw);
        margin-bottom:2%;
        margin-top:2%;
        font-weight:bold;
    }
`
const StyledHeader = styled.div`
   font-family: "Dubai Medium", "serif";
   font-weight:bold;
   font-size: calc(1px + 1.5vw);;
   
    text-align: center;
`;
export default function Certifications() {
    return (<main>
        <StyledHeader>Certifications</StyledHeader>
        <StyledCertifications>
            <ul>
                <li className="cert_n">CodePath's Technical Interview Prep 101</li>
                <StyledImage>
                <img className="cert" src="../../codepath.png" alt="CodePath's Technical Interview Prep 101 Certificate"/>
                </StyledImage>
                <li className="cert_n"> Machine Learning Foundations at Cornell University</li>
                <StyledImage>
                <img className="cert" src="../../cornellu.png"
                     alt=" Machine Learning Foundations at Cornell University Certificate"/>
                </StyledImage>

            </ul>
        </StyledCertifications>

    </main>);
}