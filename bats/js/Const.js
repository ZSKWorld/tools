"use strict";
exports.__esModule = true;
exports.MODIFY_TIP = exports.UserDataEventPath = exports.UserDataPath = exports.NetResponsePath = exports.ServiceObjPath = exports.ServicesPath = exports.NetworkDir = exports.NetDir = exports.LangPath = exports.TableStructTypePath = exports.TablesCfgDir = exports.TableDataPath = exports.xlsxDir = exports.ViewInterfacePath = exports.ViewRegisterPath = exports.ViewIDPath = exports.ResPathPathNoExt = exports.ResPathPath = exports.ViewNetProcessorDir = exports.ViewCtrlDir = exports.ViewDir = exports.UiDir = exports.ResDir = exports.UtilPath = exports.__workname = void 0;
var path_1 = require("path");
exports.__workname = process.cwd();
exports.UtilPath = (0, path_1.resolve)(exports.__workname, "src/core/libs/utils/Util.ts");
exports.ResDir = (0, path_1.resolve)(exports.__workname, "bin/res");
exports.UiDir = (0, path_1.resolve)(exports.__workname, "src/core/ui/ui");
exports.ViewDir = (0, path_1.resolve)(exports.__workname, "src/core/ui/view");
exports.ViewCtrlDir = (0, path_1.resolve)(exports.__workname, "src/core/ui/viewCtrl");
exports.ViewNetProcessorDir = (0, path_1.resolve)(exports.__workname, "src/core/ui/viewNetProcessor");
exports.ResPathPath = (0, path_1.resolve)(exports.__workname, "src/core/common/ResPath.ts");
exports.ResPathPathNoExt = (0, path_1.resolve)(exports.__workname, "src/core/common/ResPath");
exports.ViewIDPath = (0, path_1.resolve)(exports.__workname, "src/core/ui/core/ViewID.ts");
exports.ViewRegisterPath = (0, path_1.resolve)(exports.__workname, "src/core/ui/core/ViewRegister.ts");
exports.ViewInterfacePath = (0, path_1.resolve)(exports.__workname, "src/core/ui/core/Interfaces.ts");
exports.xlsxDir = (0, path_1.resolve)(exports.__workname, "../策划");
exports.TableDataPath = (0, path_1.resolve)(exports.__workname, "bin/res/table/Config.json");
exports.TablesCfgDir = (0, path_1.resolve)(exports.__workname, "src/core/table");
exports.TableStructTypePath = (0, path_1.resolve)(exports.__workname, "src/core/table/TableStructTypes.d.ts");
exports.LangPath = (0, path_1.resolve)(exports.__workname, "src/core/table/LangCode.ts");
exports.NetDir = (0, path_1.resolve)(exports.__workname, "src/core/net");
exports.NetworkDir = (0, path_1.resolve)(exports.NetDir, "network");
exports.ServicesPath = (0, path_1.resolve)(exports.NetDir, "Services.ts");
exports.ServiceObjPath = (0, path_1.resolve)(exports.NetDir, "ServiceObj.ts");
exports.NetResponsePath = (0, path_1.resolve)(exports.NetDir, "NetResponse.ts");
exports.UserDataPath = (0, path_1.resolve)(exports.NetworkDir, "Interface.d.ts");
exports.UserDataEventPath = (0, path_1.resolve)(exports.__workname, "src/core/userData/UserDataEvent.ts");
exports.MODIFY_TIP = "/**This is automatically generated by BatMain.bat , please do not modify */\n";