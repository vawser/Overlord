// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1047550100);
    InitializeCommonEvent(1, 9008000, 1047550101);
    InitializeCommonEvent(2, 9008000, 1047550102);
    InitializeCommonEvent(3, 9008000, 1047550103);
    InitializeCommonEvent(4, 9008000, 1047550104);
    InitializeCommonEvent(5, 9008000, 1047550105);
    InitializeCommonEvent(6, 9008000, 1047550106);
    InitializeCommonEvent(7, 9008000, 1047550107);
    InitializeCommonEvent(8, 9008000, 1047550108);
    InitializeCommonEvent(9, 9008000, 1047550109);
    InitializeCommonEvent(10, 9008000, 1047550110);
    InitializeCommonEvent(11, 9008000, 1047550111);
    InitializeCommonEvent(12, 9008000, 1047550112);
    InitializeCommonEvent(13, 9008000, 1047550113);
    InitializeCommonEvent(14, 9008000, 1047550200);
    InitializeCommonEvent(15, 9008000, 1047550114);
    InitializeCommonEvent(16, 9008000, 1047550203);
    InitializeCommonEvent(17, 9008000, 1047550204);
    InitializeCommonEvent(18, 9008000, 1047550205);
    InitializeCommonEvent(19, 9008000, 1047550206);
    InitializeCommonEvent(20, 9008000, 1047550207);
    InitializeCommonEvent(21, 9008000, 1047550208);
    InitializeCommonEvent(22, 9008000, 1047550211);
    InitializeCommonEvent(23, 9008000, 1047550115);
    InitializeCommonEvent(24, 9008000, 1047550301);
    InitializeCommonEvent(25, 9008000, 1047550302);
    InitializeCommonEvent(26, 9008000, 1047550116);
    InitializeCommonEvent(27, 9008000, 1047550304);
    InitializeCommonEvent(28, 9008000, 1047550117);
    
    InitializeCommonEvent(0, 90005261, 1047550209, 1047552200, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005261, 1047550210, 1047552200, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005261, 1047550220, 1047552200, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005261, 1047550200, 1047552211, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 1047550211, 1047552211, 1065353216, 0, -1);
});

$Event(1047552300, Restart, function(X0_4) {
    DisableCharacterAI(X0_4);
    EnableCharacterImmortality(X0_4);
    DisableCharacterHPBarDisplay(X0_4);
    ForceAnimationPlayback(X0_4, 30019, true, false, false);
});


