import React, {useEffect, useMemo, useState} from 'react';
import BinarySearchTree from "../utils/binary-search-tree";
import fillBinaryTree from "../utils/fillBinaryTree";

const binaryTree = new BinarySearchTree();

fillBinaryTree(binaryTree);

const Survey = () => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [question, setQuestion] = useState([]);
    const [selections, setSelections] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [resultAnswer, setResultAnswer] = useState('');
    const [currentRoot, setCurrentRoot] = useState(binaryTree.getRoot());
    const [previousRoot, setPreviousRoot] = useState(binaryTree.getRoot());
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const answers = [
            currentRoot?.leftValue,
            currentRoot?.middleValue,
            currentRoot?.rightValue,
        ];

        setAnswers(answers);
    }, []);

    useMemo(() => {
        if (!currentRoot.leftValue && !currentRoot.middleValue && !currentRoot.rightValue) {
            setResultAnswer(currentRoot.value);
        } else {
            setQuestion(currentRoot.value);
        }
    }, [currentRoot, selectedAnswer]);

    const handleSelectChange = ({target}) => {
        setSelectedAnswer(target.value);
        target.value = 'Choose an option';
    }

    const handleButtonClick = () => {
        if(selectedAnswer) {
            binaryTree.find(selectedAnswer, currentRoot, previousRoot, setPreviousRoot, setCurrentRoot, setAnswers, setSelections);
            setErrorMessage('');
        } else {
            setErrorMessage('Пожалуйста, сделайте свой выбор');
        }
    }

    return (
        <>
            {!resultAnswer ?
                <div className="survey-container">
                    <div className="survey-question-headline">{question}</div>
                    <div className="select-control-wrapper">
                        <select name="" id="" className="select-option" onChange={handleSelectChange}>
                            <option value="Choose an option">Choose an option</option>
                            {answers.map(answer =>
                                answer && <option key={answer} value={answer}>{answer}</option>
                            )}
                        </select>
                        {errorMessage && <span className="error-message">{errorMessage}</span>}
                    </div>
                    <button className="questionnaire-start-btn" onClick={handleButtonClick}>Дальше</button>

                    {!!selections.length &&
                    <div className="answers-tree">
                        <h3 className="answers-title">Answers</h3>
                        <ul className="answers-list">{selections.map(selection =>
                            <li key={selection.selectedQuestion} className="selected-question-list-item">
                                <div className="answers-container">
                                    <strong>Предедущий вопрос:</strong> <span className="selected-question-title">{selection.selectedQuestion}</span>
                                    <strong>Предедущий ответ:</strong> <span>{selection.selectedAnswer}</span>
                                </div>
                            </li>
                        )}</ul>
                    </div>
                    }
                </div>
                :
                <div
                    className="answer">Основываясь на ваших ответах можем предложить следуещее:
                    <span>{resultAnswer}</span>
                    {!!selections.length &&
                    <div className="answers-tree">
                        <h3 className="answers-title">Answers</h3>
                        <ul className="answers-list">{selections.map((selection, index) =>
                            <li key={index}>
                                <span>{selection.selectedQuestion}</span> <strong>{selection.selectedAnswer}</strong>
                            </li>
                        )}</ul>
                    </div>
                    }
                </div>
            }
        </>
    );
};

export default Survey;