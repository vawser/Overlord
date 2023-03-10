// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1048370101);
    InitializeCommonEvent(1, 9008000, 1048370100);
    InitializeCommonEvent(2, 9008000, 1048370950);
    InitializeCommonEvent(3, 9008000, 1048370102);
    InitializeCommonEvent(4, 9008000, 1048370103);
    InitializeCommonEvent(5, 9008000, 1048370104);
    InitializeCommonEvent(6, 9008000, 1048370105);
    InitializeCommonEvent(7, 9008000, 1048370106);
    InitializeCommonEvent(8, 9008000, 1048370107);
    InitializeCommonEvent(9, 9008000, 1048370299);
    InitializeCommonEvent(10, 9008000, 1048370108);
    InitializeCommonEvent(11, 9008000, 1048370109);
    InitializeCommonEvent(12, 9008000, 1048370110);
    InitializeCommonEvent(13, 9008000, 1048370111);
    InitializeCommonEvent(14, 9008000, 1048370112);
    InitializeCommonEvent(15, 9008000, 1048370113);
    InitializeCommonEvent(16, 9008000, 1048370114);
    InitializeCommonEvent(17, 9008000, 1048370115);
    InitializeCommonEvent(18, 9008000, 1048370116);
    InitializeCommonEvent(19, 9008000, 1048370117);
    InitializeCommonEvent(20, 9008000, 1048370118);
    InitializeCommonEvent(21, 9008000, 1048370119);
    InitializeCommonEvent(22, 9008000, 1048370120);
    InitializeCommonEvent(23, 9008000, 1048370121);
    InitializeCommonEvent(24, 9008000, 1048370122);
    InitializeCommonEvent(25, 9008000, 1048370123);
    InitializeCommonEvent(26, 9008000, 1048370124);
    InitializeCommonEvent(27, 9008000, 1048370125);
    InitializeCommonEvent(28, 9008000, 1048370126);
    InitializeCommonEvent(29, 9008000, 1048370127);
    InitializeCommonEvent(30, 9008000, 1048370128);
    InitializeCommonEvent(31, 9008000, 1048370129);
    InitializeCommonEvent(32, 9008000, 1048370130);
    InitializeCommonEvent(33, 9008000, 1048370131);
    InitializeCommonEvent(34, 9008000, 1048370132);
    InitializeCommonEvent(35, 9008000, 1048370133);
    InitializeCommonEvent(36, 9008000, 1048370134);
    InitializeCommonEvent(37, 9008000, 1048370135);
    InitializeCommonEvent(38, 9008000, 1048370136);
    InitializeCommonEvent(39, 9008000, 1048370137);
    InitializeCommonEvent(40, 9008000, 1048370138);
    InitializeCommonEvent(41, 9008000, 1048370139);
    InitializeCommonEvent(42, 9008000, 1048370140);
    InitializeCommonEvent(43, 9008000, 1048370141);
    InitializeCommonEvent(44, 9008000, 1048370800);
    
    RegisterBonfire(1048370000, 1048371950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76458, 76405, 1048371980, 77410, 0, 78410, 78411, 78412, 78413, 78414, 78415, 78416, 78417, 78418, 78419);
    InitializeCommonEvent(0, 90005201, 1048370800, 30000, 20000, 1112014848, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005870, 1048370800, 904501600, 25);
    InitializeCommonEvent(0, 90005861, 1048370800, 0, 1048370800, 1, 30400, 30064, 0);
    InitializeEvent(0, 1048372200, 1048370299, 12603, 1048372299, 1048372298, 1048372297);
    InitializeCommonEvent(0, 90005300, 1048370299, 1048370299, 40406, 0, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1048370700, true);
});

$Event(1048372200, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterHasSpEffect(X0_4, X4_4) && !CharacterDead(X0_4));
    SetEventFlagID(1048372201, OFF);
    SetEventFlagID(1048372202, OFF);
    WaitFixedTimeFrames(1);
    RandomlySetEventFlagInRange(1048372201, 1048372202, ON);
    WaitFixedTimeFrames(1);
    GotoIf(L1, InArea(X0_4, X8_4));
    GotoIf(L2, InArea(X0_4, X12_4));
    GotoIf(L3, InArea(X0_4, X16_4));
L1:
    GotoIf(S0, EventFlag(1048372201));
    Goto(S1);
S0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false);
    Goto(L0);
S1:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false);
    Goto(L0);
L2:
    GotoIf(S2, EventFlag(1048372201));
    Goto(S3);
S2:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false);
    Goto(L0);
S3:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false);
    Goto(L0);
L3:
    GotoIf(S4, EventFlag(1048372201));
    Goto(S5);
S4:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false);
    Goto(L0);
S5:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false);
    Goto(L0);
L0:
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});


