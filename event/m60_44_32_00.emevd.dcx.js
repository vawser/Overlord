// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1044320100);
    InitializeCommonEvent(1, 9008000, 1044320342);
    InitializeCommonEvent(2, 9008000, 1044320344);
    InitializeCommonEvent(3, 9008000, 1044320101);
    InitializeCommonEvent(4, 9008000, 1044320200);
    InitializeCommonEvent(5, 9008000, 1044320102);
    InitializeCommonEvent(6, 9008000, 1044320103);
    InitializeCommonEvent(7, 9008000, 1044320104);
    InitializeCommonEvent(8, 9008000, 1044320340);
    InitializeCommonEvent(9, 9008000, 1044320105);
    InitializeCommonEvent(10, 9008000, 1044320106);
    InitializeCommonEvent(11, 9008000, 1044320107);
    InitializeCommonEvent(12, 9008000, 1044320108);
    InitializeCommonEvent(13, 9008000, 1044320109);
    InitializeCommonEvent(14, 9008000, 1044320110);
    InitializeCommonEvent(15, 9008000, 1044320111);
    InitializeCommonEvent(16, 9008000, 1044320112);
    InitializeCommonEvent(17, 9008000, 1044320113);
    InitializeCommonEvent(18, 9008000, 1044320114);
    InitializeCommonEvent(19, 9008000, 1044320115);
    InitializeCommonEvent(20, 9008000, 1044320116);
    InitializeCommonEvent(21, 9008000, 1044320117);
    InitializeCommonEvent(22, 9008000, 1044320118);
    InitializeCommonEvent(23, 9008000, 1044320119);
    InitializeCommonEvent(24, 9008000, 1044320120);
    InitializeCommonEvent(25, 9008000, 1044320121);
    InitializeCommonEvent(26, 9008000, 1044320122);
    InitializeCommonEvent(27, 9008000, 1044320123);
    InitializeCommonEvent(28, 9008000, 1044320124);
    InitializeCommonEvent(29, 9008000, 1044320125);
    InitializeCommonEvent(30, 9008000, 1044320126);
    InitializeCommonEvent(31, 9008000, 1044320127);
    InitializeCommonEvent(32, 9008000, 1044320128);
    InitializeCommonEvent(33, 9008000, 1044320129);
    InitializeCommonEvent(34, 9008000, 1044320130);
    InitializeCommonEvent(35, 9008000, 1044320131);
    InitializeCommonEvent(36, 9008000, 1044320132);
    InitializeCommonEvent(37, 9008000, 1044320133);
    InitializeCommonEvent(38, 9008000, 1044320134);
    InitializeCommonEvent(39, 9008000, 1044320135);
    InitializeCommonEvent(40, 9008000, 1044320136);
    InitializeCommonEvent(41, 9008000, 1044320137);
    InitializeCommonEvent(42, 9008000, 1044320138);
    InitializeCommonEvent(43, 9008000, 1044320139);
    InitializeCommonEvent(44, 9008000, 1044320140);
    InitializeCommonEvent(45, 9008000, 1044320141);
    InitializeCommonEvent(46, 9008000, 1044320142);
    InitializeCommonEvent(47, 9008000, 1044320143);
    
    InitializeEvent(0, 1044322200, 1044320200, 12603, 1044322200, 1044322201, 1044322202);
    InitializeCommonEvent(0, 90005300, 1044320200, 1044320200, 40138, 0, 0);
    InitializeCommonEvent(0, 90005860, 1044320800, 0, 1044320340, 0, 1044320400, 0);
    InitializeCommonEvent(0, 90005870, 1044320340, 904980602, 24);
    InitializeCommonEvent(0, 90005300, 1044320850, 1044320344, 0, 0, 0);
    InitializeCommonEvent(0, 90005476, 1044320342, 1044320344);
    InitializeCommonEvent(0, 90005477, 0);
    InitializeEvent(0, 1044322340, 1044320342, 1044320344);
    InitializeCommonEvent(0, 90005860, 1044320850, 0, 1044320342, 0, 1044320410, 0);
    InitializeCommonEvent(0, 90005871, 1044320342, 903150601, 10, 1044320344);
    InitializeCommonEvent(0, 90005872, 1044320342, 10, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005211, 1044320340, 30000, 20000, 1044322340, 1092616192, 0, 0, 0, 0, 0);
});

$Event(1044322200, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(1044320200));
    WaitFor(CharacterHasSpEffect(X0_4, X4_4) && !EventFlag(1044320200) && !CharacterDead(X0_4));
    SetEventFlagID(1044322201, OFF);
    SetEventFlagID(1044322202, OFF);
    WaitFixedTimeFrames(1);
    RandomlySetEventFlagInRange(1044322201, 1044322202, ON);
    WaitFixedTimeFrames(1);
    GotoIf(L1, InArea(X0_4, X8_4));
    GotoIf(L2, InArea(X0_4, X12_4));
    GotoIf(L3, InArea(X0_4, X16_4));
L1:
    GotoIf(S0, EventFlag(1044322201));
    Goto(S1);
S0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
S1:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
L2:
    GotoIf(S2, EventFlag(1044322201));
    Goto(S3);
S2:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
S3:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
L3:
    GotoIf(S4, EventFlag(1044322201));
    Goto(S5);
S4:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
S5:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
L0:
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1044322210, Restart, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(X8_4)) {
        CreateAssetfollowingSFX(X0_4, 200, 803220);
    }
L0:
    WaitFor(EventFlag(X8_4));
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    DeleteAssetfollowingSFX(X0_4, true);
});

$Event(1044322340, Restart, function(X0_4, X4_4) {
    if (CharacterDead(X0_4)) {
        EndEvent();
    }
    if (!CharacterHasSpEffect(X0_4, 11825)) {
        WaitFor(CharacterBackreadStatus(X4_4));
        SetSpEffect(X0_4, 11825);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    WaitFor(!CharacterBackreadStatus(X4_4));
    SetSpEffect(X0_4, 11826);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1044322600, Restart, function() {
    DisableAsset(1044321600);
    DisableAsset(1044321601);
    DisableAsset(1044321602);
    DisableAsset(1044321603);
    DisableAsset(1044321604);
});


