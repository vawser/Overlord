// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1050540100);
    InitializeCommonEvent(1, 9008000, 1050540300);
    InitializeCommonEvent(2, 9008000, 1050540101);
    InitializeCommonEvent(3, 9008000, 1050540200);
    InitializeCommonEvent(4, 9008000, 1050540203);
    InitializeCommonEvent(5, 9008000, 1050540204);
    InitializeCommonEvent(6, 9008000, 1050540206);
    InitializeCommonEvent(7, 9008000, 1050540102);
    InitializeCommonEvent(8, 9008000, 1050540103);
    InitializeCommonEvent(9, 9008000, 1050540104);
    InitializeCommonEvent(10, 9008000, 1050540105);
    InitializeCommonEvent(11, 9008000, 1050540106);
    InitializeCommonEvent(12, 9008000, 1050540107);
    InitializeCommonEvent(13, 9008000, 1050540108);
    InitializeCommonEvent(14, 9008000, 1050540251);
    InitializeCommonEvent(15, 9008000, 1050540252);
    InitializeCommonEvent(16, 9008000, 1050540253);
    InitializeCommonEvent(17, 9008000, 1050540254);
    
    InitializeEvent(0, 1050542200, 1050545200);
});

$Event(1050542200, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});


