import { Command } from "../base/i-command";
import { Calculator } from "../../calculator/context";

/**
 * 数字ボタンのコマンド
 */
export class NumberCommand implements Command {
    private calculator:Calculator;
    private value:string;

    /**
     * @param {Calculator} calculator - 電卓インスタンス 
     * @param {string} value - 数字ボタンの値 
     */
    constructor(calculator: Calculator, value:string){
        this.calculator = calculator;
        this.value = value;
    }

    /**
     * 数字をディスプレイに追加する
     */
    execute(): void {
        this.calculator.execute(this.value);
    }
}