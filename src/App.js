import './App.css';
import {useState} from "react";
import Survey from "./components/Survey";

function App() {
    const [started, setStarted] = useState(false);
    const handleBtnClick = () => setStarted(true);

    return (
        <div className="App">
            <div className="questionnaire-container">
                {!started
                &&
                <div className="questionnaire-inner">
                    <h1 className="questionnaire-headline">Your vacation problem assistant</h1>
                    <button className="questionnaire-start-btn" onClick={handleBtnClick}>Start</button>
                </div>
                }
                {started && <Survey/>}
            </div>
        </div>
    );
}

export default App;
