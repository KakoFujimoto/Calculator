import { Command } from "../base/i-command";
import { CommonOperator } from "./common-operator";

/**
 * 等号(=)を実行するコマンド
 */
export class EqualCommand implements Command {
    private operator :CommonOperator;

    /**
     * コンストラクタ
     * @param {CommonOperator} operator - 共通の演算処理を行うクラス
     */
    constructor(operator:CommonOperator){
        this.operator = operator;
    }

    /**
     * 等号処理を適用する
     * @returns 
     */
    execute(): void {
        try {
            const currentExpression = this.operator.getCurrentValue();
            if(!currentExpression) return;

            const result = new Function("return" + currentExpression)();
            
            this.operator.setValue(result.toString());
        } catch(error){
            this.operator.setValue("Error");
        }
    }
}