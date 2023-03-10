// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\m60.emevd N:\GR\data\Param\event\common_macro.emevd     
// @linked    [0,82,148]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1034440101);
    InitializeCommonEvent(1, 9008000, 1034440102);
    InitializeCommonEvent(2, 9008000, 1034440950);
    InitializeCommonEvent(3, 9008000, 1034440100);
    InitializeCommonEvent(4, 9008000, 1034440200);
    InitializeCommonEvent(5, 9008000, 1034440201);
    InitializeCommonEvent(6, 9008000, 1034440202);
    InitializeCommonEvent(7, 9008000, 1034440203);
    InitializeCommonEvent(8, 9008000, 1034440103);
    InitializeCommonEvent(9, 9008000, 1034440104);
    InitializeCommonEvent(10, 9008000, 1034440105);
    InitializeCommonEvent(11, 9008000, 1034440210);
    InitializeCommonEvent(12, 9008000, 1034440211);
    InitializeCommonEvent(13, 9008000, 1034440212);
    InitializeCommonEvent(14, 9008000, 1034440106);
    InitializeCommonEvent(15, 9008000, 1034440107);
    InitializeCommonEvent(16, 9008000, 1034440700);
    InitializeCommonEvent(17, 9008000, 1034440220);
    InitializeCommonEvent(18, 9008000, 1034440108);
    InitializeCommonEvent(19, 9008000, 1034440109);
    InitializeCommonEvent(20, 9008000, 1034440110);
    InitializeCommonEvent(21, 9008000, 1034440111);
    InitializeCommonEvent(22, 9008000, 1034440112);
    InitializeCommonEvent(23, 9008000, 1034440113);
    InitializeCommonEvent(24, 9008000, 1034440114);
    InitializeCommonEvent(25, 9008000, 1034440115);
    InitializeCommonEvent(26, 9008000, 1034440116);
    InitializeCommonEvent(27, 9008000, 1034440117);
    InitializeCommonEvent(28, 9008000, 1034440118);
    InitializeCommonEvent(29, 9008000, 1034440119);
    InitializeCommonEvent(30, 9008000, 1034440120);
    InitializeCommonEvent(31, 9008000, 1034440121);
    InitializeCommonEvent(32, 9008000, 1034440122);
    InitializeCommonEvent(33, 9008000, 1034440123);
    InitializeCommonEvent(34, 9008000, 1034440124);
    InitializeCommonEvent(35, 9008000, 1034440125);
    InitializeCommonEvent(36, 9008000, 1034440126);
    InitializeCommonEvent(37, 9008000, 1034440127);
    InitializeCommonEvent(38, 9008000, 1034440128);
    InitializeCommonEvent(39, 9008000, 1034440129);
    InitializeCommonEvent(40, 9008000, 1034440130);
    InitializeCommonEvent(41, 9008000, 1034440131);
    InitializeCommonEvent(42, 9008000, 1034440132);
    InitializeCommonEvent(43, 9008000, 1034440133);
    InitializeCommonEvent(44, 9008000, 1034440134);
    InitializeCommonEvent(45, 9008000, 1034440135);
    InitializeCommonEvent(46, 9008000, 1034440136);
    InitializeCommonEvent(47, 9008000, 1034440137);
    InitializeCommonEvent(48, 9008000, 1034440138);
    InitializeCommonEvent(49, 9008000, 1034440139);
    InitializeCommonEvent(50, 9008000, 1034440140);
    InitializeCommonEvent(51, 9008000, 1034440141);
    
    RegisterBonfire(1034440000, 1034441950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 1034442200, 0);
    InitializeCommonEvent(0, 90005300, 1034440220, 1034440220, 40218, 0, 0);
    InitializeEvent(0, 1034440700, 1034440700, 930023, 3409);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1034440700, true);
    InitializeCommonEvent(0, 90005261, 1034440200, 1034442200, 1077936128, 1073741824, -1);
    InitializeCommonEvent(0, 90005211, 1034440200, 30002, 20002, 1034442200, 1077936128, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1034440201, 30002, 20002, 1034442200, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1034440202, 1034442200, 1077936128, 1065353216, -1);
    InitializeCommonEvent(0, 90005211, 1034440202, 30002, 20002, 1034442200, 1077936128, 1065353216, 0, 0, 0, 0);
});

$Event(1034440700, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (!EventFlag(X8_4)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(X8_4));
        RestartEvent();
    }
L0:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    DisableCharacterGravity(X0_4);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    WaitFor(!EventFlag(X8_4));
    RestartEvent();
});

$Event(1034442200, Restart, function() {
    EndIf(ThisEventSlot());
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, 1034442200);
    WaitFor(area && chrSp);
    SetNetworkconnectedThisEventSlot(ON);
    TriggerAISound(4020, 1034442200, TargetEntityType.Area);
    EndEvent();
});


