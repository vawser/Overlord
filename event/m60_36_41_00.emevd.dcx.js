// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common.emevd N:\GR\data\Param\event\m60.emevd N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd 
// @linked    [0,72,138,220]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1036410101);
    InitializeCommonEvent(1, 9008000, 1036410102);
    InitializeCommonEvent(2, 9008000, 1036410950);
    InitializeCommonEvent(3, 9008000, 1036410100);
    InitializeCommonEvent(4, 9008000, 1036410700);
    InitializeCommonEvent(5, 9008000, 1036410705);
    InitializeCommonEvent(6, 9008000, 1036410103);
    InitializeCommonEvent(7, 9008000, 1036410104);
    InitializeCommonEvent(8, 9008000, 1036410105);
    InitializeCommonEvent(9, 9008000, 1036410106);
    InitializeCommonEvent(10, 9008000, 1036410107);
    InitializeCommonEvent(11, 9008000, 1036410108);
    InitializeCommonEvent(12, 9008000, 1036410109);
    InitializeCommonEvent(13, 9008000, 1036410110);
    InitializeCommonEvent(14, 9008000, 1036410111);
    InitializeCommonEvent(15, 9008000, 1036410112);
    InitializeCommonEvent(16, 9008000, 1036410113);
    InitializeCommonEvent(17, 9008000, 1036410114);
    InitializeCommonEvent(18, 9008000, 1036410115);
    InitializeCommonEvent(19, 9008000, 1036410116);
    InitializeCommonEvent(20, 9008000, 1036410117);
    InitializeCommonEvent(21, 9008000, 1036410118);
    InitializeCommonEvent(22, 9008000, 1036410119);
    InitializeCommonEvent(23, 9008000, 1036410120);
    InitializeCommonEvent(24, 9008000, 1036410121);
    InitializeCommonEvent(25, 9008000, 1036410122);
    InitializeCommonEvent(26, 9008000, 1036410123);
    InitializeCommonEvent(27, 9008000, 1036410124);
    InitializeCommonEvent(28, 9008000, 1036410125);
    InitializeCommonEvent(29, 9008000, 1036410126);
    InitializeCommonEvent(30, 9008000, 1036410127);
    InitializeCommonEvent(31, 9008000, 1036410128);
    InitializeCommonEvent(32, 9008000, 1036410129);
    InitializeCommonEvent(33, 9008000, 1036410130);
    InitializeCommonEvent(34, 9008000, 1036410131);
    InitializeCommonEvent(35, 9008000, 1036410132);
    InitializeCommonEvent(36, 9008000, 1036410133);
    InitializeCommonEvent(37, 9008000, 1036410134);
    InitializeCommonEvent(38, 9008000, 1036410135);
    InitializeCommonEvent(39, 9008000, 1036410136);
    InitializeCommonEvent(40, 9008000, 1036410137);
    InitializeCommonEvent(41, 9008000, 1036410138);
    InitializeCommonEvent(42, 9008000, 1036410139);
    InitializeCommonEvent(43, 9008000, 1036410140);
    InitializeCommonEvent(44, 9008000, 1036410141);
    InitializeCommonEvent(45, 9008000, 1036410142);
    InitializeCommonEvent(46, 9008000, 1036410143);
    InitializeCommonEvent(47, 9008000, 1036410144);
    InitializeCommonEvent(48, 9008000, 1036410145);
    InitializeCommonEvent(49, 9008000, 1036410146);
    InitializeCommonEvent(50, 9008000, 1036410147);
    InitializeCommonEvent(51, 9008000, 1036410148);
    InitializeCommonEvent(52, 9008000, 1036410149);
    InitializeCommonEvent(53, 9008000, 1036410150);
    InitializeCommonEvent(54, 9008000, 1036410151);
    InitializeCommonEvent(55, 9008000, 1036410152);
    InitializeCommonEvent(56, 9008000, 1036410153);
    InitializeCommonEvent(57, 9008000, 1036410154);
    InitializeCommonEvent(58, 9008000, 1036410155);
    InitializeCommonEvent(59, 9008000, 1036410156);
    InitializeCommonEvent(60, 9008000, 1036410157);
    InitializeCommonEvent(61, 9008000, 1036410158);
    InitializeCommonEvent(62, 9008000, 1036410159);
    InitializeCommonEvent(63, 9008000, 1036410160);
    InitializeCommonEvent(64, 9008000, 1036410161);
    InitializeCommonEvent(65, 9008000, 1036410162);
    InitializeCommonEvent(66, 9008000, 1036410163);
    
    RegisterBonfire(1036410000, 1036411950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005570, 60824, 54, 1036411500, 2, 1, 0);
    InitializeEvent(0, 1036413700, 1036410700, 1036410705);
    InitializeEvent(0, 1036413701, 1036410700);
    InitializeEvent(0, 1036413702, 1036410700);
    InitializeCommonEvent(0, 90005704, 1036410700, 4101, 4100, 1036419201, 3);
    InitializeCommonEvent(0, 90005703, 1036410700, 4101, 4102, 1036419201, 4101, 4100, 4104, -1);
    InitializeCommonEvent(0, 90005702, 1036410700, 4103, 4100, 4104);
    InitializeCommonEvent(0, 90005750, 1036411700, 4350, 104100, 400410, 400410, 1036419215, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1036410700, true);
    SetCharacterBackreadState(1036410705, true);
});

$Event(1036413700, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4100)) {
            SetEventFlagID(1036419203, OFF);
        }
    }
L10:
    SetCharacterBackreadState(X4_4, false);
    EnableCharacter(X4_4);
    SetCharacterTeamType(X4_4, TeamType.Disabled);
    ForceAnimationPlayback(X4_4, 30020, false, false, false);
    if (!EventFlag(4105)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(4105));
        RestartEvent();
    }
L5:
    if (EventFlag(1051587800)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        SetEventFlagID(1036419215, ON);
    } else {
        GotoIf(L1, EventFlag(4100));
        GotoIf(L2, EventFlag(4101));
        GotoIf(L3, EventFlag(4102));
        GotoIf(L4, EventFlag(4103));
L1:
        SetCharacterBackreadState(X0_4, false);
        EnableCharacter(X0_4);
        SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
        ForceAnimationPlayback(X0_4, 30020, false, false, false);
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
    }
L20:
    WaitFor(!EventFlag(4105));
    RestartEvent();
});

$Event(1036413701, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(4100));
    EndIf(!EventFlag(4105));
    WaitFor(EventFlag(1036419209));
    DisableCharacterCollision(X0_4);
    WaitFixedTimeSeconds(30);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
});

$Event(1036413702, Restart, function(X0_4) {
    EndIf(EventFlag(4101));
    EndIf(EventFlag(4103));
    WaitFor(CharacterHasSpEffect(X0_4, 9644) || EventFlag(4101));
    EndIf(CharacterHasSpEffect(X0_4, 9644) && !EventFlag(4101));
    ForceAnimationPlayback(X0_4, 20022, false, false, false);
    EndEvent();
});


