import { Calculator } from "../calculator/context";
import { NumberCommand } from "../commands/button/number-command";
import { ClearCommand } from "../commands/button/clear-command";
import { EqualCommand } from "../commands/op/equal-command";
import { PlusCommand } from "../commands/op/plus-command";
import { MinusCommand } from "../commands/op/minus-command";
import { MultiplyCommand } from "../commands/op/multiply-command";
import { DevideCommand } from "../commands/op/divide-command";
import { CommonOperator } from "../commands/op/common-operator";


/**
 * ページ読み込み完了時に、電卓のイベントリスナーを設定
 */
document.addEventListener("DOMContentLoaded", () => {
    // 電卓のディスプレイ要素を取得
    const display = document.querySelector(".display") as HTMLInputElement;

    // 電卓インスタンスを作成
    const calculator = new Calculator(display);

    // 共通演算処理クラスのインスタンスを作成
    const operator = new CommonOperator(calculator);

    /**
     * 全てのボタンにクリックイベントを登録
     */
    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value")!;
            let command;

            /**
             * 押されたボタンの値に応じてコマンドを作成
             */
            switch(value){
                case "+":
                    command = new PlusCommand(operator);
                    break;
                case "-":
                    command = new MinusCommand(operator);
                    break;
                case "*":
                    command = new MultiplyCommand(operator);
                    break;
                case "/":
                    command = new DevideCommand(operator);
                    break;
                case "=":
                    command = new EqualCommand(operator);
                    break;
                case "C":
                    command = new ClearCommand(calculator);
                    break;
                default:
                    command = new NumberCommand(calculator, value);
                    break;
            }

            // コマンド実行
            command.execute();
        })
    })
})
