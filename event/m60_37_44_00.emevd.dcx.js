// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\m60.emevd N:\GR\data\Param\event\common_macro.emevd     
// @linked    [0,82,148]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1037440700);
    InitializeCommonEvent(1, 9008000, 1037440710);
    InitializeCommonEvent(2, 9008000, 1037440101);
    InitializeCommonEvent(3, 9008000, 1037440102);
    InitializeCommonEvent(4, 9008000, 1037440950);
    InitializeCommonEvent(5, 9008000, 1037440100);
    InitializeCommonEvent(6, 9008000, 1037440103);
    InitializeCommonEvent(7, 9008000, 1037440104);
    InitializeCommonEvent(8, 9008000, 1037440105);
    InitializeCommonEvent(9, 9008000, 1037440106);
    InitializeCommonEvent(10, 9008000, 1037440107);
    InitializeCommonEvent(11, 9008000, 1037440108);
    InitializeCommonEvent(12, 9008000, 1037440109);
    InitializeCommonEvent(13, 9008000, 1037440110);
    InitializeCommonEvent(14, 9008000, 1037440111);
    InitializeCommonEvent(15, 9008000, 1037440112);
    InitializeCommonEvent(16, 9008000, 1037440113);
    InitializeCommonEvent(17, 9008000, 1037440114);
    InitializeCommonEvent(18, 9008000, 1037440115);
    InitializeCommonEvent(19, 9008000, 1037440116);
    InitializeCommonEvent(20, 9008000, 1037440200);
    InitializeCommonEvent(21, 9008000, 1037440201);
    InitializeCommonEvent(22, 9008000, 1037440202);
    InitializeCommonEvent(23, 9008000, 1037440203);
    InitializeCommonEvent(24, 9008000, 1037440117);
    InitializeCommonEvent(25, 9008000, 1037440118);
    InitializeCommonEvent(26, 9008000, 1037440119);
    InitializeCommonEvent(27, 9008000, 1037440120);
    InitializeCommonEvent(28, 9008000, 1037440121);
    InitializeCommonEvent(29, 9008000, 1037440122);
    InitializeCommonEvent(30, 9008000, 1037440123);
    InitializeCommonEvent(31, 9008000, 1037440124);
    InitializeCommonEvent(32, 9008000, 1037440125);
    InitializeCommonEvent(33, 9008000, 1037440126);
    InitializeCommonEvent(34, 9008000, 1037440127);
    InitializeCommonEvent(35, 9008000, 1037440128);
    InitializeCommonEvent(36, 9008000, 1037440210);
    InitializeCommonEvent(37, 9008000, 1037440129);
    InitializeCommonEvent(38, 9008000, 1037440130);
    InitializeCommonEvent(39, 9008000, 1037440131);
    InitializeCommonEvent(40, 9008000, 1037440132);
    InitializeCommonEvent(41, 9008000, 1037440133);
    InitializeCommonEvent(42, 9008000, 1037440134);
    InitializeCommonEvent(43, 9008000, 1037440135);
    InitializeCommonEvent(44, 9008000, 1037440136);
    InitializeCommonEvent(45, 9008000, 1037440137);
    InitializeCommonEvent(46, 9008000, 1037440138);
    InitializeCommonEvent(47, 9008000, 1037440139);
    InitializeCommonEvent(48, 9008000, 1037440140);
    InitializeCommonEvent(49, 9008000, 1037440141);
    InitializeCommonEvent(50, 9008000, 1037440142);
    
    RegisterBonfire(1037440000, 1037441950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76206, 76204, 1037441980, 77200, 4, 78200, 78201, 78202, 78203, 78204, 78205, 78206, 78207, 78208, 78209);
    InitializeCommonEvent(0, 90005300, 1037440210, 1037440210, 40262, 0, 0);
    InitializeCommonEvent(0, 90005920, 1037440600, 1037441600, 1037443600);
    InitializeEvent(0, 1037442610, 1037441610, 1037441611, 82021);
    InitializeEvent(0, 1037443700, 1037440700, 1037440710);
    InitializeEvent(0, 1037443701, 1037449206, 1037449200);
    InitializeCommonEvent(0, 90005704, 1037440700, 3441, 3440, 1037449201, 3);
    InitializeCommonEvent(0, 90005703, 1037440700, 3441, 3442, 1037449201, 3441, 3440, 3444, -1);
    InitializeCommonEvent(0, 90005702, 1037440700, 3443, 3440, 3444);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1037440700, true);
    SetCharacterBackreadState(1037440710, true);
    InitializeCommonEvent(0, 90005201, 1037440220, 30001, 20001, 1097859072, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 1037440220, 1097859072, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037440200, 1037442200, 1065353216, 1056964608, -1);
    InitializeCommonEvent(0, 90005261, 1037440201, 1037442200, 1065353216, 1065353216, -1);
    InitializeCommonEvent(0, 90005261, 1037440202, 1037442200, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037440203, 1037442200, 1065353216, 1069547520, -1);
});

$Event(1037442610, Restart, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(X8_4)) {
        CreateAssetfollowingSFX(X0_4, 200, 803220);
    }
L0:
    WaitFor(EventFlag(X8_4));
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    DeleteAssetfollowingSFX(X0_4, true);
});

$Event(1037443700, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3440) && EventFlag(11109405)) {
            SetEventFlagID(11109405, OFF);
        }
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    DisableAsset(1037441700);
    if (!EventFlag(3446)) {
        WaitFor(EventFlag(3446));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3440));
    GotoIf(L2, EventFlag(3441));
    GotoIf(L3, EventFlag(3442));
    GotoIf(L4, EventFlag(3443));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X4_4, false);
    EnableCharacter(X4_4);
    EnableAsset(1037441700);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    SetCharacterTeamType(X4_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 90105, false, false, false);
    ForceAnimationPlayback(X4_4, 90100, false, false, false);
    DisableCharacterCollision(X4_4);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X4_4, false);
    EnableCharacter(X4_4);
    EnableAsset(1037441700);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X4_4, 90100, false, false, false);
    DisableCharacterCollision(X4_4);
    Goto(L20);
L3:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X4_4, false);
    EnableCharacter(X4_4);
    EnableAsset(1037441700);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X4_4, 90100, false, false, false);
    DisableCharacterCollision(X4_4);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3446));
    RestartEvent();
});

$Event(1037443701, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3445));
    SetEventFlagID(X0_4, ON);
    SetNetworkconnectedEventFlagID(1037442701, ON);
    SetNetworkconnectedEventFlagID(3458, ON);
    WaitFixedTimeFrames(1);
    SetNetworkconnectedEventFlagID(X4_4, ON);
    EndEvent();
});


