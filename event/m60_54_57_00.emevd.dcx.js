// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1054570100);
    InitializeCommonEvent(1, 9008000, 1054570101);
    InitializeCommonEvent(2, 9008000, 1054570102);
    InitializeCommonEvent(3, 9008000, 1054570103);
    InitializeCommonEvent(4, 9008000, 1054570104);
    InitializeCommonEvent(5, 9008000, 1054570105);
    InitializeCommonEvent(6, 9008000, 1054570106);
    InitializeCommonEvent(7, 9008000, 1054570107);
    InitializeCommonEvent(8, 9008000, 1054570108);
    InitializeCommonEvent(9, 9008000, 1054570109);
    InitializeCommonEvent(10, 9008000, 1054570110);
    InitializeCommonEvent(11, 9008000, 1054570111);
    InitializeCommonEvent(12, 9008000, 1054570112);
    InitializeCommonEvent(13, 9008000, 1054570113);
    InitializeCommonEvent(14, 9008000, 1054570114);
    InitializeCommonEvent(15, 9008000, 1054570115);
    InitializeCommonEvent(16, 9008000, 1054570116);
    InitializeCommonEvent(17, 9008000, 1054570117);
    InitializeCommonEvent(18, 9008000, 1054570118);
    InitializeCommonEvent(19, 9008000, 1054570119);
    InitializeCommonEvent(20, 9008000, 1054570120);
    InitializeCommonEvent(21, 9008000, 1054570121);
    InitializeCommonEvent(22, 9008000, 1054570122);
    InitializeCommonEvent(23, 9008000, 1054570123);
    InitializeCommonEvent(24, 9008000, 1054570124);
    
    InitializeEvent(0, 1054572200, 1054575200);
});

$Event(1054572200, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});


