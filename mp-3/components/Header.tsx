import styled from "styled-components";

export default function Header() {

    const StyledHeader = styled.header`
        font-family: "Segoe UI Black", "Roboto Light", sans-serif;
       
        font-size: calc(2px + 1.0vw);
        background-color: #f2c1f4;
        text-align: left; /* default for large screens */

        @media screen and (max-width: 750px) {
            text-align: center; /* for small screens */
        }
    `
    return(
        <StyledHeader>
            <h1>♡ Brianna's Resume Portfolio ♡ </h1>
            <p > Welcome to my great portfolio </p>

        </StyledHeader>
    )

}