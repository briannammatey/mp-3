import styled from "styled-components";
const StyledTech = styled.section`
    font-family: "Dubai Medium", "serif";`
const StyledRow =
    styled.div`
        width:33%;
        padding-left:10%;
    `
const StyledName = styled.div`font-family: "Dubai Medium", "serif";
     font-size:  calc(2px + 1.8vw);;`
const StyledSection = styled.section`
    margin-top:5%;
    font-family: "Segoe UI Black", "fantasy";
    font-size:calc(2px + 2.5vw);;`
const StyledContainer = styled.div`
    background-color:white;
    margin-top:5%;
    border-radius: 10px;
    width: 70%;
    height: 10%;
    align-items: center;
    margin-left:15%;
    display: flex;
    border: 3px solid #ff006b;
    padding: 3%;
    justify-content: space-between;
    ul{
        list-style: none;

    }
    ul li{
        font-family: "Dubai Medium", "serif";
        font-size:  calc(2px + 1.5vw);
        margin-bottom:2%;
    }
`

const StyledContainer2 = styled.div`
    background-color:white;
    margin-top:5%;
    border-radius: 10px;
    width: 70%;
    height: 10%;
    flex-direction: row;
    margin-left:15%;
    display: flex;
    border: 3px solid #a81af6;
    padding: 3%;
    align-items: flex-start;
    flex-wrap: wrap;
    
    ul{
        list-style: none;
        align-content: space-between;
    }
    ul li{
        font-family: "Dubai Medium", "serif";
        margin-bottom: 1.5%;
    }
`
const StyledHeader = styled.div`
   font-family: "Dubai Medium", "serif";
   font-weight:bold;
   font-size: calc(1px + 1.5vw);;
    text-align: center;
  
`;


export default function Experiences() {
    return (<main>

        <StyledHeader>Experiences</StyledHeader>
        <StyledSection>Skills</StyledSection>
        <StyledContainer2>
            <StyledRow>
                <StyledTech>
                    <h3>Technical Languages</h3>
                </StyledTech>
                <ul id="tech-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>React Native</li>
                    <li>React.js</li>
                    <li>SQL</li>
                </ul>
            </StyledRow>
            <StyledRow>
                <StyledTech>
                    <h3>Tools and Frameworks</h3>
                </StyledTech>

                <ul>
                    <li>Pandas</li>
                    <li>Numpy</li>
                    <li>Matplotlib</li>
                    <li>Sci-kit Learn</li>
                    <li>Flask</li>
                    <li>Tensorflow</li>
                    <li>Pytorch</li>
                    <li>Git</li>
                </ul>
            </StyledRow>
            <div className="row">
                <StyledTech>
                    <h3>Languages</h3>
                </StyledTech>
                <ul>
                    <li>English</li>
                    <li>ASL</li>
                </ul>
            </div>
        </StyledContainer2>
        <StyledSection>Work Experience</StyledSection>
        <StyledContainer>
            <StyledName>Hale Alliance</StyledName>
            <ul>
                <li> June 2025 - August 2025</li>
                <li> New York, New York City</li>
                <li>Business Analyst Intern</li>
                <li>Conducted in-depth research on Jamaica’s hemp industry, analyzing market demand, regulatory
                    frameworks, and long-term economic viability.
                </li>
                <li>Developed a comprehensive business plan and pitch deck to support sustainable hemp farming
                    operations, outlining growth strategies, operational models, and revenue projections.
                </li>
            </ul>
        </StyledContainer>
        <StyledContainer>
            <StyledName> CryptoBites</StyledName>
            <ul>
                <li> June 2025 - August 2025</li>
                <li> Remote</li>
                <li> Software Developer Intern</li>


                <li> - Implemented event-based delivery emails to increase transparency and reduce inquiries by building
                    a SendGrid webhook pipeline with signature checks, idempotency, and retries in the Python/Flask
                    backend
                </li>
                <li> - Improved the address parsing system to handle directional and hyphenated formats, increasing
                    validation accuracy by 28% and reducing failed deliveries caused by formatting errors.
                </li>
            </ul>
        </StyledContainer>
        <StyledContainer>
            <StyledName>
                Geddes Language Center
            </StyledName>
            <ul>
                <li>Boston University</li>
                <li> Media Assistant</li>
                <li>September 2025 - Ongoing</li>

                <li>Assisted teachers and students with classroom setup, technical support, and answering questions to
                    ensure smooth operations.
                </li>
                <li>Organized and facilitated film showings, including equipment setup and troubleshooting.
                </li>
                <li>Maintained and organized the Geddes Language Center, creating an efficient and welcoming
                    environment
                </li>
            </ul>


        </StyledContainer>
        <StyledContainer>
            <StyledName> Lavner Education</StyledName>
            <ul>
                <li>New York University</li>
                <li> Technical Instructor</li>
                <li>June 2024 - September 2024</li>
                <li>Instructed 50+ campers in courses such as Coding with Python, Coding with Java, and more, resulting
                    in an 88% test score improvement rate, enhancing campers' understanding of coding fundamentals and
                    advanced programming concepts.
                </li>
                <li> Facilitated 200+ technical projects specializing in digital art, game development, graphical user
                    interfaces, and object-orientated programming, leading to a 93% completion rate, providing young
                    learners with hands-on experience in creating impressive programming innovations.
                </li>


            </ul>
        </StyledContainer>

        <StyledSection> Extracurriculars</StyledSection>
        <StyledContainer>
            <StyledName>First Year Innovation Fellowship</StyledName>
            <ul>

                <li>Innovation Fellow</li>
                <li>Created a business model and design for an application aimed to assist women struggling with PCOS,
                    to have access to accurate information, helpful guidance, and a supportive community.
                </li>
                <li>Interviewed 170+ participants to understand customer needs, gaining insights into the target
                    market's supply and demand.
                </li>
                <li>Assisted in facilitating business development and entrepreneurship workshops for over 200
                    participants at IDEAcon.
                </li>

            </ul>
        </StyledContainer>
        <StyledContainer>

            <StyledName>
                Spark Mini Hackathon
            </StyledName>
            <ul>

                <li> Team Member</li>
                <li>Collaborated on a web application using HTML, CSS, and JavaScript, providing college students on how
                    to vote based on their state, candidate details, and nearby polling locations
                </li>
                <li>Developed a responsive frontend interface, for out-of-state users to learn the voting process in
                    their university’s location.
                </li>
            </ul>
        </StyledContainer>
        <StyledContainer>
            <StyledName>BreakThrough Tech AI</StyledName>

            <ul>
                <li></li>
                <li>Selected for a national AI/ML fellowship with a 25% acceptance rate, dedicated to expanding
                    representation in tech.
                </li>
                <li>Strengthened foundational knowledge in machine learning by completing 9 hands-on lab projects
                    covering data cleaning, model development, deep learning, and evaluation techniques.
                </li>
                <li>Applied tools such as NumPy, Pandas, Matplotlib, Scikit-Learn, and TensorFlow to analyze datasets,
                    build predictive models, and visualize performance metrics.
                </li>
            </ul>
        </StyledContainer>
        <StyledContainer>
            <StyledName>Women in the Association for Computing Machinery (WACM)</StyledName>
            <ul>
                <li>
                    Selected to serve on the executive board of BU’s Women in ACM chapter, supporting operations for
                    events and mentorship programs focused on equity in computer science.
                </li>
                <li>Organizing new initiatives, including LeetCode practice sessions, mentorship opportunities between
                    undergraduates and graduate students, and multimedia tech projects to encourage creative expression
                    in computer science
                </li>
            </ul>
        </StyledContainer>

        <StyledContainer>
            <StyledName>Innovation Pathways</StyledName>
            <ul>
                <li> Interviewed 300+ participants to understand customer needs and gather market insights, identifying
                    key gaps in wellness solutions for women with PCOS.
                </li>
                <li>Conducted competitor benchmarking and market research using surveys and reports, informing the
                    design of a prototype aligned with real-world user needs.
                </li>
                <li>Developed a functional prototype based on insights and iterative testing with peers, resulting in
                    actionable product recommendations and validated design assumptions.
                </li>
            </ul>
        </StyledContainer>
        <StyledContainer>
            <StyledName>Boston University Questbridge Chapter</StyledName>
            <ul>

                <li>Sophomore Representative</li>
                <li>Designed and collaborated on events to empower underprivileged and low-income students, offering
                    guidance, resources, and support to help them achieve their career goals and adapt to new
                    professional environments.

                </li>
                <li>Organized a Questbridge study break to foster a sense of community for low-income students while
                    providing an opportunity
                </li>

            </ul>
        </StyledContainer>


    </main>);
}