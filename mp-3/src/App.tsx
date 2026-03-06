
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Nav from "../components/Nav.tsx";
import Home from "../components/mains/Home.tsx";
import Education from "../components/mains/Education.tsx";
import Experiences from "../components/mains/Experiences.tsx";
import Certifications from "../components/mains/Certifications.tsx";
import Achievements from "../components/mains/Achievements.tsx";
import styled from "styled-components";
import Projects from "../components/mains/Projects.tsx";

const StyledWrapper=styled.div`
    width: 80vw;
    margin: 0 auto;
    background-color: #f3d5fb;
    min-height: 100vh;
    @media screen and (max-width: 1000px) {
       flex:1;
    }


`;
const StyledMainContent = styled.div`
width: 70%;
`;

const StyledContainer=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;



function Root(){
    return (
        <StyledWrapper>
        <Header />
<StyledContainer>
        <Nav/>
<StyledMainContent>

            <Routes>
                <Route
                    path={`/`}
                    element={<Home/>}
                />
                <Route
                    path={`/education/education.html`}
                    element={<Education/>}
                />
                <Route
                    path={`/experiences/experiences.html`}
                    element={<Experiences/>}
                />
                <Route path = {'footer/footer'}
                       element  = {<Footer/>}/>
                <Route path = {'/certifications/certifications.html'}
                       element = {<Certifications/>}/>
                <Route
                    path={`/achievements/achievements.html`}
                    element={<Achievements/>}
                />
                <Route
                    path={`/projects/projects.html`}
                    element={<Projects/>}
                />

            </Routes>
</StyledMainContent>
</StyledContainer>
            <Footer/>
        </StyledWrapper>
    )
}
const router = createBrowserRouter(
    [{path : "*", Component: Root}]
)
export default function App(){
    return (<>
    <RouterProvider router = {router}/>
        </>
        )

}

