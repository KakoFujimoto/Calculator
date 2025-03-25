"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandBuilder = void 0;
var buildcommand_context_1 = require("./buildcommand-context");
/** ボタン押されたコマンドから計算コマンドの生成 */
var CommandBuilder = /** @class */ (function () {
    function CommandBuilder() {
    }
    CommandBuilder.prototype.buildCommand = function (commands) {
        var context = new buildcommand_context_1.Context();
        commands.forEach(function (c) { return c.execute(context); });
        return context.getCommands();
    };
    CommandBuilder.prototype.buildDisplayCommand = function (commands) {
        var context = new buildcommand_context_1.Context();
        commands.forEach(function (c) { return c.execute(context); });
        return context.getValue();
    };
    return CommandBuilder;
}());
exports.CommandBuilder = CommandBuilder;
