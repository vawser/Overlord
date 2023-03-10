// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1051430950);
    InitializeCommonEvent(1, 9008000, 1051430100);
    InitializeCommonEvent(2, 9008000, 1051430700);
    InitializeCommonEvent(3, 9008000, 1051430101);
    InitializeCommonEvent(4, 9008000, 1051430102);
    InitializeCommonEvent(5, 9008000, 1051430103);
    InitializeCommonEvent(6, 9008000, 1051430104);
    InitializeCommonEvent(7, 9008000, 1051430105);
    InitializeCommonEvent(8, 9008000, 1051430106);
    InitializeCommonEvent(9, 9008000, 1051430107);
    InitializeCommonEvent(10, 9008000, 1051430108);
    InitializeCommonEvent(11, 9008000, 1051430109);
    InitializeCommonEvent(12, 9008000, 1051430110);
    InitializeCommonEvent(13, 9008000, 1051430111);
    InitializeCommonEvent(14, 9008000, 1051430112);
    InitializeCommonEvent(15, 9008000, 1051430113);
    InitializeCommonEvent(16, 9008000, 1051430114);
    InitializeCommonEvent(17, 9008000, 1051430115);
    InitializeCommonEvent(18, 9008000, 1051430116);
    InitializeCommonEvent(19, 9008000, 1051430117);
    InitializeCommonEvent(20, 9008000, 1051430118);
    InitializeCommonEvent(21, 9008000, 1051430119);
    InitializeCommonEvent(22, 9008000, 1051430120);
    InitializeCommonEvent(23, 9008000, 1051430121);
    InitializeCommonEvent(24, 9008000, 1051430122);
    InitializeCommonEvent(25, 9008000, 1051430123);
    InitializeCommonEvent(26, 9008000, 1051430124);
    InitializeCommonEvent(27, 9008000, 1051430125);
    InitializeCommonEvent(28, 9008000, 1051430126);
    InitializeCommonEvent(29, 9008000, 1051430127);
    InitializeCommonEvent(30, 9008000, 1051430800);
    InitializeCommonEvent(31, 9008000, 1051430128);
    InitializeCommonEvent(32, 9008000, 1051430129);
    InitializeCommonEvent(33, 9008000, 1051430130);
    InitializeCommonEvent(34, 9008000, 1051430131);
    InitializeCommonEvent(35, 9008000, 1051430132);
    InitializeCommonEvent(36, 9008000, 1051430133);
    InitializeCommonEvent(37, 9008000, 1051430134);
    InitializeCommonEvent(38, 9008000, 1051430135);
    InitializeCommonEvent(39, 9008000, 1051430136);
    InitializeCommonEvent(40, 9008000, 1051430137);
    InitializeCommonEvent(41, 9008000, 1051430138);
    InitializeCommonEvent(42, 9008000, 1051430139);
    InitializeCommonEvent(43, 9008000, 1051430140);
    
    RegisterBonfire(1051430000, 1051431950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005870, 1051430800, 904770600, 16);
    InitializeCommonEvent(0, 90005860, 1051430800, 0, 1051430800, 0, 30425, 0);
    InitializeCommonEvent(0, 90005872, 1051430800, 16, 0);
    InitializeEvent(0, 1051432209, 0);
    InitializeEvent(0, 1051432200, 1051430800, 1113325568, 0, -1);
    InitializeEvent(0, 1051430700, 1051430700);
    InitializeCommonEvent(0, 90005703, 1051430700, 3641, 3642, 1051439201, 1051439212, 3640, 3643, -1);
    InitializeCommonEvent(0, 90005704, 1051430700, 1051439212, 3640, 1051439201, 3);
    InitializeCommonEvent(0, 90005702, 1051430700, 3643, 3640, 3643);
    InitializeEvent(0, 1051430702, 1051430700, 1063675494);
    InitializeEvent(0, 1051430703, 1051430700);
});

$Event(1051432200, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    areaFlagChrSp = EntityInRadiusOfEntity(10000, X0_4, X4_4, 1)
        && !EventFlag(1051430210)
        && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom));
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || areaFlagChrSp);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaFlagChrSp.Passed) {
        WaitFixedTimeSeconds(X8_4);
        if (Signed(X12_4) != -1) {
            ForceAnimationPlayback(X0_4, X12_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(1051432209, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(!EntityInRadiusOfEntity(10000, 1051430800, 160, 1));
    SetNetworkconnectedEventFlagID(1051430210, OFF);
});

$Event(1051430700, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3640)) {
            SetEventFlagID(1051439202, OFF);
            SetEventFlagID(1051439212, OFF);
        }
        if (TimeOfDayInRange(20, 0, 0, 5, 30, 0)
            && EventValue(1051439230, 5) >= 1
            && (EventFlag(3645) || EventFlag(3647))) {
            BatchSetEventFlags(1051439240, 1051439249, OFF);
            RandomlySetEventFlagInRange(1051439240, 1051439249, ON);
            GotoIf(S0, EventFlag(1051439220));
            GotoIf(S1, !EventFlag(1051439240));
S0:
            SetNetworkconnectedEventFlagID(1051432703, ON);
        }
S1:
L4:
        NoOp();
    }
L10:
    GotoIf(L5, EventFlag(3645));
    GotoIf(L6, EventFlag(3646));
    GotoIf(L7, EventFlag(3647));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    WaitFor(EventFlag(3645) || EventFlag(3646) || EventFlag(3647));
    RestartEvent();
L5:
L7:
    GotoIf(L0, EventFlag(3640));
    GotoIf(L1, EventFlag(3641));
    GotoIf(L3, EventFlag(3643));
L0:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    GotoIf(S2, !EventFlag(1051432704));
    ForceAnimationPlayback(X0_4, 930016, false, false, false);
    Goto(L20);
S2:
    GotoIf(S3, !EventFlag(1051432703));
    ForceAnimationPlayback(X0_4, 930015, false, false, false);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 1051432700, 900, X0_4);
    Goto(L20);
S3:
    ForceAnimationPlayback(X0_4, 930010, false, false, false);
    Goto(L20);
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 20034, false, false, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(3645) || EventFlag(3647)));
    RestartEvent();
L6:
    GotoIf(L0, EventFlag(3640));
    GotoIf(L1, EventFlag(3641));
    GotoIf(L2, EventFlag(3642));
    GotoIf(L3, EventFlag(3643));
L0:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 930010, false, false, false);
    Goto(L20);
L1:
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 20034, false, false, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3646));
    RestartEvent();
});

$Event(1051430701, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X12_4, OFF);
    WaitFor(!EventFlag(X16_4) && EventFlag(X20_4));
    dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified)
        || HasDamageType(X0_4, 40000, DamageType.Unspecified);
    if (HPRatio(X0_4) >= 1) {
        hpDmg &= HPRatio(X0_4) < 0.65;
    } else if (HPRatio(X0_4) >= 0.9) {
        hpDmg &= HPRatio(X0_4) < 0.55;
    } else if (HPRatio(X0_4) >= 0.8) {
        hpDmg &= HPRatio(X0_4) < 0.45;
    } else if (HPRatio(X0_4) >= 0.7) {
        hpDmg &= HPRatio(X0_4) < 0.35;
    } else if (HPRatio(X0_4) >= 0.7) {
        hpDmg &= HPRatio(X0_4) < 0.25;
    } else {
        hpDmg &= HPRatio(X0_4) < 0.15;
        Goto(L10);
    }
L10:
    hpDmg &= dmg;
    hpFlagDmg = HPRatio(X0_4) > 0 && (EventFlag(X12_4) || hpDmg);
    flag = EventFlag(X16_4) || !EventFlag(X20_4);
    WaitFor(flag || hpFlagDmg);
    RestartIf(flag.Passed);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    ForceAnimationPlayback(X0_4, 20034, false, false, false);
    if (Signed(1) != X28_4) {
        BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
        SetNetworkconnectedEventFlagID(X4_4, ON);
    } else {
L0:
        BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
        SetNetworkconnectedEventFlagID(X8_4, ON);
    }
L9:
    SaveRequest();
    RestartEvent();
});

$Event(1051430702, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3643));
    WaitFor(EventFlag(3642) && HPRatio(X0_4) <= X4_4);
    ForceAnimationPlayback(X0_4, 20039, false, false, false);
    WaitFixedTimeFrames(1);
    RestartIf(!CharacterHasSpEffect(X0_4, 9663));
    BatchSetNetworkconnectedEventFlags(3640, 3643, OFF);
    SetNetworkconnectedEventFlagID(3640, ON);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    SetEventFlagID(1051439212, ON);
    SaveRequest();
    WaitFixedTimeSeconds(8);
    SetEventFlagID(1051439212, OFF);
    SaveRequest();
});

$Event(1051430703, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(3647) && EventValue(1051439235, 5) >= 9);
    SetEventFlagID(1051439212, ON);
    EnableCharacterInvincibility(X0_4);
});

$Event(1051433705, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3641));
    BatchSetNetworkconnectedEventFlags(3640, 3644, OFF);
    SetNetworkconnectedEventFlagID(3640, ON);
    SaveRequest();
    SetNetworkconnectedEventFlagID(1051439201, OFF);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    EndEvent();
});

$Event(1051433706, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3643));
    EndIf(!EventFlag(1051439224));
    BatchSetNetworkconnectedEventFlags(3640, 3644, OFF);
    SetNetworkconnectedEventFlagID(3642, ON);
    SaveRequest();
    SetEventFlagID(X0_4, ON);
    EndEvent();
});

$Event(1051433707, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3643));
    EndIf(!EventFlag(3645));
    SetEventFlagID(X4_4, OFF);
    EndIf(!(EventFlag(1051439225) && !EventFlag(1051439227)));
    SetEventFlagID(X4_4, ON);
    SetEventFlagID(X0_4, ON);
    EndEvent();
});

$Event(1051433708, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3643));
    EndIf(!EventFlag(3645));
    GotoIf(L1, EventFlag(1051439226));
    GotoIf(L1, EventFlag(1051439219));
    GotoIf(L1, 
        !PlayerHasItem(ItemType.Goods, X0_4)
            && !PlayerHasItem(ItemType.Goods, X4_4)
            && !PlayerHasItem(ItemType.Goods, X8_4));
    GotoIf(L2, 
        PlayerHasItem(ItemType.Goods, X0_4)
            && !PlayerHasItem(ItemType.Goods, X4_4)
            && !PlayerHasItem(ItemType.Goods, X8_4));
    GotoIf(L3, 
        !PlayerHasItem(ItemType.Goods, X0_4)
            && PlayerHasItem(ItemType.Goods, X4_4)
            && !PlayerHasItem(ItemType.Goods, X8_4));
    GotoIf(L4, 
        !PlayerHasItem(ItemType.Goods, X0_4)
            && !PlayerHasItem(ItemType.Goods, X4_4)
            && PlayerHasItem(ItemType.Goods, X8_4));
    Goto(L5);
L1:
    BatchSetEventFlags(X12_4, X28_4, OFF);
    SetEventFlagID(X12_4, ON);
    WaitFor(
        (PlayerHasItem(ItemType.Goods, X0_4)
            || PlayerHasItem(ItemType.Goods, X4_4)
            || PlayerHasItem(ItemType.Goods, X8_4))
            && !EventFlag(1051439226)
            && !EventFlag(1051439219));
    RestartEvent();
L2:
    BatchSetEventFlags(X12_4, X28_4, OFF);
    SetEventFlagID(X16_4, ON);
    WaitFor(
        EventFlag(1051439226)
            || EventFlag(1051439219)
            || !PlayerHasItem(ItemType.Goods, X0_4)
            || PlayerHasItem(ItemType.Goods, X4_4)
            || PlayerHasItem(ItemType.Goods, X8_4));
    RestartEvent();
L3:
    BatchSetEventFlags(X12_4, X28_4, OFF);
    SetEventFlagID(X20_4, ON);
    WaitFor(
        EventFlag(1051439226)
            || EventFlag(1051439219)
            || PlayerHasItem(ItemType.Goods, X0_4)
            || !PlayerHasItem(ItemType.Goods, X4_4)
            || PlayerHasItem(ItemType.Goods, X8_4));
    RestartEvent();
L4:
    BatchSetEventFlags(X12_4, X28_4, OFF);
    SetEventFlagID(X24_4, ON);
    WaitFor(
        EventFlag(1051439226)
            || EventFlag(1051439219)
            || PlayerHasItem(ItemType.Goods, X0_4)
            || PlayerHasItem(ItemType.Goods, X4_4)
            || !PlayerHasItem(ItemType.Goods, X8_4));
    RestartEvent();
L5:
    BatchSetEventFlags(X12_4, X28_4, OFF);
    SetEventFlagID(X28_4, ON);
    WaitFor(
        EventFlag(1051439226)
            || EventFlag(1051439219)
            || (!PlayerHasItem(ItemType.Goods, X0_4) && !PlayerHasItem(ItemType.Goods, X4_4))
            || (!PlayerHasItem(ItemType.Goods, X0_4) && !PlayerHasItem(ItemType.Goods, X8_4))
            || (!PlayerHasItem(ItemType.Goods, X4_4) && !PlayerHasItem(ItemType.Goods, X8_4)));
    RestartEvent();
});


