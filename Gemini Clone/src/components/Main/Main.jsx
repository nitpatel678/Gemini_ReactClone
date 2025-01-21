import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assests/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img
          src="https://avatars.githubusercontent.com/u/151562820?v=4"
          alt=""
        />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, User</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest some best jobs online for college students</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Suggest some interesting AI or web development projects for
                  beginners.
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>How can I start investing while studying in college?</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>What are some quick tips to improve focus and concentration?</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src="https://avatars.githubusercontent.com/u/151562820?v=4" alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon}/>
              {loading?<div className="loader">
                <hr/>
                <hr/>
                <hr/>
              </div>:
              <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your data is safe with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
