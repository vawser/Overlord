// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1035460715);
    InitializeCommonEvent(1, 9008000, 1035460711);
    InitializeCommonEvent(2, 9008000, 1035460710);
    InitializeCommonEvent(3, 9008000, 1035460950);
    InitializeCommonEvent(4, 9008000, 1035460100);
    InitializeCommonEvent(5, 9008000, 1035460101);
    InitializeCommonEvent(6, 9008000, 1035460102);
    InitializeCommonEvent(7, 9008000, 1035460103);
    InitializeCommonEvent(8, 9008000, 1035460104);
    InitializeCommonEvent(9, 9008000, 1035460105);
    InitializeCommonEvent(10, 9008000, 1035460106);
    InitializeCommonEvent(11, 9008000, 1035460107);
    InitializeCommonEvent(12, 9008000, 1035460108);
    InitializeCommonEvent(13, 9008000, 1035460109);
    InitializeCommonEvent(14, 9008000, 1035460110);
    InitializeCommonEvent(15, 9008000, 1035460111);
    InitializeCommonEvent(16, 9008000, 1035460112);
    InitializeCommonEvent(17, 9008000, 1035460113);
    InitializeCommonEvent(18, 9008000, 1035460114);
    InitializeCommonEvent(19, 9008000, 1035460115);
    InitializeCommonEvent(20, 9008000, 1035460116);
    InitializeCommonEvent(21, 9008000, 1035460212);
    InitializeCommonEvent(22, 9008000, 1035460213);
    InitializeCommonEvent(23, 9008000, 1035460117);
    InitializeCommonEvent(24, 9008000, 1035460118);
    InitializeCommonEvent(25, 9008000, 1035460119);
    InitializeCommonEvent(26, 9008000, 1035460120);
    InitializeCommonEvent(27, 9008000, 1035460121);
    InitializeCommonEvent(28, 9008000, 1035460122);
    InitializeCommonEvent(29, 9008000, 1035460123);
    InitializeCommonEvent(30, 9008000, 1035460124);
    InitializeCommonEvent(31, 9008000, 1035460125);
    InitializeCommonEvent(32, 9008000, 1035460126);
    InitializeCommonEvent(33, 9008000, 1035460127);
    InitializeCommonEvent(34, 9008000, 1035460128);
    InitializeCommonEvent(35, 9008000, 1035460129);
    InitializeCommonEvent(36, 9008000, 1035460130);
    InitializeCommonEvent(37, 9008000, 1035460131);
    InitializeCommonEvent(38, 9008000, 1035460132);
    InitializeCommonEvent(39, 9008000, 1035460133);
    InitializeCommonEvent(40, 9008000, 1035460134);
    InitializeCommonEvent(41, 9008000, 1035460135);
    InitializeCommonEvent(42, 9008000, 1035460136);
    
    RegisterBonfire(1035460000, 1035461950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76206, 76206, 1035461980, 77200, 6, 78200, 78201, 78202, 78203, 78204, 78205, 78206, 78207, 78208, 78209);
    InitializeCommonEvent(0, 90005201, 1035460350, 30000, 20000, 1092616192, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1035462600, 1035461600, 2958140, 1035452610, 1035450605, 1035461602, 60470, 9522);
    InitializeEvent(1, 1035462600, 1035461601, 3089468, 1036472610, 1036470605, 1035461603, 60470, 9522);
    InitializeEvent(0, 1035462605, 1035460605, 1035462601, 60471);
    InitializeEvent(1, 1035462605, 1035460615, 1035462606, 60471);
    InitializeCommonEvent(0, 900005610, 1035461680, 100, 800, 0);
    InitializeCommonEvent(0, 90005795, 7607, 0, 1035469205, 1035462141, 1035462142, 80607, 9000, 1035461700, 30010);
    if (CeremonyActive(40)) {
        InitializeCommonEvent(0, 90005796, 7607, 1035460715, 5, 1035462141);
        InitializeEvent(0, 1035462145, 0);
    }
    InitializeCommonEvent(0, 90005704, 1035460710, 3621, 3620, 1035469201, 3);
    InitializeCommonEvent(0, 90005703, 1035460710, 3621, 3622, 1035469201, 3621, 3620, 3624, -1);
    InitializeCommonEvent(0, 90005702, 1035460710, 1035469209, 1035469209, 1035469209);
    InitializeEvent(0, 1035463700, 1035460710);
    InitializeEvent(0, 1035463701, 0);
    InitializeEvent(0, 1035463702, 1035460710);
    InitializeCommonEvent(0, 90005774, 7607, 1035460700, 1035467700);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1035460710, true);
    SetCharacterBackreadState(1035460711, true);
    SetCharacterBackreadState(1035460715, true);
    InitializeCommonEvent(0, 90005251, 1035460212, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005251, 1035460213, 1088421888, 0, -1);
});

$Event(1035462145, Restart, function() {
    EndIf(!CeremonyActive(40));
    SetCharacterBackreadState(1035460715, false);
    SetCharacterBackreadState(1035460711, false);
    SetCharacterTeamType(1035460715, TeamType.Human);
    SetCharacterTeamType(1035460711, TeamType.Enemy);
    DeleteAssetfollowingSFX(1035466700, true);
    CreateAssetfollowingSFX(1035466700, 200, 806700);
});

$Event(1035463700, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3620)) {
            SetEventFlagID(1043379255, OFF);
        }
    }
L10:
    if (!EventFlag(3627)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3627));
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
    WaitFor(!EventFlag(3627));
    RestartEvent();
});

$Event(1035463701, Restart, function() {
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(3631));
    EndIf(!EventFlag(3620));
    EndIf(!EventFlag(1043379260));
    SetEventFlagID(1035469205, ON);
    EndEvent();
});

$Event(1035463702, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043359259));
    EndIf(EventFlag(1044389209));
    EndIf(EventFlag(1039529209));
    if (!EventFlag(1035469209)) {
        WaitFor(EventFlag(1035469209));
        BatchSetNetworkconnectedEventFlags(3620, 3624, OFF);
        SetNetworkconnectedEventFlagID(3623, ON);
        SaveRequest();
        EndEvent();
    }
L1:
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(3627));
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
});

$Event(1035462600, Default, function(X0_4, X4_1, X5_1, X6_1, X7_1, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(!PlayerIsInOwnWorld());
    online = HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending);
    onlineAct &= !online;
    GotoIf(S0, online);
    onlineAct &= PlayerIsInOwnWorld() && ActionButtonInArea(X24_4, X0_4);
    WaitFor(onlineAct);
    if (!PlayerHasItem(ItemType.Goods, 8109)) {
        WaitFixedTimeSeconds(0.1);
        DisplayGenericDialog(20030, PromptType.OKCANCEL, NumberofOptions.OneButton, X0_4, 3);
S0:
        RestartEvent();
    }
L1:
    RotateCharacter(10000, X16_4, -1, true);
    ForceAnimationPlayback(10000, X20_4, false, false, false);
    WaitFixedTimeSeconds(2.5);
    SetEventFlagID(X12_4, ON);
    WarpPlayer(X4_1, X5_1, X6_1, X7_1, X8_4, 0);
});

$Event(1035462605, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    WaitFixedTimeFrames(1);
    RotateCharacter(10000, X4_4, X8_4, false);
    SetEventFlagID(X0_4, OFF);
});


