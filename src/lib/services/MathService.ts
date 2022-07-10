import type Expression from "src/models/Expression";
import axios from "axios"
import { ExpressionType } from "../enums/ExpressionType";
import { max } from "../stores";

let validMax: number;
const unsubscribe = max.subscribe(value => {
    if(value < 100 && value > 1) validMax = value;
	else validMax = 99;
});

export default class MathService {
    private static getRandomExpression = async () => {
        return await (await axios.get('https://x-math.herokuapp.com/api/random' + `?max=${validMax}`)).data as Expression;
    }

    private static getAdditionExpression = async () => {
        return await (await axios.get('https://x-math.herokuapp.com/api/add' + `?max=${validMax}`)).data as Expression;
    }

    private static getSubtractionExpression = async () => {
        return await (await axios.get('https://x-math.herokuapp.com/api/sub' + `?max=${validMax}`)).data as Expression;
    }

    private static getMultiplicationExpression = async () => {
        return await (await axios.get('https://x-math.herokuapp.com/api/mul' + `?max=${validMax}`)).data as Expression;
    }

    private static getDivisionExpression = async () => {
        return await (await axios.get('https://x-math.herokuapp.com/api/div' + `?max=${validMax}`)).data as Expression;
    }

    private static parseExpressionFunctionType = (type: ExpressionType) => {
        switch (type) {
            case ExpressionType.addition:
                return this.getAdditionExpression;
            case ExpressionType.subtraction:
                return this.getSubtractionExpression;
            case ExpressionType.multiplication:
                return this.getMultiplicationExpression;
            case ExpressionType.division:
                return this.getDivisionExpression;
            default:
                return this.getRandomExpression;
        }
    }

    public static getExpressions = async (count: number, type: ExpressionType) => {
        let expressionFunction = this.parseExpressionFunctionType(type);
        let expressions = [];
        for (let i = 0; i < count; i++) {
            expressions.push(await expressionFunction());
        }
        return expressions;
    }
}