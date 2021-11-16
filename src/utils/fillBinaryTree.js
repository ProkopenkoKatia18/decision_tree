import surveyQuestions from '../data/survey-questions.json';

export default function fillBinaryTree (binaryTree) {
    const questions = surveyQuestions[0];
    Object.entries(questions).map(([key, object]) => binaryTree.insert(object));
}
