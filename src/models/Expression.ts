export default class Expression{
    first: number;
    second: number;
    operation: string;
    expression: string;
    answer: number;

    constructor(first: number, second: number, operation: string, expression: string, answer: number){
        this.first = first;
        this.second = second;
        this.operation = operation;
        this.expression = expression;
        this.answer = answer;
    }
}