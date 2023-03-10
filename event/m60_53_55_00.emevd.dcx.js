// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1053550100);
    InitializeCommonEvent(1, 9008000, 1053550101);
    InitializeCommonEvent(2, 9008000, 1053550200);
    InitializeCommonEvent(3, 9008000, 1053550201);
    InitializeCommonEvent(4, 9008000, 1053550202);
    InitializeCommonEvent(5, 9008000, 1053550102);
    InitializeCommonEvent(6, 9008000, 1053550103);
    InitializeCommonEvent(7, 9008000, 1053550104);
    InitializeCommonEvent(8, 9008000, 1053550105);
    
    InitializeCommonEvent(0, 90005261, 1053550202, 1053552202, 1084227584, 0, 0);
    InitializeEvent(0, 1053552200, 1053555200);
});

$Event(1053552200, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});


