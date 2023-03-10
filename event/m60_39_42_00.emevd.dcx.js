// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common.emevd N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\m60.emevd N:\GR\data\Param\event\common_macro.emevd 
// @linked    [0,72,154,220]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1039420101);
    InitializeCommonEvent(1, 9008000, 1039420950);
    InitializeCommonEvent(2, 9008000, 1039420100);
    InitializeCommonEvent(3, 9008000, 1039420102);
    InitializeCommonEvent(4, 9008000, 1039420103);
    InitializeCommonEvent(5, 9008000, 1039420104);
    InitializeCommonEvent(6, 9008000, 1039420105);
    InitializeCommonEvent(7, 9008000, 1039420106);
    InitializeCommonEvent(8, 9008000, 1039420107);
    InitializeCommonEvent(9, 9008000, 1039420108);
    InitializeCommonEvent(10, 9008000, 1039420210);
    InitializeCommonEvent(11, 9008000, 1039420211);
    InitializeCommonEvent(12, 9008000, 1039420212);
    InitializeCommonEvent(13, 9008000, 1039420213);
    InitializeCommonEvent(14, 9008000, 1039420214);
    InitializeCommonEvent(15, 9008000, 1039420215);
    InitializeCommonEvent(16, 9008000, 1039420216);
    InitializeCommonEvent(17, 9008000, 1039420217);
    InitializeCommonEvent(18, 9008000, 1039420218);
    InitializeCommonEvent(19, 9008000, 1039420109);
    InitializeCommonEvent(20, 9008000, 1039420110);
    InitializeCommonEvent(21, 9008000, 1039420111);
    InitializeCommonEvent(22, 9008000, 1039420700);
    InitializeCommonEvent(23, 9008000, 1039420112);
    InitializeCommonEvent(24, 9008000, 1039420113);
    InitializeCommonEvent(25, 9008000, 1039420202);
    InitializeCommonEvent(26, 9008000, 1039420203);
    InitializeCommonEvent(27, 9008000, 1039420204);
    InitializeCommonEvent(28, 9008000, 1039420114);
    InitializeCommonEvent(29, 9008000, 1039420115);
    InitializeCommonEvent(30, 9008000, 1039420116);
    InitializeCommonEvent(31, 9008000, 1039420117);
    InitializeCommonEvent(32, 9008000, 1039420118);
    InitializeCommonEvent(33, 9008000, 1039420119);
    InitializeCommonEvent(34, 9008000, 1039420120);
    InitializeCommonEvent(35, 9008000, 1039420121);
    InitializeCommonEvent(36, 9008000, 1039420122);
    InitializeCommonEvent(37, 9008000, 1039420123);
    InitializeCommonEvent(38, 9008000, 1039420340);
    InitializeCommonEvent(39, 9008000, 1039420124);
    InitializeCommonEvent(40, 9008000, 1039420125);
    InitializeCommonEvent(41, 9008000, 1039420126);
    InitializeCommonEvent(42, 9008000, 1039420127);
    InitializeCommonEvent(43, 9008000, 1039420128);
    InitializeCommonEvent(44, 9008000, 1039420129);
    InitializeCommonEvent(45, 9008000, 1039420130);
    InitializeCommonEvent(46, 9008000, 1039420131);
    InitializeCommonEvent(47, 9008000, 1039420132);
    InitializeCommonEvent(48, 9008000, 1039420133);
    
    RegisterBonfire(1039420000, 1039421950, 0, 0, 0, 5);
    InitializeEvent(0, 1039422202, 1039420202);
    InitializeEvent(1, 1039422202, 1039420203);
    InitializeEvent(2, 1039422202, 1039420204);
    InitializeEvent(0, 1039422210, 1039420210, 1039422210, 1039422210);
    InitializeEvent(1, 1039422210, 1039420211, 1039422210, 1039422211);
    InitializeEvent(2, 1039422210, 1039420212, 1039422210, 1039422212);
    InitializeEvent(3, 1039422210, 1039420213, 1039422210, 1039422213);
    InitializeEvent(4, 1039422210, 1039420214, 1039422210, 1039422214);
    InitializeEvent(5, 1039422210, 1039420215, 1039422210, 1039422215);
    InitializeEvent(6, 1039422210, 1039420216, 1039422210, 1039422216);
    InitializeEvent(7, 1039422210, 1039420217, 1039422210, 1039422217);
    InitializeEvent(8, 1039422210, 1039420218, 1039422210, 1039422218);
    InitializeEvent(0, 1039422340, 1039420340, 1039422340, 1039422340);
    InitializeEvent(0, 1039422200, 1039425200, 1039422200);
    InitializeEvent(0, 1039422600, 1039421600, 1039421601, 82020);
    InitializeCommonEvent(0, 90005605, 1039421610, 2958140, 1035452630, 0, 1035452610, 1039422611, 1039422612, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005630, 61394200, 1039421500, 115);
    InitializeCommonEvent(0, 90005683, 62203, 1039421684, 209, 78294, 78294);
    InitializeCommonEvent(0, 90005631, 1039421640, 61020);
    InitializeCommonEvent(0, 90005706, 1039420700, 930025, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1039420700, true);
});

$Event(1039422200, Restart, function(X0_4, X4_4) {
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5657);
    SetSpEffect(X0_4, 4802);
    EndIf(EventFlag(1039422200));
    SetSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 5657);
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
    SetNetworkconnectedEventFlagID(1039422200, ON);
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5657);
});

$Event(1039422202, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});

$Event(1039422210, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(CharacterDead(X0_4));
    EndIf(SpecialStandbyEndedFlag(X0_4));
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChr = InArea(10000, X4_4)
        || CharacterHasStateInfo(X0_4, 436)
        || CharacterHasStateInfo(X0_4, 2)
        || CharacterHasStateInfo(X0_4, 5)
        || CharacterHasStateInfo(X0_4, 6)
        || CharacterHasStateInfo(X0_4, 260);
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp3 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp4 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp5 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    areaChrSp = areaChr && chrSp;
    WaitFor(areaChrSp || sp || sp2 || sp3 || sp4 || sp5);
    SetNetworkconnectedEventFlagID(X8_4, ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    WaitRandomTimeSeconds(0, 1);
    ForceAnimationPlayback(X0_4, 30004, false, false, false);
    EnableCharacter(X0_4);
    EnableCharacterCollision(X0_4);
    ForceAnimationPlayback(X0_4, 20004, false, false, false);
    EndEvent();
});

$Event(1039422340, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(CharacterDead(X0_4));
    EndIf(SpecialStandbyEndedFlag(X0_4));
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChr = InArea(10000, X4_4)
        || CharacterHasStateInfo(X0_4, 436)
        || CharacterHasStateInfo(X0_4, 2)
        || CharacterHasStateInfo(X0_4, 5)
        || CharacterHasStateInfo(X0_4, 6)
        || CharacterHasStateInfo(X0_4, 260);
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp3 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp4 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp5 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    areaChrSp = areaChr && chrSp;
    WaitFor(areaChrSp || sp || sp2 || sp3 || sp4 || sp5);
    SetNetworkconnectedEventFlagID(X8_4, ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    ForceAnimationPlayback(X0_4, 30004, false, false, false);
    EnableCharacter(X0_4);
    EnableCharacterCollision(X0_4);
    ForceAnimationPlayback(X0_4, 20004, false, false, false);
    EndEvent();
});

$Event(1039422600, Restart, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(X8_4)) {
        CreateAssetfollowingSFX(X0_4, 200, 803220);
    }
L0:
    WaitFor(EventFlag(X8_4));
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    DeleteAssetfollowingSFX(X0_4, true);
});

$Event(1039422610, Restart, function(X0_4, X4_1, X5_1, X6_1, X7_1, X8_4, X12_4, X16_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlagID(X12_4, OFF);
    SetEventFlagID(X16_4, OFF);
    WaitFor(HasMultiplayerState(MultiplayerState.Singleplayer) && ActionButtonInArea(9140, X0_4));
    DisplayGenericDialogAndSetEventFlags(4300, PromptType.YESNO, NumberofOptions.TwoButtons, X0_4, 3, X12_4, X16_4, X16_4);
    if (!EventFlag(X12_4)) {
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    WarpPlayer(X4_1, X5_1, X6_1, X7_1, X8_4, 0);
});


