"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandExecutor = void 0;
var CommandExecutor = /** @class */ (function () {
    function CommandExecutor() {
        /** 計算に渡す数値 */
        this.stack = [];
    }
    /** 設定されている計算処理を行う */
    CommandExecutor.prototype.executeOperation = function () {
        if (this.operation) {
            // 前から2つの数値を取り出す
            // TODO: 2項の演算子しか設定できない -> 正負の反転などの単項の処理はこのままではできない
            var lhs = this.stack.shift();
            var rhs = this.stack.shift();
            console.log('exec:', lhs, rhs);
            this.stack.push(this.operation(lhs, rhs));
        }
    };
    /** 計算処理を設定 */
    CommandExecutor.prototype.setOperation = function (op) {
        this.operation = op;
    };
    /** 計算用数値を追加 */
    CommandExecutor.prototype.addStack = function (value) {
        this.stack.push(value);
    };
    CommandExecutor.prototype.result = function () {
        return this.stack.shift();
    };
    return CommandExecutor;
}());
exports.CommandExecutor = CommandExecutor;
