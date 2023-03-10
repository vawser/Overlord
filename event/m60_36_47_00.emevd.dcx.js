// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1036470100);
    InitializeCommonEvent(1, 9008000, 1036470101);
    InitializeCommonEvent(2, 9008000, 1036470102);
    InitializeCommonEvent(3, 9008000, 1036470620);
    InitializeCommonEvent(4, 9008000, 1036470103);
    InitializeCommonEvent(5, 9008000, 1036470104);
    InitializeCommonEvent(6, 9008000, 1036470105);
    InitializeCommonEvent(7, 9008000, 1036470106);
    InitializeCommonEvent(8, 9008000, 1036470107);
    InitializeCommonEvent(9, 9008000, 1036470108);
    InitializeCommonEvent(10, 9008000, 1036470109);
    InitializeCommonEvent(11, 9008000, 1036470110);
    InitializeCommonEvent(12, 9008000, 1036470111);
    InitializeCommonEvent(13, 9008000, 1036470112);
    InitializeCommonEvent(14, 9008000, 1036470113);
    InitializeCommonEvent(15, 9008000, 1036470114);
    InitializeCommonEvent(16, 9008000, 1036470115);
    InitializeCommonEvent(17, 9008000, 1036470116);
    InitializeCommonEvent(18, 9008000, 1036470117);
    InitializeCommonEvent(19, 9008000, 1036470118);
    InitializeCommonEvent(20, 9008000, 1036470119);
    InitializeCommonEvent(21, 9008000, 1036470120);
    InitializeCommonEvent(22, 9008000, 1036470121);
    InitializeCommonEvent(23, 9008000, 1036470122);
    InitializeCommonEvent(24, 9008000, 1036470123);
    InitializeCommonEvent(25, 9008000, 1036470124);
    InitializeCommonEvent(26, 9008000, 1036470125);
    InitializeCommonEvent(27, 9008000, 1036470126);
    InitializeCommonEvent(28, 9008000, 1036470127);
    InitializeCommonEvent(29, 9008000, 1036470128);
    
    InitializeEvent(0, 1036472600, 1036471600, 3023676, 1035462611, 1035460615, 1036472601, 60470, 9522);
    InitializeEvent(0, 1036472605, 1036470605, 1036472606, 60471);
    InitializeCommonEvent(0, 90005637, 32020691, 1036470620, 1036471620);
    InitializeCommonEvent(0, 90005636, 32020691, 1036470620, 1036471620, 4470, 1036472620, 1036472621, 1036472620, 1036473620, -1);
});

$Event(1036472600, Default, function(X0_4, X4_1, X5_1, X6_1, X7_1, X8_4, X12_4, X16_4, X20_4, X24_4) {
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
    RotateCharacter(10000, X16_4, X20_4, false);
    WaitFixedTimeSeconds(2.5);
    SetEventFlagID(X12_4, ON);
    WarpPlayer(X4_1, X5_1, X6_1, X7_1, X8_4, 0);
});

$Event(1036472605, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    WaitFixedTimeFrames(1);
    RotateCharacter(10000, X4_4, X8_4, false);
    SetEventFlagID(X0_4, OFF);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1036470700, true);
});

$Event(200, Default, function() {
    InitializeCommonEvent(0, 90005451, 1036470400, 1036476420);
    InitializeCommonEvent(0, 90005452, 1036470400, 1236470400);
    InitializeCommonEvent(0, 90005454, 1036470400, 1236472400, 1236470400);
    InitializeCommonEvent(0, 90005456, 1036470400, 1036471410, 1036471418, 1236470400);
    InitializeCommonEvent(0, 90005458, 1036470400, 1036471401);
    InitializeCommonEvent(0, 90005453, 1036470400, 1036471420, 60, 0);
    InitializeCommonEvent(1, 90005453, 1036470400, 1036471421, 61, 1036831949);
    InitializeCommonEvent(0, 90005453, 1036470400, 1036471422, 62, 1045220557);
    InitializeCommonEvent(0, 90005453, 1036470400, 1036471423, 63, 1050253722);
    InitializeCommonEvent(0, 90005453, 1036470400, 1036471424, 64, 1053609165);
    InitializeCommonEvent(0, 90005453, 1036470400, 1036471425, 65, 1056964608);
    InitializeCommonEvent(0, 90005453, 1036470400, 1036471426, 66, 1058642330);
    InitializeCommonEvent(0, 90005453, 1036470400, 1036471427, 67, 1060320051);
    InitializeCommonEvent(0, 90005453, 1036470400, 1036471428, 68, 1061997773);
    InitializeCommonEvent(0, 90005453, 1036470400, 1036471429, 69, 1063675494);
    InitializeCommonEvent(0, 90005453, 1036470400, 1036471430, 70, 1065353216);
    InitializeCommonEvent(0, 90005453, 1036470400, 1036471431, 71, 1036831949);
    InitializeCommonEvent(0, 90005453, 1036470400, 1036471432, 72, 1045220557);
    InitializeCommonEvent(0, 90005453, 1036470400, 1036471433, 73, 1050253722);
    InitializeCommonEvent(0, 90005453, 1036470400, 1036471434, 74, 1053609165);
    InitializeCommonEvent(0, 90005453, 1036470400, 1036471435, 75, 1056964608);
    InitializeEvent(0, 1036472340, 0);
    InitializeEvent(0, 1036472490, 0);
});

$Event(250, Default, function() {
    InitializeCommonEvent(0, 90005450, 1036470400, 1036471400, 1036471410, 1036471418);
});

$Event(1036472340, Restart, function() {
    EndIf(EventFlag(1036470400));
    WaitFor(InArea(1036470400, 1036472340));
    ChangeCharacterPatrolBehavior(1036470400, 1036473340);
});

$Event(1036472490, Restart, function() {
    EndIf(!EventFlag(1036470400));
    DisableAsset(1036471420);
    DisableAsset(1036471421);
    DisableAsset(1036471422);
    DisableAsset(1036471423);
    DisableAsset(1036471424);
    DisableAsset(1036471425);
    DisableAsset(1036471426);
    DisableAsset(1036471427);
    DisableAsset(1036471428);
    DisableAsset(1036471429);
    DisableAsset(1036471430);
    DisableAsset(1036471431);
    DisableAsset(1036471432);
    DisableAsset(1036471433);
    DisableAsset(1036471434);
    DisableAsset(1036471435);
});


