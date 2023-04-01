import * as readline from "readline";
import { BuildBase } from "./BuildBase";
import BuildNet from "./BuildNet";
import { BuildProxy } from "./BuildProxy";
import BuildResPath from "./BuildResPath";
import BuildServerTable from "./BuildServerTable";
import BuildTable from "./BuildTable";
import BuildTable_XY from "./BuildTable_XY";
import BuildView from "./BuildView";
import { Logger } from "./Console";

interface Act {
    desc: string,
    cls: new () => BuildBase;
}

export default class BatMain {
    constructor() {
        const act: Act[] = [
            { desc: "创建 View & ViewCtrl", cls: BuildView },
            { desc: "创建 Proxy", cls: BuildProxy },
            { desc: "导出表配置", cls: BuildTable },
            { desc: "导出服务器表配置", cls: BuildServerTable },
            { desc: "更新资源路径", cls: BuildResPath },
            { desc: "更新网络相关", cls: BuildNet },
            { desc: "小严的表", cls: BuildTable_XY },
        ];
        let tip = "选择要进行的操作：\n0. 全部执行\n";
        act.forEach((v, index) => tip += `${ index + 1 }. ${ v.desc }\n`);
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const question = () => {
            rl.question(tip, function (prompt) {
                let index = +prompt;
                if (Number.isNaN(index) == false && (index && act[ index - 1 ] || !index)) {
                    index -= 1;
                    const acts: Act[] = [];
                    if (index == -1) acts.push(...act);
                    else acts.push(act[ index ]);
                    acts.length && acts.forEach(v => {
                        Logger.warn("正在执行 => " + v.desc);
                        (new v.cls()).doBuild();
                        Logger.green(v.desc + " => 执行完毕！")
                    });
                } else {
                    Logger.error("错误的选项！");
                }
                rl.close();
                process.exit();
                // question();
            });
        }
        question();


        //动态require js
        // const util = require("../js/Utils").GetTemplateContent("View");

        //文件名或者目录名
        //path.basename
        //文件或目录所在目录
        //path.dirname
        //文件后缀，目录为空
        //path.extname
    }
}
new BatMain();