import { useState } from "react";
import { assets } from "../../assets/assets";
import model from "../../config/gemini";

const Main = () => {
    const [inputValue, setInputValue] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [resultText, setResultText] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false); // resultTEXT loading animation
    const delayPara = (index,nextWord) => { // text deplay display animation
        setTimeout(function () {
            setResultText(prev=>prev+nextWord);
        },50*index)
    }

    const handleSubmit = async (event) => {
        let prompt = inputValue;
        
        // Check if the clicked element is within a card and has a <p> tag
        const closestP = event.currentTarget.querySelector("p");
        if (closestP) {
            prompt = closestP.innerText;
        }
        
        if (!prompt.trim()) return; // Prevent empty submissions

        setRecentPrompt(prompt); // Update recent prompt display
        setSubmitted(true); // Hide cards and show result
        setLoading(true); // Add loader before showing show result

        const result = await model.generateContent(prompt);
        const responseText = await result.response.text();
        let responseArray = responseText.split("**");
        let newResponse;
        for(let i = 0 ; i < responseArray.length; i++)
        {
            if (i === 0 || i%2 !==1) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>"+responseArray[i]+"</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for(let i=0; i<newResponseArray.length; i++)
        {
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+" ")
        }
        setResultText(newResponse2); // Update generated result display
        setLoading(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSubmit(event);
        }
    };

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="User Icon" />
            </div>
            <div className="main-container">
                {!submitted ? (
                    <>
                        <div className="greet">
                            <p><span>Hello, Vilor.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div onClick={handleSubmit} className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="Compass Icon" />
                            </div>
                            <div onClick={handleSubmit} className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="Bulb Icon" />
                            </div>
                            <div onClick={handleSubmit} className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="Message Icon" />
                            </div>
                            <div onClick={handleSubmit} className="card">
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="Code Icon" />
                            </div>
                        </div>
                    </>
                ):(
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                            ?<div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>
                            :<p dangerouslySetInnerHTML={{ __html: resultText }}></p>
                            }
                        </div>
                    </div>
                )}
                <div className="main-bottom">
                    <div className="search-box">
                        <input 
                            type="text" 
                            placeholder="Enter a prompt here" 
                            value={inputValue} 
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <div>
                            <img src={assets.send_icon} onClick={handleSubmit} alt="Send Icon" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;