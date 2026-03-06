import {useState} from "react";
import { Link } from "react-router";
import styled from "styled-components";
const StyledNumbers = styled.div`
    
    gap:20px;

`
const StyledFirstNum = styled.div`
    width:10%;
    height:50%;
    padding:2%;

`



const StyledlLastNum = styled.div`
    width:10%;
    height:50%;
    padding:2%;
`
const StyledOperations = styled.div`margin-top:5%;
    
    button{
        width:30%;
        height:20%;
        padding:2%;
        font-size:18px;
        font-family: "Dubai Medium", "serif"`;




const StyledContainer = styled.div`
    background-color:#ededed;
    margin-top:5%;
    border-radius: 10px;
    width: 70%;
    height: 10%;
    align-items: center;
    margin-left:15%;

    border: 3px solid black;
    padding: 6%;
`
const StyledProjectName = styled.div`
    font-size:calc(2px + 1.5vw);
    font-family: "Segoe UI Black", "sans-serif";
`

const StyledDescription = styled.div`
    font-family: "Dubai Medium", "serif";`

const StyledTools = styled.div`
    font-size: calc(2px + 1.5vw);
    display:flex;
    padding:3% 2%;
    text-decoration: none;
    color:rgb(51, 12, 55);
    font-family: "Dubai Medium", "serif";
    background-color: rgb(255, 211, 211);
    border: 2px solid #cf84cc;
    border-radius: 10px;
    gap:2%;
    list-style: none;
`

const StyledOutput =
 styled.div<{$color:string}>
     `color: ${(props) => props.$color}
         margin-top:5%;
         font-family: "Dubai Medium", "serif";
         font-size:25px;
     `

;
const StyledHeader = styled.div`
   font-family: "Dubai Medium", "serif";
   font-weight:bold;
   font-size: calc(1px + 1.5vw);;
    text-align: center;
  
`;

export default function Projects(){
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState(0);
    const [color, setColor] = useState("black");
    function doAdd(){
        const ans = Number(input1)+Number(input2)
        setOutput(ans);

        if(ans < 0){
            setColor("red");
        }else{
            setColor("purple");
        }
    }
    function doSubtract(){
        const ans = Number(input1)-Number(input2)
        setOutput(ans);

        if(ans < 0){
            setColor("red");
        }else{
            setColor("purple");
        }
    }
    function doDivide(){
        const ans = Number(input1)/Number(input2)
        setOutput(ans);

        if(ans < 0){
            setColor("red");
        }else{
            setColor("purple");
        }
    }
    function doMultiply(){
        const ans = Number(input1)*Number(input2)
        setOutput(ans);

        if(ans < 0){
            setColor("red");
        }else{
            setColor("purple");
        }
    }
    function doPower(){
        let ans = 1;
        for(let i = 0; i < Number(input2); i++){
            ans*=Number(input1);
        }

        setOutput(ans);

        if(ans < 0){
            setColor("red");
        }else{
            setColor("purple");
        }

    }


    function clearCalc(){
        setInput1("")
        setInput2("")
        setOutput(0);
    }




    return(
        <main>
            <StyledHeader>Projects</StyledHeader>

            <StyledContainer>
                <StyledProjectName>Calculator</StyledProjectName>
                <StyledDescription>A dynamic Calculator that you can use to solve problems</StyledDescription>
            <label htmlFor="first">first number:</label>
           <StyledNumbers>
            <StyledFirstNum>
            <input
                id={`first`}
                value={input1}
                placeholder={`Enter a number`}
                onChange={(e) => setInput1(e.target.value)}

            /></StyledFirstNum>
            <label htmlFor="second">second number:</label>
            <StyledlLastNum>
               <input
                id={`first`}
                value={input2}
                placeholder={`Enter a number`}
                onChange={(e) => setInput2(e.target.value)}
            />
           </StyledlLastNum>
            <StyledOperations>
                <button onClick={doAdd}>+</button>
                <button onClick={doSubtract}>-</button>
                <button onClick={doDivide}>/</button>
                <button onClick={doMultiply}>*</button>
                <button onClick={doPower}>**</button>

                <button onClick={clearCalc}>Clear</button>

            </StyledOperations>
        </StyledNumbers>

            <StyledOutput $color={color}>
                <h3 id="output">{output}</h3>
            </StyledOutput>
            </StyledContainer>
            <StyledContainer>
                <StyledProjectName>Spotter</StyledProjectName>
                <StyledDescription>A Boston University fitness app that allows users to log in their workouts,
                    search for nearby workout classes, and create challenges with your friends</StyledDescription>
                <StyledTools>
                    <li>Python</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>OpenAI API</li>
                    <li>Flask</li>
                    <li>MongoDB</li>

                </StyledTools>
                <Link to ="https://github.com/briannammatey/Spotter"><p>Spotter Project Link </p></Link>
            </StyledContainer>

            <StyledContainer>
                <StyledProjectName>Mitosis Detector</StyledProjectName>
                <StyledDescription> A machine learning project which detects mitosis in breast cancer cells.</StyledDescription>
                <StyledTools>
                    <li>Python</li>
                    <li>Pytorch</li>
                    <li>MediaPipe</li>

                    <li>Deeplabv3-resnet</li>
                    <li>Midnight</li>


                </StyledTools>
                <Link to="https://github.com/briannammatey/mitosis_detector"><p>Mitosis Detector Link </p>
                </Link>
            </StyledContainer>
            <StyledContainer>
                <StyledProjectName>FashionForward</StyledProjectName>
                <StyledDescription>Collaborated project that won first place for best use of Gemini API in
                    BostonHacks hackthon, generates clothes from websites based on user inpput, and predict next seasons
                    trends</StyledDescription>
                <StyledTools>
                    <li>React native</li>
                    <li>Typescript</li>
                    <li>Tailwind CSS</li>
                    <li>Javascript</li>
                    <li>Gemini API</li>

                </StyledTools>
                <Link to="https://github.com/briannammatey/bostonhacks2025"><p>Fashion forward</p></Link>
            </StyledContainer>

            <StyledContainer>
                <StyledProjectName>American Sign Language Tracker</StyledProjectName>
                <StyledDescription> A machine learning model that uses CNN classification to train, test and
                    learn patterns to predict letters users may do.</StyledDescription>
                <StyledTools>
                    <li>Python</li>
                    <li>Tensorflow</li>
                    <li>MediaPipe</li>
                    <li>schikit-learn</li>
                    <li>Matplotlib</li>
                    <li>Pandas</li>

                </StyledTools>
                <Link to="https://github.com/briannammatey/ASLTracker"><p>ASL Project Link </p></Link>
            </StyledContainer>
            <StyledContainer>
                <StyledProjectName>Rubie Wellness for PCOS</StyledProjectName>
                <StyledDescription> An ongoing Application planned to help teenagers and young adults with PCOS
                    find a community, and get proffessional guidance and support. </StyledDescription>
                <StyledDescription>*Ongoing Project </StyledDescription>
                <StyledTools>
                    <li>React Native</li>


                </StyledTools>
                <Link to="https://github.com/briannammatey/Rubie"><p>Rubie Project Link </p></Link>
            </StyledContainer>

            <StyledContainer>
                <StyledProjectName>AirBNB ratings prediction Link</StyledProjectName>
                <StyledDescription>This project is a Machine Learning model that predicts Airbnb property review
                    scores based on features such as host details, listing attributes, and pricing information. </StyledDescription>

                <StyledTools>
                    <li>Pandas</li>
                    <li>Numpy</li>
                    <li>Matplotlib</li>
                    <li>schikit-learn</li>


                </StyledTools>
                <Link to ="https://github.com/briannammatey/AirBNBRatingsPrediction"><p>AirBNB Ratings
                    Prediction</p></Link>
            </StyledContainer>
            <StyledContainer>
                <StyledProjectName>Wordle</StyledProjectName>
                <StyledDescription> A fully functional, browser-based clone of the popular game Wordle, built
                    from scratch using HTML, CSS, and JavaScript. This project replicates the core gameplay experience,
                    offering a clean interface, responsive design, and interactive feedback for each guess.</StyledDescription>

                <StyledTools>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>


                </StyledTools>
                <Link to="https://github.com/briannammatey/Wordle"><p>Wordle Prediction Link</p></Link>
            </StyledContainer>


        </main>

    );
}