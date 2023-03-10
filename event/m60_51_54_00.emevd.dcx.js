// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1051540100);
    InitializeCommonEvent(1, 9008000, 1051540101);
    InitializeCommonEvent(2, 9008000, 1051540102);
    InitializeCommonEvent(3, 9008000, 1051540103);
    InitializeCommonEvent(4, 9008000, 1051540104);
    InitializeCommonEvent(5, 9008000, 1051540105);
    InitializeCommonEvent(6, 9008000, 1051540106);
    InitializeCommonEvent(7, 9008000, 1051540107);
    InitializeCommonEvent(8, 9008000, 1051540108);
    InitializeCommonEvent(9, 9008000, 1051540109);
    InitializeCommonEvent(10, 9008000, 1051540110);
    InitializeCommonEvent(11, 9008000, 1051540111);
    InitializeCommonEvent(12, 9008000, 1051540112);
    InitializeCommonEvent(13, 9008000, 1051540245);
    InitializeCommonEvent(14, 9008000, 1051540113);
    InitializeCommonEvent(15, 9008000, 1051540114);
    InitializeCommonEvent(16, 9008000, 1051540115);
    InitializeCommonEvent(17, 9008000, 1051540116);
    InitializeCommonEvent(18, 9008000, 1051540117);
    
    InitializeCommonEvent(0, 90005261, 1051540245, 1051542245, 0, 0, 0);
    InitializeEvent(0, 1051542200, 1049535200);
    InitializeCommonEvent(0, 90005300, 1051540210, 1051540210, 40512, 0, 0);
});

$Event(1051542200, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});


