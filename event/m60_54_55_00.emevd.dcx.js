// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1054550950);
    InitializeCommonEvent(1, 9008000, 1054550100);
    InitializeCommonEvent(2, 9008000, 1054550101);
    InitializeCommonEvent(3, 9008000, 1054550102);
    
    RegisterBonfire(1054550000, 1054551950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76510, 76505, 1054551980, 77500, 4, 78500, 78501, 78502, 78503, 78504, 78505, 78506, 78507, 78508, 78509);
    InitializeEvent(0, 1054552200, 1054555200);
    InitializeCommonEvent(0, 90005630, 65545500, 1054551500, 119);
    InitializeCommonEvent(0, 90005771, 1054550950, 1054552700);
    InitializeCommonEvent(0, 90005771, 1054550950, 1054552701);
});

$Event(1054552200, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});


