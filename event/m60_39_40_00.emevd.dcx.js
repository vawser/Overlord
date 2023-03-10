// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1039400701);
    InitializeCommonEvent(1, 9008000, 1039400100);
    InitializeCommonEvent(2, 9008000, 1039400950);
    InitializeCommonEvent(3, 9008000, 1039400210);
    InitializeCommonEvent(4, 9008000, 1039400211);
    InitializeCommonEvent(5, 9008000, 1039400213);
    InitializeCommonEvent(6, 9008000, 1039400710);
    InitializeCommonEvent(7, 9008000, 1039400101);
    InitializeCommonEvent(8, 9008000, 1039400102);
    InitializeCommonEvent(9, 9008000, 1039400103);
    InitializeCommonEvent(10, 9008000, 1039400104);
    InitializeCommonEvent(11, 9008000, 1039400105);
    InitializeCommonEvent(12, 9008000, 1039400106);
    InitializeCommonEvent(13, 9008000, 1039400107);
    InitializeCommonEvent(14, 9008000, 1039400108);
    InitializeCommonEvent(15, 9008000, 1039400109);
    InitializeCommonEvent(16, 9008000, 1039400110);
    InitializeCommonEvent(17, 9008000, 1039400111);
    InitializeCommonEvent(18, 9008000, 1039400112);
    InitializeCommonEvent(19, 9008000, 1039400113);
    InitializeCommonEvent(20, 9008000, 1039400114);
    InitializeCommonEvent(21, 9008000, 1039400115);
    InitializeCommonEvent(22, 9008000, 1039400116);
    InitializeCommonEvent(23, 9008000, 1039400220);
    InitializeCommonEvent(24, 9008000, 1039400117);
    InitializeCommonEvent(25, 9008000, 1039400118);
    InitializeCommonEvent(26, 9008000, 1039400119);
    InitializeCommonEvent(27, 9008000, 1039400120);
    InitializeCommonEvent(28, 9008000, 1039400121);
    InitializeCommonEvent(29, 9008000, 1039400122);
    InitializeCommonEvent(30, 9008000, 1039400123);
    InitializeCommonEvent(31, 9008000, 1039400124);
    InitializeCommonEvent(32, 9008000, 1039400125);
    InitializeCommonEvent(33, 9008000, 1039400126);
    InitializeCommonEvent(34, 9008000, 1039400127);
    InitializeCommonEvent(35, 9008000, 1039400128);
    InitializeCommonEvent(36, 9008000, 1039400129);
    InitializeCommonEvent(37, 9008000, 1039400130);
    InitializeCommonEvent(38, 9008000, 1039400131);
    InitializeCommonEvent(39, 9008000, 1039400132);
    InitializeCommonEvent(40, 9008000, 1039400133);
    
    RegisterBonfire(1039400000, 1039401950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76206, 76200, 1039401980, 77200, 0, 78200, 78201, 78202, 78203, 78204, 78205, 78206, 78207, 78208, 78209);
    InitializeCommonEvent(0, 900005610, 1039401680, 100, 800, 0);
    InitializeEvent(0, 1039400700, 1039400701);
    InitializeCommonEvent(0, 90005702, 1039400701, 3383, 3380, 3383);
    InitializeCommonEvent(0, 90005703, 1039400701, 3381, 3382, 1039409201, 3381, 3380, 3383, 0);
    InitializeCommonEvent(0, 90005704, 1039400701, 3381, 3380, 1039409201, 3);
    InitializeEvent(0, 1039400701, 0);
    InitializeCommonEvent(0, 90005703, 1039400710, 3941, 3942, 1039409251, 3941, 3940, 3943, 0);
    InitializeCommonEvent(0, 90005704, 1039400710, 3941, 3940, 1039409251, 3);
    InitializeCommonEvent(0, 90005702, 1039400710, 3943, 3940, 3944);
    InitializeEvent(0, 1039403710, 1039400710);
    InitializeEvent(0, 1039403711, 1039400710);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1039400701, true);
    SetCharacterBackreadState(1039400710, true);
    InitializeCommonEvent(0, 90005261, 1039400210, 1039402210, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005261, 1039400211, 1039402211, 1084227584, 1056964608, -1);
    InitializeCommonEvent(0, 90005261, 1039400212, 1039402211, 1084227584, 1065353216, -1);
    InitializeCommonEvent(0, 90005261, 1039400213, 1039402211, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005211, 1039400220, 30001, 20001, 1039402220, 0, 0, 0, 0, 0, 0);
});

$Event(1039400700, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3380)) {
            SetEventFlagID(1039409202, OFF);
        }
    }
L19:
    if (!EventFlag(3387)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3387));
        RestartEvent();
    }
L7:
    GotoIf(L0, EventFlag(3380));
    GotoIf(L1, EventFlag(3381));
    GotoIf(L3, EventFlag(3383));
L0:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    Goto(L20);
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetSpEffect(X0_4, 9628);
    Goto(L20);
L3:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3387));
    RestartEvent();
});

$Event(1039400701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1045349259));
    WaitFor(EventFlag(1039409206));
    SetEventFlagID(3418, ON);
});

$Event(1039403710, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    SetEventFlagID(1039409250, OFF);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3940) && EventFlag(1043379353)) {
            SetEventFlagID(1043379353, OFF);
        }
    }
L0:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!(EventFlag(3947)
        && !EventFlag(1036489213)
        && !EventFlag(1039519209)
        && !EventFlag(11109819)
        && !EventFlag(3955)
        && !EventFlag(3956)
        && !EventFlag(3957))) {
        flag &= EventFlag(3947)
            && !EventFlag(1036489213)
            && !EventFlag(1039519209)
            && !EventFlag(11109819)
            && !EventFlag(3955)
            && !EventFlag(3956)
            && !EventFlag(3957);
        WaitFor(flag);
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3940));
    GotoIf(L2, EventFlag(3941));
    GotoIf(L3, EventFlag(3942));
    GotoIf(L4, EventFlag(3943));
L1:
    if (!EventFlag(3954)) {
        if (!EventFlag(1039409264)) {
            flag &= EventFlag(76200) && EventFlag(9000);
            WaitFor(flag);
        }
    }
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 930010, false, false, false);
    SetNetworkconnectedEventFlagID(1039409264, ON);
    SetNetworkconnectedEventFlagID(3954, ON);
    Goto(L20);
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
    WaitFor(
        !(EventFlag(3947)
            && !EventFlag(1036489213)
            && !EventFlag(1039519209)
            && !EventFlag(11109819)
            && !EventFlag(3955)
            && !EventFlag(3956)
            && !EventFlag(3957)));
    RestartEvent();
});

$Event(1039403711, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3943) || !EventFlag(3947) || EventFlag(1039409259));
    WaitFor(EntityInRadiusOfEntity(X0_4, 20000, 4, 1) && CharacterHasSpEffect(20000, 9690));
    SetNetworkconnectedEventFlagID(1039402710, ON);
    EndEvent();
});


