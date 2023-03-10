// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common.emevd N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\m60.emevd N:\GR\data\Param\event\common_macro.emevd 
// @linked    [0,72,154,220]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1046400701);
    InitializeCommonEvent(1, 9008000, 1046400101);
    InitializeCommonEvent(2, 9008000, 1046400950);
    InitializeCommonEvent(3, 9008000, 1046400100);
    InitializeCommonEvent(4, 9008000, 1046400951);
    InitializeCommonEvent(5, 9008000, 1046400201);
    InitializeCommonEvent(6, 9008000, 1046400202);
    InitializeCommonEvent(7, 9008000, 1046400102);
    InitializeCommonEvent(8, 9008000, 1046400103);
    InitializeCommonEvent(9, 9008000, 1046400104);
    InitializeCommonEvent(10, 9008000, 1046400105);
    InitializeCommonEvent(11, 9008000, 1046400106);
    InitializeCommonEvent(12, 9008000, 1046400107);
    InitializeCommonEvent(13, 9008000, 1046400108);
    InitializeCommonEvent(14, 9008000, 1046400109);
    InitializeCommonEvent(15, 9008000, 1046400212);
    InitializeCommonEvent(16, 9008000, 1046400213);
    InitializeCommonEvent(17, 9008000, 1046400214);
    InitializeCommonEvent(18, 9008000, 1046400215);
    InitializeCommonEvent(19, 9008000, 1046400216);
    InitializeCommonEvent(20, 9008000, 1046400217);
    InitializeCommonEvent(21, 9008000, 1046400110);
    InitializeCommonEvent(22, 9008000, 1046400301);
    InitializeCommonEvent(23, 9008000, 1046400111);
    InitializeCommonEvent(24, 9008000, 1046400303);
    InitializeCommonEvent(25, 9008000, 1046400304);
    InitializeCommonEvent(26, 9008000, 1046400300);
    InitializeCommonEvent(27, 9008000, 1046400112);
    InitializeCommonEvent(28, 9008000, 1046400113);
    InitializeCommonEvent(29, 9008000, 1046400114);
    InitializeCommonEvent(30, 9008000, 1046400115);
    InitializeCommonEvent(31, 9008000, 1046400400);
    InitializeCommonEvent(32, 9008000, 1046400116);
    InitializeCommonEvent(33, 9008000, 1046400117);
    InitializeCommonEvent(34, 9008000, 1046400118);
    InitializeCommonEvent(35, 9008000, 1046400710);
    
    RegisterBonfire(1046400000, 1046401950, 0, 0, 0, 5);
    RegisterBonfire(1046400001, 1046401951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76418, 76401, 1046401981, 77400, 0, 78400, 78401, 78402, 78403, 78404, 78405, 78406, 78407, 78408, 78409);
    InitializeCommonEvent(0, 90005790, 0, 1046400180, 1046402181, 1046402182, 1046400701, 22, 1046402701, 1046402700, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005791, 1046400180, 1046402181, 1046402182, 1046400701);
    InitializeCommonEvent(0, 90005792, 1046400180, 1046402181, 1046402182, 1046400701, 1046400700, 0);
    InitializeCommonEvent(0, 90005793, 1046400180, 1046402181, 1046402182, 1046400701, 1046402701, 1046402182, 0);
    InitializeCommonEvent(0, 90005250, 1046400300, 1046402303, 0, -1);
    InitializeCommonEvent(0, 90005250, 1046400301, 1046402301, 0, -1);
    InitializeCommonEvent(0, 90005250, 1046400303, 1046402303, 0, -1);
    InitializeCommonEvent(0, 90005250, 1046400304, 1046402303, 0, -1);
    InitializeCommonEvent(0, 90005251, 1046400400, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005706, 1046400710, 930025, 0);
    InitializeCommonEvent(0, 90005631, 1046401640, 61011);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1046400700, true);
    SetCharacterBackreadState(1046400710, true);
});


