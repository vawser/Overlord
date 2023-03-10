// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common.emevd N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\m60.emevd N:\GR\data\Param\event\common_macro.emevd 
// @linked    [0,72,154,220]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1037410100);
    InitializeCommonEvent(1, 9008000, 1037410101);
    InitializeCommonEvent(2, 9008000, 1037410102);
    InitializeCommonEvent(3, 9008000, 1037410103);
    InitializeCommonEvent(4, 9008000, 1037410104);
    InitializeCommonEvent(5, 9008000, 1037410105);
    InitializeCommonEvent(6, 9008000, 1037410106);
    InitializeCommonEvent(7, 9008000, 1037410107);
    InitializeCommonEvent(8, 9008000, 1037410220);
    InitializeCommonEvent(9, 9008000, 1037410200);
    InitializeCommonEvent(10, 9008000, 1037410201);
    InitializeCommonEvent(11, 9008000, 1037410202);
    InitializeCommonEvent(12, 9008000, 1037410203);
    InitializeCommonEvent(13, 9008000, 1037410204);
    InitializeCommonEvent(14, 9008000, 1037410205);
    InitializeCommonEvent(15, 9008000, 1037410206);
    InitializeCommonEvent(16, 9008000, 1037410108);
    InitializeCommonEvent(17, 9008000, 1037410109);
    InitializeCommonEvent(18, 9008000, 1037410110);
    InitializeCommonEvent(19, 9008000, 1037410111);
    InitializeCommonEvent(20, 9008000, 1037410112);
    InitializeCommonEvent(21, 9008000, 1037410113);
    InitializeCommonEvent(22, 9008000, 1037410114);
    InitializeCommonEvent(23, 9008000, 1037410115);
    InitializeCommonEvent(24, 9008000, 1037410116);
    InitializeCommonEvent(25, 9008000, 1037410117);
    InitializeCommonEvent(26, 9008000, 1037410118);
    InitializeCommonEvent(27, 9008000, 1037410119);
    InitializeCommonEvent(28, 9008000, 1037410120);
    
    InitializeCommonEvent(0, 90005261, 1037410200, 1037412200, 1077936128, 0, 3020);
    InitializeCommonEvent(0, 90005261, 1037410201, 1037412200, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037410202, 1037412200, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037410203, 1037412200, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037410204, 1037412204, 1077936128, 0, 3020);
    InitializeCommonEvent(0, 90005261, 1037410205, 1037412204, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037410206, 1037412204, 1077936128, 0, -1);
    InitializeCommonEvent(0, 900005610, 1037411680, 100, 800, 0);
    InitializeEvent(0, 1037410220, 1037410220);
});

$Event(1037410220, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
});


