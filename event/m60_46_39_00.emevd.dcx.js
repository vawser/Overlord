// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1046390100);
    InitializeCommonEvent(1, 9008000, 1046390101);
    InitializeCommonEvent(2, 9008000, 1046390102);
    InitializeCommonEvent(3, 9008000, 1046390103);
    InitializeCommonEvent(4, 9008000, 1046390104);
    InitializeCommonEvent(5, 9008000, 1046390105);
    InitializeCommonEvent(6, 9008000, 1046390106);
    InitializeCommonEvent(7, 9008000, 1046390107);
    InitializeCommonEvent(8, 9008000, 1046390108);
    InitializeCommonEvent(9, 9008000, 1046390109);
    InitializeCommonEvent(10, 9008000, 1046390110);
    InitializeCommonEvent(11, 9008000, 1046390111);
    InitializeCommonEvent(12, 9008000, 1046390112);
    InitializeCommonEvent(13, 9008000, 1046390113);
    InitializeCommonEvent(14, 9008000, 1046390114);
    InitializeCommonEvent(15, 9008000, 1046390115);
    InitializeCommonEvent(16, 9008000, 1046390116);
    InitializeCommonEvent(17, 9008000, 1046390117);
    InitializeCommonEvent(18, 9008000, 1046390210);
    InitializeCommonEvent(19, 9008000, 1046390118);
    InitializeCommonEvent(20, 9008000, 1046390119);
    InitializeCommonEvent(21, 9008000, 1046390340);
    
    InitializeEvent(0, 1035472602, 0);
    InitializeCommonEvent(0, 90005300, 1046390210, 1046390210, 40118, 0, 0);
    InitializeEvent(0, 1035472200, 1046391600, 2831164, 1051430600, 0, 1051432650, 1051432651, 1051432652, 0, 0, 0, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 1046390340, 1046392340, 1106247680, 0, 0);
});

$Event(1035472200, Default, function(X0_4, X4_1, X5_1, X6_1, X7_1, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X20_4, OFF);
    SetEventFlagID(X24_4, OFF);
    if (!ThisEventSlot()) {
        DeleteAssetfollowingSFX(X0_4, true);
        SetEventFlagID(X16_4, OFF);
        WaitFixedTimeFrames(1);
    }
    onlineFlag |= HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending);
    if (X28_4 != 0) {
        onlineFlag |= !EventFlag(X28_4);
    }
    if (!onlineFlag) {
        if (!EventFlag(X16_4)) {
            DeleteAssetfollowingSFX(X0_4, true);
            CreateAssetfollowingSFX(X0_4, 200, 806870);
            SetEventFlagID(X16_4, ON);
        }
    }
L1:
    onlineFlagAct &= PlayerIsInOwnWorld()
        && !(HasMultiplayerState(MultiplayerState.Multiplayer)
            || HasMultiplayerState(MultiplayerState.MultiplayerPending));
    if (X28_4 != 0) {
        if (Signed(X32_4) == 0) {
            onlineFlagAct &= EventFlag(X28_4) && EventFlag(X16_4);
        }
    }
    onlineFlagAct &= ActionButtonInArea(9140, X0_4);
    onlineFlag2 |= HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending);
    if (X28_4 != 0) {
        onlineFlag2 |= !EventFlag(X28_4);
    }
    onlineFlag3 = onlineFlag2 && EventFlag(X16_4);
    onlineFlag4 |= HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending);
    if (X28_4 != 0) {
        onlineFlag4 |= !EventFlag(X28_4);
    }
    onlineFlag5 = !onlineFlag4 && !EventFlag(X16_4);
    flag = EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X28_4);
    onlineFlagAct2 |= onlineFlagAct || onlineFlag3 || onlineFlag5;
    if (X28_4 != 0) {
        onlineFlagAct2 |= flag;
    }
    WaitFor(onlineFlagAct2);
    if (!onlineFlagAct.Passed) {
        if (onlineFlag3.Passed) {
            DeleteAssetfollowingSFX(X0_4, true);
            SetEventFlagID(X16_4, OFF);
        }
L2:
        WaitFixedTimeSeconds(0.033);
        RestartEvent();
    }
L3:
    if (!(X28_4 == 0 || Signed(X32_4) == 0)) {
        if (!EventFlag(X28_4)) {
            DisplayGenericDialog(X32_4, PromptType.YESNO, NumberofOptions.NoButtons, X0_4, 3);
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
    }
L4:
    DisplayGenericDialogAndSetEventFlags(4300, PromptType.YESNO, NumberofOptions.TwoButtons, X0_4, 3, X20_4, X24_4, X24_4);
    if (!EventFlag(X20_4)) {
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L6:
    RestartIf(
        HasMultiplayerState(MultiplayerState.Multiplayer)
            || HasMultiplayerState(MultiplayerState.MultiplayerPending));
    SetEventFlagID(1051430210, ON);
    RotateCharacter(10000, X0_4, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(X4_1, X5_1, X6_1, X7_1, X8_4, X12_4);
    RestartEvent();
    WaitFixedTimeSeconds(X36_4);
    WaitFixedTimeSeconds(X40_4);
});

$Event(1035472602, Restart, function() {
    SetSpEffect(1046390340, 8090);
});


