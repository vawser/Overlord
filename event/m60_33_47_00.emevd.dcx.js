// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1033470950);
    InitializeCommonEvent(1, 9008000, 1033470100);
    InitializeCommonEvent(2, 9008000, 1033470200);
    InitializeCommonEvent(3, 9008000, 1033470201);
    InitializeCommonEvent(4, 9008000, 1033470202);
    InitializeCommonEvent(5, 9008000, 1033470203);
    InitializeCommonEvent(6, 9008000, 1033470204);
    InitializeCommonEvent(7, 9008000, 1033470205);
    InitializeCommonEvent(8, 9008000, 1033470101);
    InitializeCommonEvent(9, 9008000, 1033470102);
    InitializeCommonEvent(10, 9008000, 1033470103);
    InitializeCommonEvent(11, 9008000, 1033470104);
    InitializeCommonEvent(12, 9008000, 1033470105);
    InitializeCommonEvent(13, 9008000, 1033470106);
    InitializeCommonEvent(14, 9008000, 1033470107);
    InitializeCommonEvent(15, 9008000, 1033470108);
    InitializeCommonEvent(16, 9008000, 1033470109);
    InitializeCommonEvent(17, 9008000, 1033470110);
    InitializeCommonEvent(18, 9008000, 1033470111);
    InitializeCommonEvent(19, 9008000, 1033470112);
    InitializeCommonEvent(20, 9008000, 1033470113);
    InitializeCommonEvent(21, 9008000, 1033470114);
    InitializeCommonEvent(22, 9008000, 1033470115);
    InitializeCommonEvent(23, 9008000, 1033470116);
    InitializeCommonEvent(24, 9008000, 1033470117);
    InitializeCommonEvent(25, 9008000, 1033470118);
    InitializeCommonEvent(26, 9008000, 1033470119);
    InitializeCommonEvent(27, 9008000, 1033470120);
    InitializeCommonEvent(28, 9008000, 1033470121);
    InitializeCommonEvent(29, 9008000, 1033470122);
    InitializeCommonEvent(30, 9008000, 1033470123);
    InitializeCommonEvent(31, 9008000, 1033470124);
    InitializeCommonEvent(32, 9008000, 1033470125);
    InitializeCommonEvent(33, 9008000, 1033470126);
    InitializeCommonEvent(34, 9008000, 1033470127);
    InitializeCommonEvent(35, 9008000, 1033470128);
    InitializeCommonEvent(36, 9008000, 1033470129);
    InitializeCommonEvent(37, 9008000, 1033470130);
    InitializeCommonEvent(38, 9008000, 1033470131);
    InitializeCommonEvent(39, 9008000, 1033470132);
    InitializeCommonEvent(40, 9008000, 1033470133);
    InitializeCommonEvent(41, 9008000, 1033470134);
    InitializeCommonEvent(42, 9008000, 1033470135);
    InitializeCommonEvent(43, 9008000, 1033470136);
    InitializeCommonEvent(44, 9008000, 1033470137);
    InitializeCommonEvent(45, 9008000, 1033470138);
    InitializeCommonEvent(46, 9008000, 1033470139);
    InitializeCommonEvent(47, 9008000, 1033470140);
    InitializeCommonEvent(48, 9008000, 1033470141);
    InitializeCommonEvent(49, 9008000, 1033470142);
    InitializeCommonEvent(50, 9008000, 1033470143);
    InitializeCommonEvent(51, 9008000, 1033470144);
    InitializeCommonEvent(52, 9008000, 1033470145);
    InitializeCommonEvent(53, 9008000, 1033470146);
    InitializeCommonEvent(54, 9008000, 1033470147);
    
    RegisterBonfire(1033470000, 1033471950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005605, 1033471610, 524, 12022210, 0, 1033472610, 1033472611, 1033472612, 1033470610, 0, 0, 0);
    InitializeEvent(0, 1033472611, 1033470611, 1033471611, 1033472613, 1033472614);
    InitializeEvent(0, 1033472612, 1033470611, 1033471612);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 1033470200, 1033472200, 0, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1033470201, 1033472200, 0, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1033470202, 1033472200, 0, 1073741824, 1705);
    InitializeCommonEvent(0, 90005261, 1033470203, 1033472200, 0, 1069547520, 1705);
    InitializeCommonEvent(0, 90005261, 1033470204, 1033472200, 0, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1033470205, 1033472200, 0, 1065353216, 1705);
});

$Event(200, Default, function() {
    InitializeCommonEvent(0, 90005421, 1033470300, 1033471301, 1033478301);
    InitializeCommonEvent(0, 90005422, 1033478301, 1033471300, 1033473301);
    InitializeCommonEvent(0, 90005424, 1033471300, 1033470302, 1033470303, 1033470300, 1033471301);
    InitializeCommonEvent(0, 90005423, 1033470302);
    InitializeCommonEvent(0, 90005423, 1033470303);
});

$Event(250, Default, function() {
    InitializeCommonEvent(0, 90005420, 1033470300, 1033471300, 1033471301, 1033470301, 1033470302, 1033470303, 0);
});

$Event(1033472610, Restart, function(X0_4, X4_1, X5_1, X6_1, X7_1, X8_4, X12_4, X16_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlagID(X12_4, OFF);
    SetEventFlagID(X16_4, OFF);
    WaitFor(HasMultiplayerState(MultiplayerState.Singleplayer) && ActionButtonInArea(9140, X0_4));
    if (!EventFlag(1033470610)) {
        DisplayGenericDialogAndSetEventFlags(108186, PromptType.YESNO, NumberofOptions.TwoButtons, X0_4, 3, X12_4, X16_4, X16_4);
        if (!EventFlag(X12_4)) {
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
L1:
        if (!PlayerHasItem(ItemType.Goods, 8186)) {
            DisplayGenericDialogAndSetEventFlags(308186, PromptType.OKCANCEL, NumberofOptions.NoButtons, X0_4, 3, 0, 0, 0);
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
        SetEventFlagID(1033470610, ON);
        DisplayGenericDialogAndSetEventFlags(208186, PromptType.OKCANCEL, NumberofOptions.NoButtons, X0_4, 2, 0, 0, 0);
        RemoveItemFromPlayer(ItemType.Goods, 8186, 1);
    }
L5:
    RotateCharacter(10000, X0_4, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(X4_1, X5_1, X6_1, X7_1, X8_4, 0);
});

$Event(1033472611, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X0_4) || !PlayerIsInOwnWorld());
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(X12_4, OFF);
    WaitFor(ActionButtonInArea(9523, X4_4));
    DisplayGenericDialogAndSetEventFlags(108186, PromptType.YESNO, NumberofOptions.TwoButtons, X4_4, 3, X8_4, X12_4, X12_4);
    if (!EventFlag(X8_4)) {
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (!PlayerHasItem(ItemType.Goods, 8186)) {
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(10000, 50050, false, false, false);
        WaitFixedTimeSeconds(1.5);
        DisplayGenericDialog(308186, PromptType.OKCANCEL, NumberofOptions.NoButtons, X4_4, 3);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L2:
    IssueShortWarpRequest(10000, TargetEntityType.Asset, X4_4, 191);
    ForceAnimationPlayback(10000, 60810, false, false, false);
    WaitFixedTimeSeconds(2.5);
    SetNetworkconnectedEventFlagID(X0_4, ON);
    SetNetworkconnectedEventFlagID(1033470610, ON);
    DisplayGenericDialog(208186, PromptType.OKCANCEL, NumberofOptions.NoButtons, X4_4, 3);
    RemoveItemFromPlayer(ItemType.Goods, 8186, 1);
});

$Event(1033472612, Restart, function(X0_4, X4_4) {
    if (EventFlag(X0_4)) {
        EnableAsset(X4_4);
        EndEvent();
    }
L0:
    DisableAsset(X4_4);
    WaitFor(EventFlag(X0_4));
    EnableAsset(X4_4);
});


