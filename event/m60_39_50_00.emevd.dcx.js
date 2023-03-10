// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1039500101);
    InitializeCommonEvent(1, 9008000, 1039500100);
    InitializeCommonEvent(2, 9008000, 1039500102);
    InitializeCommonEvent(3, 9008000, 1039500103);
    InitializeCommonEvent(4, 9008000, 1039500104);
    InitializeCommonEvent(5, 9008000, 1039500105);
    InitializeCommonEvent(6, 9008000, 1039500106);
    InitializeCommonEvent(7, 9008000, 1039500307);
    InitializeCommonEvent(8, 9008000, 1039500107);
    InitializeCommonEvent(9, 9008000, 1039500108);
    InitializeCommonEvent(10, 9008000, 1039500109);
    InitializeCommonEvent(11, 9008000, 1039500110);
    InitializeCommonEvent(12, 9008000, 1039500400);
    InitializeCommonEvent(13, 9008000, 1039500111);
    InitializeCommonEvent(14, 9008000, 1039500112);
    InitializeCommonEvent(15, 9008000, 1039500450);
    InitializeCommonEvent(16, 9008000, 1039500451);
    InitializeCommonEvent(17, 9008000, 1039500113);
    InitializeCommonEvent(18, 9008000, 1039500114);
    InitializeCommonEvent(19, 9008000, 1039500115);
    InitializeCommonEvent(20, 9008000, 1039500116);
    InitializeCommonEvent(21, 9008000, 1039500117);
    InitializeCommonEvent(22, 9008000, 1039500118);
    InitializeCommonEvent(23, 9008000, 1039500119);
    InitializeCommonEvent(24, 9008000, 1039500120);
    InitializeCommonEvent(25, 9008000, 1039500121);
    InitializeCommonEvent(26, 9008000, 1039500122);
    InitializeCommonEvent(27, 9008000, 1039500123);
    InitializeCommonEvent(28, 9008000, 1039500124);
    InitializeCommonEvent(29, 9008000, 1039500125);
    InitializeCommonEvent(30, 9008000, 1039500126);
    InitializeCommonEvent(31, 9008000, 1039500800);
    InitializeCommonEvent(32, 9008000, 1039500127);
    InitializeCommonEvent(33, 9008000, 1039500128);
    InitializeCommonEvent(34, 9008000, 1039500129);
    InitializeCommonEvent(35, 9008000, 1039500130);
    InitializeCommonEvent(36, 9008000, 1039500131);
    InitializeCommonEvent(37, 9008000, 1039500132);
    InitializeCommonEvent(38, 9008000, 1039500133);
    InitializeCommonEvent(39, 9008000, 1039500134);
    InitializeCommonEvent(40, 9008000, 1039500135);
    InitializeCommonEvent(41, 9008000, 1039500136);
    InitializeCommonEvent(42, 9008000, 1039500137);
    InitializeCommonEvent(43, 9008000, 1039500138);
    InitializeCommonEvent(44, 9008000, 1039500139);
    
    InitializeCommonEvent(0, 90005620, 1039500570, 1039501570, 1039501571, 0, 1039502571, 1039502572, 1039502573);
    InitializeEvent(0, 1039502580, 1039500800, 1039500805, 1039502800, 1039500800, 1039500100, 3286844, 1039502805);
    InitializeCommonEvent(0, 90005882, 1039500800, 1039500805, 1039502800, 1039500800, 1039502806, 1039505810, 1039501800, 1039500810, 1039502810, 904750520, -1, 20012);
    InitializeCommonEvent(0, 90005885, 1039500800, 921100, 1039502806, 1039502807, 0, 1);
    InitializeEvent(0, 1039502575, 1039500800, 1039500805, 1039502801, 1039502802, 20300, 1039501805, 3286844, 1039502805, 1039500570);
    InitializeEvent(0, 1039502576, 1039500800, 1039500805, 1039501805, 1039500570);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005251, 1039500400, 1106247680, 1065353216, 3022);
    InitializeCommonEvent(0, 90005251, 1039500450, 1101004800, 0, 3020);
    InitializeCommonEvent(0, 90005251, 1039500451, 1101004800, 0, 3020);
    InitializeCommonEvent(0, 90005211, 1039500307, 30000, 20000, 1039502300, 1084227584, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1039500302, 30000, 20000, 1039502300, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1039500303, 30000, 20000, 1039502300, 1069547520, 0, 0, 0, 0);
});

$Event(1039502575, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_1, X25_1, X26_1, X27_1, X28_4, X32_4) {
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(X12_4, OFF);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    EndIf(EventFlag(X4_4));
    WaitFor(
        !HasMultiplayerState(MultiplayerState.MultiplayerPending)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && ActionButtonInArea(9230, X20_4));
    DisplayGenericDialogAndSetEventFlags(X16_4, PromptType.YESNO, NumberofOptions.TwoButtons, X20_4, 3, X8_4, X12_4, X12_4);
    RestartIf(EventFlag(X12_4));
    RestartIf(
        HasMultiplayerState(MultiplayerState.Multiplayer)
            || HasMultiplayerState(MultiplayerState.MultiplayerPending));
    if (!EventFlag(X32_4)) {
        WaitFixedTimeSeconds(0.5);
        DisplayGenericDialog(20510, PromptType.OKCANCEL, NumberofOptions.NoButtons, X20_4, 5);
        WaitFixedTimeSeconds(3);
        RestartEvent();
    }
    SetNetworkconnectedEventFlagID(X4_4, ON);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(10000, 60450, false, false, false);
    WaitFixedTimeSeconds(1.5);
    WarpCharacterAndCopyFloorWithFadeout(10000, TargetEntityType.Area, X28_4, -1, 10000, true, true);
    SetEventFlagID(9021, ON);
    EndEvent();
    WarpPlayer(X24_1, X25_1, X26_1, X27_1, X28_4, 0);
});

$Event(1039502576, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    ForceAnimationPlayback(X8_4, 0, true, false, false);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    EndIf(EventFlag(X4_4));
    WaitFor(
        HasMultiplayerState(MultiplayerState.Singleplayer)
            && !HasMultiplayerState(MultiplayerState.MultiplayerPending)
            && EventFlag(X12_4));
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(X8_4, 1, true, false, false);
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.Singleplayer)
            && !HasMultiplayerState(MultiplayerState.MultiplayerPending)));
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(1039502580, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_1, X21_1, X22_1, X23_1, X24_4) {
    EndIf(EventFlag(X0_4));
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(X4_4));
    WaitFor(CharacterDead(X12_4));
    WaitFixedTimeSeconds(3);
    HandleBossDefeatAndDisplayBanner(X12_4, TextBannerType.GreatEnemyFelled);
    DeactivateGparamOverride(10);
    AwardItemsIncludingClients(X16_4);
    SetNetworkconnectedEventFlagID(X0_4, ON);
    WaitFixedTimeSeconds(5);
    SetSpEffect(20000, 8870);
    WaitFixedTimeSeconds(2);
    SetEventFlagID(X8_4, ON);
    SetEventFlagID(9295, ON);
    WarpPlayer(X20_1, X21_1, X22_1, X23_1, X24_4, 0);
    EndEvent();
});


