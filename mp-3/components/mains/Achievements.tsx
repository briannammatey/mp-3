import styled from "styled-components";

const StyledAchievements =styled.div `
ul{list-style:none;
    
    color: rgb(124, 88, 2);
    align-content: center;
    
    font-weight: bold;
}
    li{
        margin-top:2%;
        margin-left: 5%;
        list-style:none;
        font-size:  calc(1px + 1.80vw);;
        font-family: "Dubai Medium", "serif";
        
    }
    
`
const StyledTitle =styled.div`
    font-size:  calc(1px + 1.80vw);
    text-align: center;
    font-weight: bold;
    font-family: "Dubai Medium", "serif";
`

export default function Achievements() {
    return (<main>
        <StyledTitle>Achievements!</StyledTitle>
        <div id="achievements">
            <StyledAchievements>
                <li> ★ Certificate in Machine Learning Foundation</li>
                <li>★ Hackathon winner in BostonHacks 2025</li>
                <li> ★ Featured on Innovate @BU Black History Month</li>
                <li> ★ Art featured during Juneteeth at BU Arts Initiative</li>
                <li> ★ Participated in 5 Hackathons and Competitions</li>
                <li> ★ Questbridge Finalist</li>
                <li> ★ Deans List</li>


            </StyledAchievements>
        </div>
    </main>)
}