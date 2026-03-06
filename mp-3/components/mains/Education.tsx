import styled from "styled-components";

const StyledImage=styled.div  `  display:block;

    border: 5px double #372d2d;
    width:50%; img{width:100%;
        height:auto;
        display: block;}`
const EdContents=styled.div  `
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 5%;
    align-content: space-between;
    margin-left:10%;
    font-family: "Dubai Medium", "serif";
    font-weight: bold;
    ul{
        list-style: none;
        font-size : calc(2px + 1.5vw);
    }

`
const StyledHeader = styled.div`
   font-family: "Dubai Medium", "serif";
   font-weight:bold;
   font-size: calc(1px + 1.5vw);;
    text-align: center;
  
`;

export default function Education(){
    return (<EdContents>
        <StyledHeader>Education</StyledHeader>
        <ul>
            <div className="college-education">
                <div className="college-text">
                    <li>Boston University B.A</li>
                    <li> 2023 - 2027</li>
                    <li> Computer Science & Economics</li>
                </div>
                <StyledImage>
                <img className="logo" src="../../../bu_logo.png" alt="Boston University Logo"/>
                </StyledImage>
            </div>
        </ul>
        <ul>
            <div className="college-education">

                <div className="college-text">
                    <li>Uncommon Leadership Charter High School</li>
                    <li>2019 - 2023</li>
                </div>
                <StyledImage>
                <img className="logo" src="../../../ulc_next.webp" alt="Uncommon Leadership Logo"/>
                    </StyledImage>
                </div>
        </ul>

    </EdContents>)
}