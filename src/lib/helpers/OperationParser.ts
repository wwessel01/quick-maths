const parseOperation = (operation: string) => {
    switch (operation) {
        case "+":
            return "➕";
        case "-":
            return "➖";
        case "*":
            return "✖️";
        case "/":
            return "➗";
        default:
            return "";
    }
}

export default parseOperation;