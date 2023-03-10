// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_macro.emevd N:\GR\data\Param\event\common.emevd N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\m60.emevd 
// @linked    [0,84,156,238]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1043350710);
    InitializeCommonEvent(1, 9008000, 1043350101);
    InitializeCommonEvent(2, 9008000, 1043350103);
    InitializeCommonEvent(3, 9008000, 1043350950);
    InitializeCommonEvent(4, 9008000, 1043350280);
    InitializeCommonEvent(5, 9008000, 1043350104);
    InitializeCommonEvent(6, 9008000, 1043350105);
    InitializeCommonEvent(7, 9008000, 1043350106);
    InitializeCommonEvent(8, 9008000, 1043350107);
    InitializeCommonEvent(9, 9008000, 1043350108);
    InitializeCommonEvent(10, 9008000, 1043350109);
    InitializeCommonEvent(11, 9008000, 1043350110);
    InitializeCommonEvent(12, 9008000, 1043350111);
    InitializeCommonEvent(13, 9008000, 1043350112);
    InitializeCommonEvent(14, 9008000, 1043350113);
    InitializeCommonEvent(15, 9008000, 1043350114);
    InitializeCommonEvent(16, 9008000, 1043350115);
    InitializeCommonEvent(17, 9008000, 1043350116);
    InitializeCommonEvent(18, 9008000, 1043350117);
    InitializeCommonEvent(19, 9008000, 1043350118);
    InitializeCommonEvent(20, 9008000, 1043350119);
    InitializeCommonEvent(21, 9008000, 1043350120);
    InitializeCommonEvent(22, 9008000, 1043350121);
    InitializeCommonEvent(23, 9008000, 1043350122);
    InitializeCommonEvent(24, 9008000, 1043350123);
    InitializeCommonEvent(25, 9008000, 1043350124);
    InitializeCommonEvent(26, 9008000, 1043350125);
    InitializeCommonEvent(27, 9008000, 1043350126);
    InitializeCommonEvent(28, 9008000, 1043350127);
    InitializeCommonEvent(29, 9008000, 1043350128);
    InitializeCommonEvent(30, 9008000, 1043350129);
    InitializeCommonEvent(31, 9008000, 1043350130);
    InitializeCommonEvent(32, 9008000, 1043350131);
    InitializeCommonEvent(33, 9008000, 1043350132);
    InitializeCommonEvent(34, 9008000, 1043350133);
    InitializeCommonEvent(35, 9008000, 1043350134);
    InitializeCommonEvent(36, 9008000, 1043350135);
    InitializeCommonEvent(37, 9008000, 1043350136);
    InitializeCommonEvent(38, 9008000, 1043350137);
    InitializeCommonEvent(39, 9008000, 1043350138);
    InitializeCommonEvent(40, 9008000, 1043350139);
    InitializeCommonEvent(41, 9008000, 1043350140);
    InitializeCommonEvent(42, 9008000, 1043350141);
    InitializeCommonEvent(43, 9008000, 1043350142);
    InitializeCommonEvent(44, 9008000, 1043350143);
    InitializeCommonEvent(45, 9008000, 1043350144);
    InitializeCommonEvent(46, 9008000, 1043350145);
    InitializeCommonEvent(47, 9008000, 1043350146);
    InitializeCommonEvent(48, 9008000, 1043350147);
    InitializeCommonEvent(49, 9008000, 1043350148);
    InitializeCommonEvent(50, 9008000, 1043350149);
    InitializeCommonEvent(51, 9008000, 1043350150);
    InitializeCommonEvent(52, 9008000, 1043350151);
    
    RegisterBonfire(1043350000, 1043351950, 0, 0, 0, 5);
    InitializeEvent(0, 1043352270, 1043355270, 1043352270);
    InitializeEvent(0, 1043350652, 1520, 710520, 1770, 710770, 69090, 69370);
    InitializeEvent(0, 1043353750, 1043350700, 1043350703);
    InitializeCommonEvent(0, 90005704, 1043350710, 3621, 3620, 1043359251, 3);
    InitializeCommonEvent(0, 90005703, 1043350710, 3621, 3622, 1043359251, 3621, 3620, 3624, -1);
    InitializeCommonEvent(0, 90005702, 1043350710, 1043359259, 1043359259, 1043359259);
    InitializeEvent(0, 1043353710, 1043350710);
    InitializeEvent(0, 1043353711, 1043350710);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1043350710, true);
    InitializeEvent(0, 1043352200, 0);
});

$Event(1043352200, Restart, function() {
    ForceCharacterTreasure(1043355200);
});

$Event(1043352270, Restart, function(X0_4, X4_4) {
    EnableNetworkSync();
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5653);
    SetSpEffect(X0_4, 4802);
    EndIf(EventFlag(1043352270));
    SetSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 5653);
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
    SetNetworkconnectedEventFlagID(1043352270, ON);
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5653);
});

$Event(1043350652, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && PlayerHasItem(ItemType.Goods, 130)
            && PlayerInMap(60, 43, 35, 0)
            && !PlayerHasItem(ItemType.Goods, 9109)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 100690)
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(X4_4, ON);
    SetEventFlagID(X12_4, ON);
    ShowTutorialPopup(X0_4, true, true);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X8_4, true, true);
    EndIf(EventFlag(X16_4));
    DirectlyGivePlayerItem(ItemType.Goods, 9109, X4_4, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 9137, X12_4, 1);
    SetEventFlagID(X16_4, ON);
    SetEventFlagID(X20_4, ON);
});

$Event(1043353710, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3620)) {
            SetEventFlagID(1043379255, OFF);
        }
    }
L10:
    if (!(EventFlag(3626) && (!EventFlag(1043369200) || EventFlag(1043360800)))) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3626) && (!EventFlag(1043369200) || EventFlag(1043360800)));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3620));
    GotoIf(L2, EventFlag(3621));
    GotoIf(L3, EventFlag(3622));
    GotoIf(L4, EventFlag(3623));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(3626) && (!EventFlag(1043369200) || EventFlag(1043360800))));
    RestartEvent();
});

$Event(1043353711, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1044389209));
    EndIf(EventFlag(1035469209));
    EndIf(EventFlag(1039529209));
    if (!EventFlag(1043359259)) {
        WaitFor(EventFlag(1043359259));
        BatchSetNetworkconnectedEventFlags(3620, 3624, OFF);
        SetNetworkconnectedEventFlagID(3623, ON);
        SaveRequest();
        EndEvent();
    }
L1:
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(3626));
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
});

$Event(1043353750, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X4_4, true);
    DisableCharacter(X4_4);
    DisableCharacter(1043350701);
    DisableCharacter(1043350702);
    SetCharacterBackreadState(1043350701, true);
    SetCharacterBackreadState(1043350702, true);
    DisableCharacterAI(1043350701);
    DisableCharacterAI(1043350702);
});


