// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1037420700);
    InitializeCommonEvent(1, 9008000, 1037420720);
    InitializeCommonEvent(2, 9008000, 1037420100);
    InitializeCommonEvent(3, 9008000, 1037420950);
    InitializeCommonEvent(4, 9008000, 1037420201);
    InitializeCommonEvent(5, 9008000, 1037420207);
    InitializeCommonEvent(6, 9008000, 1037420203);
    InitializeCommonEvent(7, 9008000, 1037420213);
    InitializeCommonEvent(8, 9008000, 1037420101);
    InitializeCommonEvent(9, 9008000, 1037420204);
    InitializeCommonEvent(10, 9008000, 1037420205);
    InitializeCommonEvent(11, 9008000, 1037420206);
    InitializeCommonEvent(12, 9008000, 1037420102);
    InitializeCommonEvent(13, 9008000, 1037420103);
    InitializeCommonEvent(14, 9008000, 1037420104);
    InitializeCommonEvent(15, 9008000, 1037420225);
    InitializeCommonEvent(16, 9008000, 1037420105);
    InitializeCommonEvent(17, 9008000, 1037420106);
    InitializeCommonEvent(18, 9008000, 1037420107);
    InitializeCommonEvent(19, 9008000, 1037420108);
    InitializeCommonEvent(20, 9008000, 1037420109);
    InitializeCommonEvent(21, 9008000, 1037420110);
    InitializeCommonEvent(22, 9008000, 1037420200);
    InitializeCommonEvent(23, 9008000, 1037420111);
    InitializeCommonEvent(24, 9008000, 1037420112);
    InitializeCommonEvent(25, 9008000, 1037420113);
    InitializeCommonEvent(26, 9008000, 1037420114);
    InitializeCommonEvent(27, 9008000, 1037420115);
    InitializeCommonEvent(28, 9008000, 1037420116);
    InitializeCommonEvent(29, 9008000, 1037420117);
    InitializeCommonEvent(30, 9008000, 1037420118);
    InitializeCommonEvent(31, 9008000, 1037420119);
    InitializeCommonEvent(32, 9008000, 1037420120);
    InitializeCommonEvent(33, 9008000, 1037420121);
    InitializeCommonEvent(34, 9008000, 1037420122);
    InitializeCommonEvent(35, 9008000, 1037420123);
    InitializeCommonEvent(36, 9008000, 1037420124);
    InitializeCommonEvent(37, 9008000, 1037420125);
    InitializeCommonEvent(38, 9008000, 1037420126);
    InitializeCommonEvent(39, 9008000, 1037420127);
    InitializeCommonEvent(40, 9008000, 1037420128);
    InitializeCommonEvent(41, 9008000, 1037420129);
    InitializeCommonEvent(42, 9008000, 1037420130);
    InitializeCommonEvent(43, 9008000, 1037420131);
    InitializeCommonEvent(44, 9008000, 1037420340);
    InitializeCommonEvent(45, 9008000, 1037420132);
    InitializeCommonEvent(46, 9008000, 1037420133);
    InitializeCommonEvent(47, 9008000, 1037420134);
    
    InitializeCommonEvent(0, 90005860, 1037420800, 0, 1037420340, 0, 1037420400, 0);
    InitializeCommonEvent(0, 90005870, 1037420340, 904980603, 24);
    RegisterBonfire(1037420000, 1037421950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76206, 76203, 1037421980, 77200, 3, 78200, 78201, 78202, 78203, 78204, 78205, 78206, 78207, 78208, 78209);
    InitializeCommonEvent(0, 90005605, 1037421610, 2958140, 1035452630, 0, 1037422610, 1037422611, 1037422612, 0, 0, 0, 0);
    InitializeEvent(0, 1037422600, 0);
    InitializeCommonEvent(0, 90005630, 61374200, 1037421500, 123);
    InitializeEvent(0, 1037423700, 1037420700, 1037421700);
    InitializeEvent(0, 1037423702, 1037422704, 1037422703, 1037429207, 1101004800);
    InitializeEvent(0, 1037423703, 1037421700, 1037420700);
    InitializeCommonEvent(0, 90005752, 1037421700, 200, 120, 1077936128);
    InitializeEvent(0, 1037423710, 1037420720, 1037421720);
    InitializeEvent(0, 1037423711, 1037420720, 1037422731, 1038419251);
    InitializeEvent(0, 1037423712, 0);
    InitializeCommonEvent(0, 90005704, 1037420720, 3681, 3680, 1038419251, 3);
    InitializeCommonEvent(0, 90005703, 1037420720, 3681, 3682, 1038419251, 3681, 3680, 3684, -1);
    InitializeCommonEvent(0, 90005702, 1037420720, 3683, 3680, 3684);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1037420700, true);
    SetCharacterBackreadState(1037420705, true);
    DisableAsset(1037421700);
    InitializeCommonEvent(0, 90005261, 1037420200, 1037422200, 1073741824, 0, 1700);
    InitializeCommonEvent(0, 90005251, 1037420201, 1092616192, 0, 1705);
    InitializeCommonEvent(0, 90005251, 1037420207, 1092616192, 0, 1705);
    InitializeCommonEvent(0, 90005251, 1037420203, 1092616192, 0, 1705);
    InitializeCommonEvent(0, 90005251, 1037420204, 1092616192, 0, 1705);
    InitializeCommonEvent(0, 90005251, 1037420205, 1092616192, 0, 1705);
    InitializeCommonEvent(0, 90005251, 1037420206, 1092616192, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1037420221, 1037422200, 1073741824, 1065353216, 0);
    InitializeCommonEvent(0, 90005261, 1037420222, 1037422200, 1073741824, 1065353216, 0);
    InitializeCommonEvent(0, 90005261, 1037420223, 1037422200, 1073741824, 1065353216, 0);
    InitializeCommonEvent(0, 90005261, 1037420224, 1037422200, 1073741824, 1065353216, 0);
    InitializeCommonEvent(0, 90005261, 1037420225, 1037422200, 1073741824, 1065353216, -1);
    InitializeCommonEvent(0, 90005251, 1037420213, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037420340, 1037422340, 1092616192, 0, 1700);
    InitializeCommonEvent(0, 90005460, 1037420300);
    InitializeCommonEvent(0, 90005461, 1037420300);
    InitializeCommonEvent(0, 90005462, 1037420300);
    InitializeCommonEvent(0, 90005460, 1037420301);
    InitializeCommonEvent(0, 90005461, 1037420301);
    InitializeCommonEvent(0, 90005462, 1037420301);
});

$Event(1037422610, Restart, function(X0_4, X4_1, X5_1, X6_1, X7_1, X8_4, X12_4, X16_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlagID(X12_4, OFF);
    SetEventFlagID(X16_4, OFF);
    WaitFor(ActionButtonInArea(9140, X0_4) && HasMultiplayerState(MultiplayerState.Singleplayer));
    DisplayGenericDialogAndSetEventFlags(4300, PromptType.YESNO, NumberofOptions.TwoButtons, X0_4, 3, X12_4, X16_4, X16_4);
    if (!EventFlag(X12_4)) {
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    RotateCharacter(10000, X0_4, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(X4_1, X5_1, X6_1, X7_1, X8_4, 0);
});

$Event(1037423700, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3420)) {
            SetEventFlagID(1038519203, OFF);
        }
    }
L10:
    if (!EventFlag(3425)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAsset(X4_4);
        WaitFor(EventFlag(3425));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3420));
    GotoIf(L2, EventFlag(3421));
    GotoIf(L3, EventFlag(3422));
    GotoIf(L4, EventFlag(3423));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    EnableAsset(X4_4);
    WarpAssetToCharacter(X4_4, X0_4, -1);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    EnableAsset(X4_4);
    WarpAssetToCharacter(X4_4, X0_4, -1);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    EnableAsset(X4_4);
    WarpAssetToCharacter(X4_4, X0_4, -1);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    WarpAssetToCharacter(X4_4, X0_4, -1);
    DisableAsset(X4_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3425));
    RestartEvent();
});

$Event(1037423702, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3420));
    EndIf(!EventFlag(3425));
    EndIf(EventFlag(X8_4));
    SetCharacterTalkRange(1037420700, 30);
    WaitFor(EventFlag(X4_4));
    WaitFixedTimeSeconds(X12_4);
    SetEventFlagID(X0_4, ON);
    EndEvent();
});

$Event(1037423703, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3425));
    EndIf(EventFlag(1037422708));
    GotoIf(L1, !EventFlag(1037422701));
    Goto(L2);
L1:
    WaitFor(HasDamageType(X0_4, 20000, DamageType.Unspecified));
    WaitFixedTimeSeconds(0.1);
    Goto(L3);
L2:
    dmg = HasDamageType(X0_4, 20000, DamageType.Unspecified);
    WaitFor(dmg || ElapsedSeconds(7));
    if (dmg.Passed) {
        WaitFixedTimeSeconds(0.1);
L3:
        GotoIf(L5, !EventFlag(1037422701));
        GotoIf(L6, !EventFlag(1037422707));
        RestartEvent();
L5:
        if (EntityInRadiusOfEntity(20000, X4_4, 10, 1)) {
            SetEventFlagID(1037422702, ON);
        }
        WaitFor(EventFlag(1037422701));
        RestartEvent();
L6:
        if (EntityInRadiusOfEntity(20000, X4_4, 10, 1)) {
            SetEventFlagID(1037422706, ON);
        }
        WaitFor(EventFlag(1037422707));
        RestartEvent();
    }
L7:
    SetEventFlagID(1037422708, ON);
    EndEvent();
});

$Event(1037423710, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3680)) {
            SetEventFlagID(31009205, OFF);
        }
    }
L10:
    if (!EventFlag(3687)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAsset(X4_4);
        WaitFor(EventFlag(3687));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3680));
    GotoIf(L2, EventFlag(3681));
    GotoIf(L3, EventFlag(3682));
    GotoIf(L4, EventFlag(3683));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    EnableAsset(X4_4);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EnableAsset(X4_4);
    Goto(L20);
L3:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EnableAsset(X4_4);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableAsset(X4_4);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3687));
    RestartEvent();
});

$Event(1037423711, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3683));
    EndIf(!EventFlag(3685) && !EventFlag(3686) && !EventFlag(3687));
    GotoIf(L1, !EventFlag(3681));
    Goto(L2);
L1:
    WaitFor(EventFlag(3681));
    RestartEvent();
L2:
    WaitFor(CharacterHasSpEffect(10000, 9700) && EntityInRadiusOfEntity(10000, X0_4, 5, 1));
    BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
    SetNetworkconnectedEventFlagID(3680, ON);
    SaveRequest();
    SetNetworkconnectedEventFlagID(X4_4, ON);
    SetNetworkconnectedEventFlagID(X8_4, OFF);
    SetNetworkconnectedEventFlagID(31002701, OFF);
    SetNetworkconnectedEventFlagID(31002707, OFF);
    SetNetworkconnectedEventFlagID(31002700, OFF);
    SetNetworkconnectedEventFlagID(31009205, OFF);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ClearCharactersAITarget(X0_4);
    RequestCharacterAIReplan(X0_4);
    EndEvent();
});

$Event(1037423712, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(31009206));
    EndIf(EventFlag(1038419254));
    EndIf(!EventFlag(3685) && !EventFlag(3686) && !EventFlag(3687));
    SetEventFlagID(1038419254, ON);
    WaitFixedTimeFrames(1);
    SetEventFlagID(3698, ON);
    EndEvent();
});


