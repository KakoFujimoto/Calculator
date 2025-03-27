import { Calculator } from "../../calculator/context";

/**
 * 演算子適用の共通クラス
 */
export class CommonOperator{
    private calculator:Calculator;

    /**
     * 
     * @param {Calculator} calculator -　電卓インスタンス
     */
    constructor(calculator:Calculator){
        this.calculator =calculator;
    }

    /**
     * 指定した演算子を現在の数式に追加する
     * @param {string} operator - 追加する演算子(+,=等)
     */
    applyOperator(operator: string):void{
        const currentExpression = this.calculator.getCurrentValue();
        if(!currentExpression) return;

        this.calculator.setValue(currentExpression + operator);
    }

    /**
     * 現在の値を取得する
     * @returns {string} 現在の値
     */
    getCurrentValue():string {
        return this.calculator.getCurrentValue();
    }

    /**
     * 計算結果を設定する
     * @param {string} value - 設定する値
     */
    setValue(value:string):void{
        this.calculator.setValue(value);
    }
}
