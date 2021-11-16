class Node {
    constructor(data) {
        this.value = data.question; // Question
        this.left = null;
        this.middle = null;
        this.right = null;

        this.leftValue = data?.answers?.left || null;
        this.middleValue = data?.answers?.middle || null;
        this.rightValue = data?.answers?.right || null;

        this.parentValue = data.parentAnswer || null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (node.leftValue && (newNode.parentValue == node.leftValue)) {
            node.left = newNode;
            return;
        } else if (node.rightValue && (newNode.parentValue == node.rightValue)) {
            node.right = newNode;
            return;
        } else if (node.middleValue && (newNode.parentValue == node.middleValue)) {
            node.middle = newNode;
            return;
        } else {
            if (node.left) {
                this.insertNode(node.left, newNode);
            }

            if (node.right) {
                this.insertNode(node.right, newNode);
            }

            if (node.middle) {
                this.insertNode(node.middle, newNode);
            }

            return;
        }
    }

    getRoot() {
        return this.root;
    }

    find(selectedAnswer, currentRoot, previousRoot, setPreviousRoot, setCurrentRoot, setAnswers, setSelections) {
        if (!this.root) return false;

        console.log('currentRoot', currentRoot);
        console.log('prevRoot', previousRoot);

        setSelections(prev => [...prev, {selectedQuestion: currentRoot.value, selectedAnswer}]);

        if (selectedAnswer == currentRoot.leftValue) {
            const value = currentRoot.left;
            setPreviousRoot(currentRoot);
            setCurrentRoot(value);

            const answers = [
                value?.leftValue,
                value?.middleValue,
                value?.rightValue,
            ];

            setAnswers(answers);
        }

        if (selectedAnswer == currentRoot.rightValue) {
            const value = currentRoot.right;
            setCurrentRoot(value);

            const answers = [
                value?.leftValue,
                value?.middleValue,
                value?.rightValue,
            ];

            setAnswers(answers);

        }

        if (selectedAnswer == currentRoot.middleValue) {
            const value = currentRoot.middle;
            setCurrentRoot(value);

            const answers = [
                value?.leftValue,
                value?.middleValue,
                value?.rightValue,
            ];

            setAnswers(answers);
        }

        if (selectedAnswer == 'Нету') {
            const value = previousRoot.middle;
            setCurrentRoot(value);

            const answers = [
                value?.leftValue,
                value?.middleValue,
                value?.rightValue,
            ];

            setAnswers(answers);
        }

        if (selectedAnswer == 'Нет, не достаточно' || selectedAnswer == 'Нет, несколько') {
            const value = previousRoot.left;
            setCurrentRoot(value);

            const answers = [
                value?.leftValue,
                value?.middleValue,
                value?.rightValue,
            ];

            setAnswers(answers);
        }
    }
}

export default BinarySearchTree;