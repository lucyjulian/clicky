import React from "react";
import "./Title.css";

const Title = props => (
    <div className="top">
        <h1 className="title">{props.children}</h1>
        <h2 className="directions">Test your papaya memory! Try to click on all twelve beautiful papaya images. If you click the same image twice, you lose and the game resets back to 0.</h2>
        <h2 className="scorecard">Score: {props.score} | Highscore: {props.topscore}</h2>
        <h2 className="correct">{props.correctly}!</h2>
    </div>
);

export default Title;
