// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common.emevd N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\m60.emevd N:\GR\data\Param\event\common_macro.emevd 
// @linked    [0,72,154,220]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1045380700);
    InitializeCommonEvent(1, 9008000, 1045380101);
    InitializeCommonEvent(2, 9008000, 1045380103);
    InitializeCommonEvent(3, 9008000, 1045380104);
    InitializeCommonEvent(4, 9008000, 1045380100);
    InitializeCommonEvent(5, 9008000, 1045380105);
    InitializeCommonEvent(6, 9008000, 1045380106);
    InitializeCommonEvent(7, 9008000, 1045380107);
    InitializeCommonEvent(8, 9008000, 1045380108);
    InitializeCommonEvent(9, 9008000, 1045380109);
    InitializeCommonEvent(10, 9008000, 1045380110);
    InitializeCommonEvent(11, 9008000, 1045380111);
    InitializeCommonEvent(12, 9008000, 1045380112);
    InitializeCommonEvent(13, 9008000, 1045380113);
    InitializeCommonEvent(14, 9008000, 1045380114);
    InitializeCommonEvent(15, 9008000, 1045380115);
    InitializeCommonEvent(16, 9008000, 1045380116);
    InitializeCommonEvent(17, 9008000, 1045380117);
    InitializeCommonEvent(18, 9008000, 1045380118);
    InitializeCommonEvent(19, 9008000, 1045380119);
    InitializeCommonEvent(20, 9008000, 1045380120);
    InitializeCommonEvent(21, 9008000, 1045380121);
    InitializeCommonEvent(22, 9008000, 1045380122);
    InitializeCommonEvent(23, 9008000, 1045380123);
    InitializeCommonEvent(24, 9008000, 1045380124);
    InitializeCommonEvent(25, 9008000, 1045380125);
    InitializeCommonEvent(26, 9008000, 1045380126);
    InitializeCommonEvent(27, 9008000, 1045380127);
    InitializeCommonEvent(28, 9008000, 1045380128);
    InitializeCommonEvent(29, 9008000, 1045380129);
    InitializeCommonEvent(30, 9008000, 1045380130);
    InitializeCommonEvent(31, 9008000, 1045380131);
    InitializeCommonEvent(32, 9008000, 1045380132);
    InitializeCommonEvent(33, 9008000, 1045380133);
    InitializeCommonEvent(34, 9008000, 1045380134);
    InitializeCommonEvent(35, 9008000, 1045380135);
    InitializeCommonEvent(36, 9008000, 1045380136);
    InitializeCommonEvent(37, 9008000, 1045380137);
    InitializeCommonEvent(38, 9008000, 1045380138);
    InitializeCommonEvent(39, 9008000, 1045380139);
    InitializeCommonEvent(40, 9008000, 1045380140);
    InitializeCommonEvent(41, 9008000, 1045380141);
    InitializeCommonEvent(42, 9008000, 1045380142);
    InitializeCommonEvent(43, 9008000, 1045380143);
    InitializeCommonEvent(44, 9008000, 1045380144);
    InitializeCommonEvent(45, 9008000, 1045380145);
    InitializeCommonEvent(46, 9008000, 1045380146);
    InitializeCommonEvent(47, 9008000, 1045380147);
    InitializeCommonEvent(48, 9008000, 1045380148);
    InitializeCommonEvent(49, 9008000, 1045380149);
    InitializeCommonEvent(50, 9008000, 1045380150);
    InitializeCommonEvent(51, 9008000, 1045380151);
    InitializeCommonEvent(52, 9008000, 1045380152);
    InitializeCommonEvent(53, 9008000, 1045380153);
    InitializeCommonEvent(54, 9008000, 1045380154);
    InitializeCommonEvent(55, 9008000, 1045380155);
    InitializeCommonEvent(56, 9008000, 1045380156);
    InitializeCommonEvent(57, 9008000, 1045380157);
    
    InitializeCommonEvent(0, 90005704, 1045380700, 3581, 3580, 1045389201, 3);
    InitializeCommonEvent(0, 90005703, 1045380700, 3581, 3582, 1045389201, 3581, 3580, 3583, -1);
    InitializeCommonEvent(0, 90005702, 1045380700, 3583, 3580, 3583);
    InitializeEvent(0, 1045383700, 1045380700);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1045380700, true);
});

$Event(1045382390, Restart, function() {
    DisableAsset(1045381390);
});

$Event(1045383700, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3580) && EventFlag(1045389203)) {
            SetEventFlagID(1045389203, OFF);
        }
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!EventFlag(3585)) {
        WaitFor(EventFlag(3585));
        RestartEvent();
    }
L0:
    GotoIf(L1, EventFlag(3580));
    GotoIf(L2, EventFlag(3581));
    GotoIf(L4, EventFlag(3583));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    SetCharacterTalkRange(X0_4, 100);
    if (EventFlag(1045389205)) {
        ForceAnimationPlayback(X0_4, 90101, false, false, false);
    }
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableAsset(X0_4);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3585));
    RestartEvent();
});


