// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\m60.emevd N:\GR\data\Param\event\common_macro.emevd     
// @linked    [0,82,148]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1053440700);
    InitializeCommonEvent(1, 9008000, 1035440100);
    InitializeCommonEvent(2, 9008000, 1035440101);
    InitializeCommonEvent(3, 9008000, 1035440102);
    InitializeCommonEvent(4, 9008000, 1035440103);
    InitializeCommonEvent(5, 9008000, 1035440104);
    InitializeCommonEvent(6, 9008000, 1035440105);
    InitializeCommonEvent(7, 9008000, 1035440106);
    InitializeCommonEvent(8, 9008000, 1035440220);
    InitializeCommonEvent(9, 9008000, 1035440107);
    InitializeCommonEvent(10, 9008000, 1035440108);
    InitializeCommonEvent(11, 9008000, 1035440200);
    InitializeCommonEvent(12, 9008000, 1035440201);
    InitializeCommonEvent(13, 9008000, 1035440109);
    InitializeCommonEvent(14, 9008000, 1035440110);
    InitializeCommonEvent(15, 9008000, 1035440111);
    InitializeCommonEvent(16, 9008000, 1035440112);
    InitializeCommonEvent(17, 9008000, 1035440113);
    InitializeCommonEvent(18, 9008000, 1035440114);
    InitializeCommonEvent(19, 9008000, 1035440210);
    InitializeCommonEvent(20, 9008000, 1035440115);
    InitializeCommonEvent(21, 9008000, 1035440116);
    InitializeCommonEvent(22, 9008000, 1035440117);
    InitializeCommonEvent(23, 9008000, 1035440118);
    InitializeCommonEvent(24, 9008000, 1035440119);
    InitializeCommonEvent(25, 9008000, 1035440120);
    InitializeCommonEvent(26, 9008000, 1035440121);
    InitializeCommonEvent(27, 9008000, 1035440122);
    InitializeCommonEvent(28, 9008000, 1035440123);
    InitializeCommonEvent(29, 9008000, 1035440124);
    InitializeCommonEvent(30, 9008000, 1035440125);
    InitializeCommonEvent(31, 9008000, 1035440126);
    InitializeCommonEvent(32, 9008000, 1035440127);
    InitializeCommonEvent(33, 9008000, 1035440128);
    InitializeCommonEvent(34, 9008000, 1035440129);
    InitializeCommonEvent(35, 9008000, 1035440130);
    InitializeCommonEvent(36, 9008000, 1035440131);
    InitializeCommonEvent(37, 9008000, 1035440132);
    InitializeCommonEvent(38, 9008000, 1035440133);
    InitializeCommonEvent(39, 9008000, 1035440134);
    InitializeCommonEvent(40, 9008000, 1035440135);
    InitializeCommonEvent(41, 9008000, 1035440136);
    InitializeCommonEvent(42, 9008000, 1035440137);
    InitializeCommonEvent(43, 9008000, 1035440138);
    InitializeCommonEvent(44, 9008000, 1035440139);
    InitializeCommonEvent(45, 9008000, 1035440140);
    InitializeCommonEvent(46, 9008000, 1035440141);
    InitializeCommonEvent(47, 9008000, 1035440142);
    InitializeCommonEvent(48, 9008000, 1035440143);
    InitializeCommonEvent(49, 9008000, 1035440144);
    InitializeCommonEvent(50, 9008000, 1035440145);
    InitializeCommonEvent(51, 9008000, 1035440146);
    InitializeCommonEvent(52, 9008000, 1035440147);
    InitializeCommonEvent(53, 9008000, 1035440148);
    InitializeCommonEvent(54, 9008000, 1035440149);
    
    InitializeEvent(0, 1035442650, 710680, 1680, 9124, 69240);
    InitializeEvent(0, 1035443700, 1053440700, 1035441701);
    InitializeEvent(0, 1035443701, 1053440700);
    InitializeCommonEvent(0, 90005704, 1053440700, 3181, 3180, 1035449201, 3);
    InitializeCommonEvent(0, 90005703, 1053440700, 3181, 3182, 1035449201, 3181, 3180, 3184, -1);
    InitializeCommonEvent(0, 90005702, 1053440700, 3183, 3180, 3184);
    InitializeCommonEvent(0, 90005740, 1035442705, 1035442706, 1035442707, 1053440700, 700, 1035441700, 700, 1045220557, 90201, -1, -1, 1066192077);
    InitializeCommonEvent(0, 90005741, 1035442708, 1035442709, 1035442707, 1053440700, 90203, 0, -1, -1, 1056964608);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1053440700, true);
    InitializeCommonEvent(0, 90005261, 1035440200, 1035442210, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 1035440201, 1035442210, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 1035440202, 1035442210, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 1035440203, 1035442210, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 1035440204, 1035442210, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 1035440210, 1035442210, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005211, 1035440220, 30000, 20000, 1035442220, 1092616192, 0, 0, 0, 0, 0);
});

$Event(1035442650, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(X0_4)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    ShowTutorialPopup(X4_4, true, true);
    EndIf(EventFlag(X12_4));
    DirectlyGivePlayerItem(ItemType.Goods, X8_4, X0_4, 1);
    SetEventFlagID(X12_4, ON);
});

$Event(1035443700, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3180)) {
            SetEventFlagID(31009205, OFF);
        }
    }
L10:
    if (!EventFlag(3188)) {
        if (!EventFlag(3189)) {
            if (!EventFlag(3190)) {
                DisableCharacter(X0_4);
                SetCharacterBackreadState(X0_4, true);
                DisableAsset(X4_4);
                WaitFor(EventFlag(3188) || EventFlag(3189) || EventFlag(3190));
                RestartEvent();
            }
        }
    }
L5:
    EnableAsset(X4_4);
    GotoIf(L1, EventFlag(3180));
    GotoIf(L2, EventFlag(3181));
    GotoIf(L3, EventFlag(3182));
    GotoIf(L4, EventFlag(3183));
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
    DisableAsset(X4_4);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(3188) || EventFlag(3189) || EventFlag(3190)));
    RestartEvent();
});

$Event(1035443701, Restart, function(X0_4) {
    EndIf(EventFlag(3181));
    EndIf(EventFlag(3183));
    WaitFor(CharacterHasSpEffect(X0_4, 90) || EventFlag(3181));
    EndIf(CharacterHasSpEffect(X0_4, 90));
    ForceAnimationPlayback(X0_4, 90205, false, false, false);
    EndEvent();
});


