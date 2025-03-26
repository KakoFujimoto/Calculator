/**
 * 電卓クラス
 * ユーザーが入力した値を保持し、計算結果を表示する
 */

export class Calculator {
    private currentValue: string = "0"; // 現在の計算結果
    private isOperatorPressed: boolean = false; // 演算子が押されたかどうか
    private display : HTMLInputElement; // 表示用

    /**
     * コンストラクタ
     * @param {HTMLInputElement} display - 計算結果を表示するためのHTML
     */
    constructor(display:HTMLInputElement){
        this.display = display;
    }
    
    /**
     * 現在の計算結果を取得する
     * @returns {string} 現在の計算結果
     */
    public getCurrentValue():string{
        return this.currentValue;
    }

    /**
     * 現在の値を設定し、表示を更新する
     * @param {string} value - 新しく設定する計算結果 
     */
    public setValue(value:string):void {
        this.currentValue = value;
        this.updateDisplay();
    }


    /**
     * 現在の値に指定した値を追加し、表示を更新する
     * @param {string} value - 追加する値(数字や演算子等) 
     */
    public appendValue(value:string):void{
        this.currentValue += value;
        this.updateDisplay();
    }

    /**
     * 計算結果をリセットし、ディスプレイを初期化する
     */
    public clear():void {
        this.currentValue = "0";
        this.isOperatorPressed = false;
        this.updateDisplay();
    }

    /**
     * 演算子が押された状態状態を設定する
     * @param {boolean} isPressed - 演算子が押されたかどうか
     */
    public setOperatorPressed(isPressed: boolean):void{
        this.isOperatorPressed = isPressed;
    }

    /**
     * 計算結果をディスプレイに反映させる
     */
    public updateDisplay():void {
        this.display.value = this.currentValue;
    }
}