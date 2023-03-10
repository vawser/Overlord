// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1042510950);
    InitializeCommonEvent(1, 9008000, 1042510100);
    InitializeCommonEvent(2, 9008000, 1042510101);
    InitializeCommonEvent(3, 9008000, 1042510102);
    InitializeCommonEvent(4, 9008000, 1042510103);
    InitializeCommonEvent(5, 9008000, 1042510104);
    InitializeCommonEvent(6, 9008000, 1042510105);
    InitializeCommonEvent(7, 9008000, 1042510106);
    InitializeCommonEvent(8, 9008000, 1042510107);
    InitializeCommonEvent(9, 9008000, 1042510108);
    InitializeCommonEvent(10, 9008000, 1042510300);
    InitializeCommonEvent(11, 9008000, 1042510109);
    InitializeCommonEvent(12, 9008000, 1042510110);
    InitializeCommonEvent(13, 9008000, 1042510111);
    InitializeCommonEvent(14, 9008000, 1042510112);
    InitializeCommonEvent(15, 9008000, 1042510113);
    InitializeCommonEvent(16, 9008000, 1042510114);
    InitializeCommonEvent(17, 9008000, 1042510115);
    InitializeCommonEvent(18, 9008000, 1042510116);
    InitializeCommonEvent(19, 9008000, 1042510117);
    InitializeCommonEvent(20, 9008000, 1042510118);
    InitializeCommonEvent(21, 9008000, 1042510119);
    InitializeCommonEvent(22, 9008000, 1042510120);
    InitializeCommonEvent(23, 9008000, 1042510121);
    InitializeCommonEvent(24, 9008000, 1042510122);
    
    RegisterBonfire(76309, 1042511950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76314, 76309, 1042511980, 77300, 3, 78300, 78301, 78302, 78303, 78304, 78305, 78306, 78307, 78308, 78309);
    InitializeCommonEvent(0, 90005300, 1042510300, 1042510300, 1042510900, 0, 0);
    InitializeEvent(0, 1042512240, 1042511690, 1042511691, 62031);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005200, 1042510300, 30004, 20004, 1042512301, 0, 0, 0, 0, 0);
});

$Event(1042512240, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    if (EventFlag(X8_4)) {
        ForceAnimationPlayback(X4_4, 1, false, false, false);
        DeleteAssetfollowingSFX(X0_4, true);
        EndEvent();
    }
L0:
    CreateAssetfollowingSFX(X0_4, 200, 803220);
    WaitFor(EventFlag(X8_4));
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    DeleteAssetfollowingSFX(X0_4, true);
});


