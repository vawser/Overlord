// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1041360702);
    InitializeCommonEvent(1, 9008000, 1041360100);
    InitializeCommonEvent(2, 9008000, 1041360700);
    InitializeCommonEvent(3, 9008000, 1041360701);
    InitializeCommonEvent(4, 9008000, 1041360101);
    InitializeCommonEvent(5, 9008000, 1041360103);
    InitializeCommonEvent(6, 9008000, 1041360105);
    InitializeCommonEvent(7, 9008000, 1041360106);
    InitializeCommonEvent(8, 9008000, 1041360210);
    InitializeCommonEvent(9, 9008000, 1041360211);
    InitializeCommonEvent(10, 9008000, 1041360107);
    InitializeCommonEvent(11, 9008000, 1041360108);
    InitializeCommonEvent(12, 9008000, 1041360109);
    InitializeCommonEvent(13, 9008000, 1041360250);
    InitializeCommonEvent(14, 9008000, 1041360110);
    InitializeCommonEvent(15, 9008000, 1041360111);
    InitializeCommonEvent(16, 9008000, 1041360112);
    InitializeCommonEvent(17, 9008000, 1041360113);
    InitializeCommonEvent(18, 9008000, 1041360114);
    InitializeCommonEvent(19, 9008000, 1041360115);
    InitializeCommonEvent(20, 9008000, 1041360116);
    InitializeCommonEvent(21, 9008000, 1041360117);
    InitializeCommonEvent(22, 9008000, 1041360118);
    InitializeCommonEvent(23, 9008000, 1041360119);
    InitializeCommonEvent(24, 9008000, 1041360120);
    InitializeCommonEvent(25, 9008000, 1041360121);
    InitializeCommonEvent(26, 9008000, 1041360122);
    InitializeCommonEvent(27, 9008000, 1041360123);
    InitializeCommonEvent(28, 9008000, 1041360124);
    InitializeCommonEvent(29, 9008000, 1041360125);
    InitializeCommonEvent(30, 9008000, 1041360126);
    InitializeCommonEvent(31, 9008000, 1041360127);
    InitializeCommonEvent(32, 9008000, 1041360128);
    InitializeCommonEvent(33, 9008000, 1041360129);
    InitializeCommonEvent(34, 9008000, 1041360130);
    InitializeCommonEvent(35, 9008000, 1041360131);
    InitializeCommonEvent(36, 9008000, 1041360132);
    InitializeCommonEvent(37, 9008000, 1041360133);
    InitializeCommonEvent(38, 9008000, 1041360134);
    InitializeCommonEvent(39, 9008000, 1041360135);
    InitializeCommonEvent(40, 9008000, 1041360136);
    InitializeCommonEvent(41, 9008000, 1041360137);
    InitializeCommonEvent(42, 9008000, 1041360138);
    InitializeCommonEvent(43, 9008000, 1041360139);
    InitializeCommonEvent(44, 9008000, 1041360140);
    InitializeCommonEvent(45, 9008000, 1041360141);
    InitializeCommonEvent(46, 9008000, 1041360142);
    InitializeCommonEvent(47, 9008000, 1041360143);
    InitializeCommonEvent(48, 9008000, 1041360144);
    InitializeCommonEvent(49, 9008000, 1041360145);
    InitializeCommonEvent(50, 9008000, 1041360146);
    InitializeCommonEvent(51, 9008000, 1041360147);
    InitializeCommonEvent(52, 9008000, 1041360148);
    InitializeCommonEvent(53, 9008000, 1041360149);
    InitializeCommonEvent(54, 9008000, 1041360150);
    InitializeCommonEvent(55, 9008000, 1041360151);
    InitializeCommonEvent(56, 9008000, 1041360152);
    InitializeCommonEvent(57, 9008000, 1041360153);
    InitializeCommonEvent(58, 9008000, 1041360154);
    InitializeCommonEvent(59, 9008000, 1041360155);
    
    InitializeCommonEvent(0, 900005610, 1041361680, 100, 800, 0);
    InitializeCommonEvent(0, 90005460, 1041360210);
    InitializeCommonEvent(0, 90005461, 1041360210);
    InitializeCommonEvent(0, 90005462, 1041360210);
    InitializeCommonEvent(0, 90005460, 1041360211);
    InitializeCommonEvent(0, 90005461, 1041360211);
    InitializeCommonEvent(0, 90005462, 1041360211);
    InitializeEvent(0, 1041362650, 1550, 710550);
    InitializeCommonEvent(0, 90005725, 4730, 4731, 4733, 1041369205, 1041360700, 1041360701, 1041366700);
    InitializeCommonEvent(0, 90005703, 1041360700, 4731, 4732, 1041369206, 4731, 4730, 4734, 0);
    InitializeCommonEvent(0, 90005704, 1041360700, 4731, 4730, 1041369206, 3);
    InitializeCommonEvent(0, 90005702, 1041360700, 4733, 4730, 4734);
    InitializeCommonEvent(0, 90005703, 1041360701, 4731, 4732, 1041369207, 4731, 4730, 4734, 0);
    InitializeCommonEvent(0, 90005704, 1041360701, 4731, 4730, 1041369207, 3);
    InitializeCommonEvent(0, 90005728, 1041360701, 1041362706, 1041362707);
    InitializeCommonEvent(0, 90005727, 4731, 1041360700, 1041360701, 4730, 4733);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1041360700, true);
    SetCharacterBackreadState(1041360701, true);
    InitializeCommonEvent(0, 90005251, 1041360250, 1117782016, 0, -1);
});

$Event(1041362650, Restart, function(X0_4, X4_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFor(
        HasMultiplayerState(MultiplayerState.Singleplayer)
            && !PlayerHasItemIncludingBBox(ItemType.Goods, 9111)
            && PlayerInMap(60, 41, 36, 0)
            && (PlayerHasItemIncludingBBox(ItemType.Goods, 215000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 213000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 240000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 243000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 234000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 244000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 236000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 232000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 212000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 241000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 213000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 233000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 245000)));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9111, X4_4, 1);
});

$Event(1041363700, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(1041369200, OFF);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4740) && EventFlag(1041369203)) {
            SetEventFlagID(1041369203, OFF);
        }
    }
L0:
    DisableCharacter(X0_4);
    DisableCharacter(X4_4);
    DisableCharacter(X8_4);
    DisableAsset(X12_4);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    GotoIf(L20, !EventFlag(4745));
    GotoIf(L1, EventFlag(4740));
    GotoIf(L2, EventFlag(4741));
    GotoIf(L4, EventFlag(4743));
L1:
    EnableCharacter(X0_4);
    EnableCharacter(X4_4);
    EnableCharacter(X8_4);
    EnableAsset(X12_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterBackreadState(X4_4, false);
    SetCharacterBackreadState(X8_4, false);
    ForceAnimationPlayback(X0_4, 30003, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    EnableCharacter(X4_4);
    EnableCharacter(X8_4);
    EnableAsset(X12_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterBackreadState(X4_4, false);
    SetCharacterBackreadState(X8_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    ForceCharacterTreasure(X4_4);
    DisableCharacter(X0_4);
    DisableCharacter(X4_4);
    EnableAsset(X12_4);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    Goto(L20);
L20:
    WaitFor(EventFlag(1041369200));
    RestartEvent();
});

$Event(1041363706, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        (HasDamageType(X0_4, 20000, DamageType.Unspecified)
            || HasDamageType(X0_4, 40000, DamageType.Unspecified))
            && !EventFlag(1041362701));
    SetNetworkconnectedEventFlagID(1041362708, ON);
    EndEvent();
});

$Event(1041363707, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(X4_4));
    SetNetworkconnectedEventFlagID(X24_4, OFF);
    flagDmgHp = (EventFlag(X8_4) || EventFlag(X12_4))
        || (HasDamageType(X0_4, 20000, DamageType.Unspecified) && CharacterHPValue(X0_4) < 1);
    flagDmgHp2 = EventFlag(X24_4)
        || (HasDamageType(X20_4, 20000, DamageType.Unspecified) && CharacterHPValue(X20_4) < 1);
    WaitFor(flagDmgHp || flagDmgHp2);
    GotoIf(L0, flagDmgHp.Passed);
    GotoIf(L5, flagDmgHp2.Passed);
L0:
    SetNetworkconnectedEventFlagID(X24_4, ON);
    SetCharacterTeamType(X20_4, TeamType.HostileNPC);
    Goto(L10);
L5:
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EnableCharacterAI(X0_4);
    BatchSetNetworkconnectedEventFlags(X4_4, X16_4, OFF);
    SetNetworkconnectedEventFlagID(X8_4, ON);
    SaveRequest();
    if (CharacterHasSpEffect(X0_4, 9603)) {
        ForceAnimationPlayback(X0_4, 20009, false, false, false);
    }
    Goto(L10);
L10:
    WaitFixedTimeFrames(1);
    SetNetworkconnectedEventFlagID(X24_4, OFF);
    WaitFor(EventFlag(X24_4));
    SetNetworkconnectedEventFlagID(X24_4, OFF);
    EndEvent();
});


