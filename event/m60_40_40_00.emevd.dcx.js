// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common.emevd N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\m60.emevd N:\GR\data\Param\event\common_macro.emevd 
// @linked    [0,72,154,220]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1040400100);
    InitializeCommonEvent(1, 9008000, 1040400101);
    InitializeCommonEvent(2, 9008000, 1040400102);
    InitializeCommonEvent(3, 9008000, 1040400103);
    InitializeCommonEvent(4, 9008000, 1040400104);
    InitializeCommonEvent(5, 9008000, 1040400105);
    InitializeCommonEvent(6, 9008000, 1040400206);
    InitializeCommonEvent(7, 9008000, 1040400210);
    InitializeCommonEvent(8, 9008000, 1040400211);
    InitializeCommonEvent(9, 9008000, 1040400212);
    InitializeCommonEvent(10, 9008000, 1040400213);
    InitializeCommonEvent(11, 9008000, 1040400214);
    InitializeCommonEvent(12, 9008000, 1040400215);
    InitializeCommonEvent(13, 9008000, 1040400216);
    InitializeCommonEvent(14, 9008000, 1040400217);
    InitializeCommonEvent(15, 9008000, 1040400218);
    InitializeCommonEvent(16, 9008000, 1040400220);
    InitializeCommonEvent(17, 9008000, 1040400106);
    InitializeCommonEvent(18, 9008000, 1040400107);
    InitializeCommonEvent(19, 9008000, 1040400108);
    InitializeCommonEvent(20, 9008000, 1040400109);
    InitializeCommonEvent(21, 9008000, 1040400110);
    InitializeCommonEvent(22, 9008000, 1040400111);
    InitializeCommonEvent(23, 9008000, 1040400112);
    InitializeCommonEvent(24, 9008000, 1040400113);
    InitializeCommonEvent(25, 9008000, 1040400114);
    InitializeCommonEvent(26, 9008000, 1040400115);
    InitializeCommonEvent(27, 9008000, 1040400116);
    InitializeCommonEvent(28, 9008000, 1040400117);
    
    InitializeCommonEvent(0, 90005261, 1040400206, 1040402206, 1092616192, 0, 3011);
    InitializeEvent(0, 1040402200, 1040400210);
    InitializeEvent(1, 1040402200, 1040400211);
    InitializeEvent(2, 1040402200, 1040400212);
    InitializeEvent(3, 1040402200, 1040400213);
    InitializeEvent(4, 1040402200, 1040400214);
    InitializeEvent(5, 1040402200, 1040400215);
    InitializeEvent(6, 1040402200, 1040400216);
    InitializeEvent(7, 1040402200, 1040400217);
    InitializeEvent(8, 1040402200, 1040400218);
    InitializeEvent(0, 1040402220, 1040400220);
    InitializeCommonEvent(0, 90005423, 1040400220);
});

$Event(200, Default, function() {
    InitializeCommonEvent(0, 90005422, 1040408500, 1040401500, 1040403500);
});

$Event(1040402200, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});

$Event(1040402220, Restart, function(X0_4) {
    SetSpEffect(X0_4, 5551);
    EndEvent();
});


