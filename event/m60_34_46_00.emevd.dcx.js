// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1034460950);
    InitializeCommonEvent(1, 9008000, 1034460100);
    InitializeCommonEvent(2, 9008000, 1034460101);
    InitializeCommonEvent(3, 9008000, 1034460102);
    InitializeCommonEvent(4, 9008000, 1034460103);
    InitializeCommonEvent(5, 9008000, 1034460104);
    InitializeCommonEvent(6, 9008000, 1034460105);
    InitializeCommonEvent(7, 9008000, 1034460106);
    InitializeCommonEvent(8, 9008000, 1034460107);
    InitializeCommonEvent(9, 9008000, 1034460108);
    InitializeCommonEvent(10, 9008000, 1034460109);
    InitializeCommonEvent(11, 9008000, 1034460110);
    InitializeCommonEvent(12, 9008000, 1034460111);
    InitializeCommonEvent(13, 9008000, 1034460112);
    InitializeCommonEvent(14, 9008000, 1034460113);
    InitializeCommonEvent(15, 9008000, 1034460114);
    InitializeCommonEvent(16, 9008000, 1034460115);
    InitializeCommonEvent(17, 9008000, 1034460116);
    InitializeCommonEvent(18, 9008000, 1034460117);
    InitializeCommonEvent(19, 9008000, 1034460118);
    InitializeCommonEvent(20, 9008000, 1034460119);
    InitializeCommonEvent(21, 9008000, 1034460120);
    InitializeCommonEvent(22, 9008000, 1034460121);
    InitializeCommonEvent(23, 9008000, 1034460122);
    InitializeCommonEvent(24, 9008000, 1034460123);
    InitializeCommonEvent(25, 9008000, 1034460124);
    InitializeCommonEvent(26, 9008000, 1034460125);
    InitializeCommonEvent(27, 9008000, 1034460126);
    InitializeCommonEvent(28, 9008000, 1034460127);
    InitializeCommonEvent(29, 9008000, 1034460128);
    InitializeCommonEvent(30, 9008000, 1034460129);
    InitializeCommonEvent(31, 9008000, 1034460130);
    InitializeCommonEvent(32, 9008000, 1034460131);
    InitializeCommonEvent(33, 9008000, 1034460132);
    InitializeCommonEvent(34, 9008000, 1034460133);
    
    RegisterBonfire(1034460000, 1034461950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005920, 1034460600, 1034461600, 1034463600);
});

$Event(1034462210, Restart, function(X0_4) {
    ForceAnimationPlayback(X0_4, 30000, false, false, false);
    DisableAsset(1038461210);
    WaitFor(InArea(10000, 1034462210));
    EnableAsset(1038461210);
    WaitFixedTimeSeconds(3);
    ForceAnimationPlayback(X0_4, 20000, false, false, false);
    WaitFixedTimeSeconds(6);
    DisableAsset(1038461210);
    EndEvent();
});


