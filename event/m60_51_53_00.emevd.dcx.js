// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1051530180);
    InitializeCommonEvent(1, 9008000, 1051530950);
    InitializeCommonEvent(2, 9008000, 1051530100);
    InitializeCommonEvent(3, 9008000, 1051530101);
    InitializeCommonEvent(4, 9008000, 1051530210);
    InitializeCommonEvent(5, 9008000, 1051530102);
    InitializeCommonEvent(6, 9008000, 1051530103);
    InitializeCommonEvent(7, 9008000, 1051530104);
    InitializeCommonEvent(8, 9008000, 1051530283);
    InitializeCommonEvent(9, 9008000, 1051530284);
    InitializeCommonEvent(10, 9008000, 1051530322);
    InitializeCommonEvent(11, 9008000, 1051530323);
    InitializeCommonEvent(12, 9008000, 1051530324);
    InitializeCommonEvent(13, 9008000, 1051530105);
    InitializeCommonEvent(14, 9008000, 1051530106);
    InitializeCommonEvent(15, 9008000, 1051530107);
    InitializeCommonEvent(16, 9008000, 1051530108);
    InitializeCommonEvent(17, 9008000, 1051530109);
    InitializeCommonEvent(18, 9008000, 1051530110);
    InitializeCommonEvent(19, 9008000, 1051530111);
    InitializeCommonEvent(20, 9008000, 1051530112);
    InitializeCommonEvent(21, 9008000, 1051530113);
    InitializeCommonEvent(22, 9008000, 1051530114);
    InitializeCommonEvent(23, 9008000, 1051530115);
    InitializeCommonEvent(24, 9008000, 1051530116);
    InitializeCommonEvent(25, 9008000, 1051530117);
    InitializeCommonEvent(26, 9008000, 1051530118);
    InitializeCommonEvent(27, 9008000, 1051530119);
    InitializeCommonEvent(28, 9008000, 1051530120);
    InitializeCommonEvent(29, 9008000, 1051530121);
    InitializeCommonEvent(30, 9008000, 1051530331);
    InitializeCommonEvent(31, 9008000, 1051530122);
    InitializeCommonEvent(32, 9008000, 1051530123);
    InitializeCommonEvent(33, 9008000, 1051530124);
    InitializeCommonEvent(34, 9008000, 1051530125);
    InitializeCommonEvent(35, 9008000, 1051530126);
    InitializeCommonEvent(36, 9008000, 1051530127);
    InitializeCommonEvent(37, 9008000, 1051530128);
    InitializeCommonEvent(38, 9008000, 1051530129);
    InitializeCommonEvent(39, 9008000, 1051530130);
    InitializeCommonEvent(40, 9008000, 1051530131);
    InitializeCommonEvent(41, 9008000, 1051530132);
    InitializeCommonEvent(42, 9008000, 1051530133);
    
    RegisterBonfire(1051530000, 1051531950, 0, 0, 0, 5);
    InitializeEvent(0, 1051532200, 1051535200);
    InitializeEvent(0, 1051532390, 0);
    InitializeCommonEvent(0, 90005200, 1051530321, 30005, 20005, 1051532321, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1051530322, 30006, 20006, 1051532322, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1051530323, 30006, 20006, 0, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1051530324, 30006, 20006, 0, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1051530210, 1051530210, 1051530700, 0, 0);
    InitializeEvent(0, 1051532220, 1051530210, 12603, 1051532210, 1051532211, 1051532212);
    InitializeCommonEvent(0, 90005201, 1051530210, 30000, 20000, 1097859072, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1051530380, 1051530180, 0, 0, 0);
    InitializeCommonEvent(0, 90005790, 0, 1051530180, 1051532181, 1051532182, 1051530180, 21, 1051532180, 1051532181, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005791, 1051530180, 1051532181, 1051532182, 1051530180);
    InitializeCommonEvent(0, 90005792, 1051530180, 1051532181, 1051532182, 1051530180, 1051530500, 0);
    InitializeCommonEvent(0, 90005793, 1051530180, 1051532181, 1051532182, 1051530180, 1051532180, 1051532182, 0);
    InitializeEvent(0, 1051532330, 1051535330, 1051532330);
    InitializeEvent(1, 1051532330, 1051535331, 1051532331);
    InitializeCommonEvent(0, 90005200, 1051530284, 30000, 20000, 1051532284, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1051530283, 1051532283, 0, 0, 0);
    InitializeCommonEvent(0, 90005771, 1051530950, 1051532700);
});

$Event(1051532200, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});

$Event(1051532220, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(1051530210));
    WaitFor(CharacterHasSpEffect(X0_4, X4_4) && !EventFlag(1051530210) && !CharacterDead(X0_4));
    SetEventFlagID(1051532221, OFF);
    SetEventFlagID(1051532222, OFF);
    WaitFixedTimeFrames(1);
    RandomlySetEventFlagInRange(1051532221, 1051532222, ON);
    WaitFixedTimeFrames(1);
    GotoIf(L1, InArea(X0_4, X8_4));
    GotoIf(L2, InArea(X0_4, X12_4));
    GotoIf(L3, InArea(X0_4, X16_4));
L1:
    GotoIf(S0, EventFlag(1051532221));
    Goto(S1);
S0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    SetCharacterHome(X0_4, X12_4);
    Goto(L0);
S1:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    SetCharacterHome(X0_4, X16_4);
    Goto(L0);
L2:
    GotoIf(S2, EventFlag(1051532221));
    Goto(S3);
S2:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    SetCharacterHome(X0_4, X8_4);
    Goto(L0);
S3:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    SetCharacterHome(X0_4, X16_4);
    Goto(L0);
L3:
    GotoIf(S4, EventFlag(1051532221));
    Goto(S5);
S4:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    SetCharacterHome(X0_4, X8_4);
    Goto(L0);
S5:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    SetCharacterHome(X0_4, X12_4);
    Goto(L0);
L0:
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1051532330, Restart, function(X0_4, X4_4) {
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5651);
    SetSpEffect(X0_4, 4802);
    EndIf(EventFlag(1051532330));
    SetSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 5651);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (HasDamageType(X0_4, 10000, DamageType.Unspecified)
                || HasDamageType(X0_4, 35000, DamageType.Unspecified)
                || HasDamageType(35000, X0_4, DamageType.Unspecified)
                || EntityInRadiusOfEntity(10000, X0_4, 10, 1)
                || EntityInRadiusOfEntity(35000, X0_4, 10, 1)
                || InArea(10000, X4_4)
                || InArea(35000, X4_4)));
    SetNetworkconnectedEventFlagID(1050562200, ON);
    ClearSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 4802);
    ClearSpEffect(X0_4, 5651);
});

$Event(1051532390, Restart, function() {
    SetSpEffect(1051530331, 12019);
    WaitFor(CharacterHasSpEffect(1051530331, 12019) && CharacterHasSpEffect(1051530331, 12018));
    ForceAnimationPlayback(1051530331, 20020, false, false, false);
    EndEvent();
});


