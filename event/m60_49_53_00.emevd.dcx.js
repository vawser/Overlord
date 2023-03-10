// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1049530700);
    InitializeCommonEvent(1, 9008000, 1049530950);
    InitializeCommonEvent(2, 9008000, 1049530100);
    InitializeCommonEvent(3, 9008000, 1049530102);
    InitializeCommonEvent(4, 9008000, 1049530951);
    InitializeCommonEvent(5, 9008000, 1049530101);
    InitializeCommonEvent(6, 9008000, 1049530710);
    InitializeCommonEvent(7, 9008000, 1049530103);
    InitializeCommonEvent(8, 9008000, 1049530104);
    InitializeCommonEvent(9, 9008000, 1049530105);
    InitializeCommonEvent(10, 9008000, 1049530106);
    InitializeCommonEvent(11, 9008000, 1049530200);
    InitializeCommonEvent(12, 9008000, 1049530201);
    InitializeCommonEvent(13, 9008000, 1049530202);
    InitializeCommonEvent(14, 9008000, 1049530203);
    InitializeCommonEvent(15, 9008000, 1049530204);
    InitializeCommonEvent(16, 9008000, 1049530205);
    InitializeCommonEvent(17, 9008000, 1049530206);
    InitializeCommonEvent(18, 9008000, 1049530207);
    InitializeCommonEvent(19, 9008000, 1049530208);
    InitializeCommonEvent(20, 9008000, 1049530209);
    InitializeCommonEvent(21, 9008000, 1049530210);
    InitializeCommonEvent(22, 9008000, 1049530211);
    InitializeCommonEvent(23, 9008000, 1049530212);
    InitializeCommonEvent(24, 9008000, 1049530213);
    InitializeCommonEvent(25, 9008000, 1049530214);
    InitializeCommonEvent(26, 9008000, 1049530107);
    InitializeCommonEvent(27, 9008000, 1049530108);
    InitializeCommonEvent(28, 9008000, 1049530109);
    InitializeCommonEvent(29, 9008000, 1049530110);
    InitializeCommonEvent(30, 9008000, 1049530220);
    InitializeCommonEvent(31, 9008000, 1049530221);
    InitializeCommonEvent(32, 9008000, 1049530222);
    InitializeCommonEvent(33, 9008000, 1049530223);
    InitializeCommonEvent(34, 9008000, 1049530225);
    InitializeCommonEvent(35, 9008000, 1049530226);
    InitializeCommonEvent(36, 9008000, 1049530111);
    InitializeCommonEvent(37, 9008000, 1049530112);
    InitializeCommonEvent(38, 9008000, 1049530113);
    InitializeCommonEvent(39, 9008000, 1049530114);
    InitializeCommonEvent(40, 9008000, 1049530115);
    InitializeCommonEvent(41, 9008000, 1049530116);
    InitializeCommonEvent(42, 9008000, 1049530117);
    InitializeCommonEvent(43, 9008000, 1049530260);
    InitializeCommonEvent(44, 9008000, 1049530261);
    InitializeCommonEvent(45, 9008000, 1049530262);
    InitializeCommonEvent(46, 9008000, 1049530263);
    InitializeCommonEvent(47, 9008000, 1049530301);
    InitializeCommonEvent(48, 9008000, 1049530302);
    InitializeCommonEvent(49, 9008000, 1049530303);
    InitializeCommonEvent(50, 9008000, 1049530304);
    InitializeCommonEvent(51, 9008000, 1049530306);
    InitializeCommonEvent(52, 9008000, 1049530307);
    InitializeCommonEvent(53, 9008000, 1049530308);
    
    RegisterBonfire(1049530000, 1049531950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76510, 76501, 1049531980, 77500, 1, 78500, 78501, 78502, 78503, 78504, 78505, 78506, 78507, 78508, 78509);
    RegisterBonfire(1049530001, 1049531951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005261, 1049530260, 1049532260, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005261, 1049530261, 1049532261, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005261, 1049530262, 1049532262, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005261, 1049530263, 1049532263, 1065353216, 0, 0);
    InitializeCommonEvent(0, 900005610, 1049531600, 100, 800, 0);
    InitializeEvent(0, 1049532200, 1049535200);
    InitializeCommonEvent(0, 90005704, 1049530700, 3621, 3620, 1049539201, 3);
    InitializeCommonEvent(0, 90005703, 1049530700, 3621, 3622, 1049539201, 3621, 3620, 3624, -1);
    InitializeCommonEvent(0, 90005702, 1049530700, 3623, 3620, 3624);
    InitializeEvent(0, 1049533700, 1049530700);
    InitializeEvent(0, 1049533701, 0);
    InitializeEvent(0, 1049533702, 0);
    InitializeEvent(0, 1049533703, 1049530700);
    InitializeCommonEvent(0, 90005705, 1049530710);
    InitializeEvent(0, 1049533705, 0);
    InitializeEvent(0, 1049533710, 1049532710);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1049530700, true);
    SetCharacterBackreadState(1049530710, true);
});

$Event(1049532200, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});

$Event(1049533700, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3620)) {
            SetEventFlagID(1043379255, OFF);
        }
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
L10:
    if (!EventFlag(3631)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3631));
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
    ForceAnimationPlayback(X0_4, 90103, false, false, false);
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
    WaitFor(!EventFlag(3631));
    RestartEvent();
});

$Event(1049533701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1049539210));
    SetEventFlagID(1049539210, ON);
    if (EventFlag(3621)) {
        BatchSetNetworkconnectedEventFlags(3620, 3624, OFF);
        SetNetworkconnectedEventFlagID(3620, ON);
    }
    if (!(EventFlag(1043359259)
        || EventFlag(1044389209)
        || EventFlag(1035469209)
        || EventFlag(1039529209))) {
        if (EventFlag(3626)) {
            SetEventFlagID(1043359259, ON);
        } else if (EventFlag(3625)) {
            SetEventFlagID(1044389209, ON);
        } else if (EventFlag(3627)) {
            SetEventFlagID(1035469209, ON);
        } else if (EventFlag(3630)) {
            SetEventFlagID(1039529209, ON);
            Goto(L1);
        }
    }
L1:
    WaitFixedTimeFrames(1);
    SetEventFlagID(3638, ON);
    EndEvent();
});

$Event(1049533702, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3623) && EventFlag(3631));
    WaitFor(EventFlag(3631));
    EndIf(!EventFlag(35000500));
    BatchSetNetworkconnectedEventFlags(3620, 3624, OFF);
    SetNetworkconnectedEventFlagID(3623, ON);
    SaveRequest();
    EndEvent();
});

$Event(1049533703, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3623));
    WaitFor(CharacterDead(X0_4) && !EventFlag(3623));
    SetEventFlagID(1049539212, ON);
    EnableCharacterDefaultBackread(X0_4);
    WaitFor(!CharacterHasSpEffect(X0_4, 9600) || ElapsedSeconds(60));
    DisableCharacterDefaultBackread(X0_4);
    EndEvent();
});

$Event(1049533705, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(11109561));
    WaitFor(InArea(10000, 1049532500));
    SetNetworkconnectedEventFlagID(11109561, ON);
    EndEvent();
});

$Event(1049533710, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    DisableNetworkSync();
    SetEventFlagID(X0_4, OFF);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Multiplayer)
            || HasMultiplayerState(MultiplayerState.MultiplayerPending));
    SetEventFlagID(X0_4, ON);
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.Multiplayer)
            || HasMultiplayerState(MultiplayerState.MultiplayerPending)));
    RestartEvent();
});


