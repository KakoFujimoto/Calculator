"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var command_executor_1 = require("./command-executor");
/** コマンドを実行して計算する */
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    /** 計算実行 */
    Calculator.prototype.execute = function (commands) {
        var executor = new command_executor_1.CommandExecutor();
        for (var i = 0; i < commands.length; ++i) {
            var c = commands[i];
            c.execute(executor);
        }
        return executor.result();
    };
    return Calculator;
}());
exports.Calculator = Calculator;
