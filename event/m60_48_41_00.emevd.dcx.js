// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1048410950);
    InitializeCommonEvent(1, 9008000, 1048410800);
    InitializeCommonEvent(2, 9008000, 1048410700);
    InitializeCommonEvent(3, 9008000, 1048410701);
    InitializeCommonEvent(4, 9008000, 1048410290);
    InitializeCommonEvent(5, 9008000, 1048410100);
    InitializeCommonEvent(6, 9008000, 1048410101);
    InitializeCommonEvent(7, 9008000, 1048410102);
    InitializeCommonEvent(8, 9008000, 1048410103);
    InitializeCommonEvent(9, 9008000, 1048410104);
    InitializeCommonEvent(10, 9008000, 1048410105);
    InitializeCommonEvent(11, 9008000, 1048410106);
    InitializeCommonEvent(12, 9008000, 1048410107);
    InitializeCommonEvent(13, 9008000, 1048410108);
    InitializeCommonEvent(14, 9008000, 1048410109);
    InitializeCommonEvent(15, 9008000, 1048410110);
    InitializeCommonEvent(16, 9008000, 1048410111);
    InitializeCommonEvent(17, 9008000, 1048410112);
    InitializeCommonEvent(18, 9008000, 1048410113);
    InitializeCommonEvent(19, 9008000, 1048410114);
    InitializeCommonEvent(20, 9008000, 1048410115);
    InitializeCommonEvent(21, 9008000, 1048410116);
    InitializeCommonEvent(22, 9008000, 1048410117);
    InitializeCommonEvent(23, 9008000, 1048410118);
    InitializeCommonEvent(24, 9008000, 1048410119);
    InitializeCommonEvent(25, 9008000, 1048410120);
    InitializeCommonEvent(26, 9008000, 1048410121);
    InitializeCommonEvent(27, 9008000, 1048410122);
    InitializeCommonEvent(28, 9008000, 1048410123);
    InitializeCommonEvent(29, 9008000, 1048410124);
    InitializeCommonEvent(30, 9008000, 1048410125);
    InitializeCommonEvent(31, 9008000, 1048410126);
    InitializeCommonEvent(32, 9008000, 1048410127);
    InitializeCommonEvent(33, 9008000, 1048410128);
    InitializeCommonEvent(34, 9008000, 1048410129);
    InitializeCommonEvent(35, 9008000, 1048410130);
    InitializeCommonEvent(36, 9008000, 1048410131);
    InitializeCommonEvent(37, 9008000, 1048410132);
    InitializeCommonEvent(38, 9008000, 1048410133);
    InitializeCommonEvent(39, 9008000, 1048410134);
    InitializeCommonEvent(40, 9008000, 1048410135);
    InitializeCommonEvent(41, 9008000, 1048410136);
    
    RegisterBonfire(1048410000, 1048411950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005300, 1048410290, 1048410290, 40412, 0, 0);
    InitializeCommonEvent(0, 90005760, 1048410800, 1048410800, 1048412300, 1048412708);
    InitializeCommonEvent(0, 90005870, 1048410800, 903100603, 10);
    InitializeCommonEvent(0, 90005860, 1048410800, 0, 1048410800, 0, 1048410800, 0);
    InitializeCommonEvent(0, 90005872, 1048410800, 10, 0);
    InitializeCommonEvent(0, 90005702, 1048410700, 4793, 4790, 4793);
    InitializeCommonEvent(0, 90005703, 1048410700, 4791, 4792, 1048410702, 4791, 4790, 4793, 0);
    InitializeCommonEvent(0, 90005704, 1048410700, 4791, 4790, 1048410702, 3);
    InitializeEvent(0, 1048410700, 1048410700, 1048410701, 1048416700);
    InitializeCommonEvent(0, 90005770, 1048410701);
    InitializeCommonEvent(0, 90005727, 4791, 1048410700, 1048410701, 4790, 4793);
    InitializeCommonEvent(0, 90005728, 1048410701, 1048412706, 1048412707);
    InitializeCommonEvent(0, 90005703, 1048410701, 4791, 4792, 1048410702, 4791, 4790, 4793, 0);
    InitializeCommonEvent(0, 90005704, 1048410701, 4791, 4790, 1048410702, 3);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1048410700, true);
    SetCharacterBackreadState(1048410701, true);
});

$Event(1048410700, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4790)) {
            SetEventFlagID(1048419205, OFF);
        }
    }
L10:
    if (!EventFlag(1048412709)) {
        SetNetworkconnectedEventFlagID(1048412708, OFF);
        if (TimeOfDayInRange(20, 0, 0, 5, 30, 0)
            && !EventFlag(1048410800)
            && (EventFlag(1048410701) || EventFlag(4791) || EventFlag(4793))) {
            SetNetworkconnectedEventFlagID(1048412708, ON);
        }
    }
L4:
    SetNetworkconnectedEventFlagID(1048412709, ON);
    GotoIf(L0, EventFlag(4790));
    GotoIf(L1, EventFlag(4791));
    GotoIf(L3, EventFlag(4793));
L0:
    GotoIf(S0, !EventFlag(1048412708));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    DisableAsset(X8_4);
    Goto(L20);
S0:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 930003, false, false, false);
    EnableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, false);
    EnableAsset(X8_4);
    Goto(L20);
L1:
    GotoIf(S1, !EventFlag(1048412708));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    DisableAsset(X8_4);
    Goto(L20);
S1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EnableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, false);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    EnableAsset(X8_4);
    Goto(L20);
L3:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    DisableAsset(X8_4);
    Goto(L20);
L20:
    EndEvent();
});


