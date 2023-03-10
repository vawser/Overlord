// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common.emevd N:\GR\data\Param\event\m60.emevd N:\GR\data\Param\event\common_macro.emevd 
// @linked    [0,82,154,220]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1041390100);
    InitializeCommonEvent(1, 9008000, 1041390700);
    InitializeCommonEvent(2, 9008000, 1041390101);
    InitializeCommonEvent(3, 9008000, 1041390102);
    InitializeCommonEvent(4, 9008000, 1041390103);
    InitializeCommonEvent(5, 9008000, 1041390200);
    InitializeCommonEvent(6, 9008000, 1041390201);
    InitializeCommonEvent(7, 9008000, 1041390202);
    InitializeCommonEvent(8, 9008000, 1041390104);
    InitializeCommonEvent(9, 9008000, 1041390105);
    InitializeCommonEvent(10, 9008000, 1041390106);
    InitializeCommonEvent(11, 9008000, 1041390107);
    InitializeCommonEvent(12, 9008000, 1041390108);
    InitializeCommonEvent(13, 9008000, 1041390109);
    InitializeCommonEvent(14, 9008000, 1041390110);
    InitializeCommonEvent(15, 9008000, 1041390111);
    InitializeCommonEvent(16, 9008000, 1041390112);
    InitializeCommonEvent(17, 9008000, 1041390113);
    InitializeCommonEvent(18, 9008000, 1041390114);
    InitializeCommonEvent(19, 9008000, 1041390115);
    InitializeCommonEvent(20, 9008000, 1041390116);
    InitializeCommonEvent(21, 9008000, 1041390117);
    InitializeCommonEvent(22, 9008000, 1041390118);
    InitializeCommonEvent(23, 9008000, 1041390119);
    InitializeCommonEvent(24, 9008000, 1041390120);
    InitializeCommonEvent(25, 9008000, 1041390121);
    InitializeCommonEvent(26, 9008000, 1041390122);
    InitializeCommonEvent(27, 9008000, 1041390123);
    InitializeCommonEvent(28, 9008000, 1041390124);
    InitializeCommonEvent(29, 9008000, 1041390125);
    InitializeCommonEvent(30, 9008000, 1041390126);
    InitializeCommonEvent(31, 9008000, 1041390127);
    InitializeCommonEvent(32, 9008000, 1041390128);
    InitializeCommonEvent(33, 9008000, 1041390129);
    InitializeCommonEvent(34, 9008000, 1041390130);
    InitializeCommonEvent(35, 9008000, 1041390131);
    InitializeCommonEvent(36, 9008000, 1041390132);
    InitializeCommonEvent(37, 9008000, 1041390133);
    InitializeCommonEvent(38, 9008000, 1041390134);
    InitializeCommonEvent(39, 9008000, 1041390135);
    InitializeCommonEvent(40, 9008000, 1041390136);
    InitializeCommonEvent(41, 9008000, 1041390137);
    InitializeCommonEvent(42, 9008000, 1041390138);
    InitializeCommonEvent(43, 9008000, 1041390139);
    InitializeCommonEvent(44, 9008000, 1041390140);
    InitializeCommonEvent(45, 9008000, 1041390141);
    InitializeCommonEvent(46, 9008000, 1041390142);
    InitializeCommonEvent(47, 9008000, 1041390143);
    InitializeCommonEvent(48, 9008000, 1041390144);
    InitializeCommonEvent(49, 9008000, 1041390145);
    InitializeCommonEvent(50, 9008000, 1041390146);
    
    InitializeEvent(0, 1041392340, 1041390705);
    InitializeEvent(1, 1041392340, 1041390706);
    InitializeEvent(2, 1041392340, 1041390707);
    InitializeEvent(3, 1041392340, 1041390708);
    InitializeCommonEvent(0, 90005705, 1041390700);
    InitializeCommonEvent(0, 90005706, 1041390720, 30023, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1041390700, true);
    SetCharacterBackreadState(1041390720, true);
    InitializeCommonEvent(0, 90005261, 1041390200, 1041382200, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1041390201, 1041382200, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1041390202, 1041382200, 1092616192, 0, -1);
});

$Event(1041392340, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, true);
});


