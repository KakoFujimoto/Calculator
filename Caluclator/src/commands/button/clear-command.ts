import { Command } from "../base/i-command";
import { Calculator } from "../../calculator/context";

/**
 * クリアボタンのコマンド
 */
export class ClearCommand implements Command {
    private calculator: Calculator;

    /**
     * @param {Calculator} calculator - 電卓インスタンス 
     */
    constructor(calculator: Calculator){
        this.calculator = calculator;
    }

    /**
     * 電卓のディスプレイをクリアする
     */
    execute(): void {
        this.calculator.clear();
    }
}