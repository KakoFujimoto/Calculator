import { Command } from "../base/i-command";
import { CommonOperator } from "./common-operator";

/**
 * 引き算コマンド
 */
export class MinusCommand implements Command {
    private operator : CommonOperator;

    /**
     * コンストラクタ
     * @param {CommonOperator} operator - 共通の演算処理を行うクラス
     */
    constructor(operator: CommonOperator){
        this.operator = operator;
    }

    /**
     * 割り算処理を適用する
     */
    execute():void {
        this.operator.applyOperator("-");
    }
}