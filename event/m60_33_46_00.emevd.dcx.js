// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1033460950);
    InitializeCommonEvent(1, 9008000, 1033460210);
    InitializeCommonEvent(2, 9008000, 1033460211);
    InitializeCommonEvent(3, 9008000, 1033460212);
    InitializeCommonEvent(4, 9008000, 1033460213);
    InitializeCommonEvent(5, 9008000, 1033460100);
    InitializeCommonEvent(6, 9008000, 1033460101);
    InitializeCommonEvent(7, 9008000, 1033460102);
    InitializeCommonEvent(8, 9008000, 1033460103);
    InitializeCommonEvent(9, 9008000, 1033460104);
    InitializeCommonEvent(10, 9008000, 1033460105);
    InitializeCommonEvent(11, 9008000, 1033460106);
    InitializeCommonEvent(12, 9008000, 1033460107);
    InitializeCommonEvent(13, 9008000, 1033460108);
    InitializeCommonEvent(14, 9008000, 1033460200);
    InitializeCommonEvent(15, 9008000, 1033460201);
    InitializeCommonEvent(16, 9008000, 1033460109);
    InitializeCommonEvent(17, 9008000, 1033460203);
    InitializeCommonEvent(18, 9008000, 1033460204);
    InitializeCommonEvent(19, 9008000, 1033460110);
    InitializeCommonEvent(20, 9008000, 1033460111);
    InitializeCommonEvent(21, 9008000, 1033460112);
    InitializeCommonEvent(22, 9008000, 1033460113);
    InitializeCommonEvent(23, 9008000, 1033460114);
    InitializeCommonEvent(24, 9008000, 1033460115);
    InitializeCommonEvent(25, 9008000, 1033460116);
    InitializeCommonEvent(26, 9008000, 1033460117);
    InitializeCommonEvent(27, 9008000, 1033460118);
    InitializeCommonEvent(28, 9008000, 1033460119);
    InitializeCommonEvent(29, 9008000, 1033460120);
    InitializeCommonEvent(30, 9008000, 1033460121);
    InitializeCommonEvent(31, 9008000, 1033460122);
    InitializeCommonEvent(32, 9008000, 1033460123);
    InitializeCommonEvent(33, 9008000, 1033460124);
    InitializeCommonEvent(34, 9008000, 1033460125);
    InitializeCommonEvent(35, 9008000, 1033460126);
    InitializeCommonEvent(36, 9008000, 1033460127);
    InitializeCommonEvent(37, 9008000, 1033460128);
    InitializeCommonEvent(38, 9008000, 1033460129);
    InitializeCommonEvent(39, 9008000, 1033460130);
    InitializeCommonEvent(40, 9008000, 1033460131);
    InitializeCommonEvent(41, 9008000, 1033460132);
    InitializeCommonEvent(42, 9008000, 1033460133);
    InitializeCommonEvent(43, 9008000, 1033460134);
    InitializeCommonEvent(44, 9008000, 1033460135);
    InitializeCommonEvent(45, 9008000, 1033460136);
    
    RegisterBonfire(1033460000, 1033461950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76214, 76210, 1033461980, 77220, 0, 78220, 78221, 78222, 78223, 78224, 78225, 78226, 78227, 78228, 78229);
    InitializeCommonEvent(0, 90005251, 1033460200, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005251, 1033460201, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005251, 1033460203, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005251, 1033460204, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005605, 1033461610, 13, 13002509, 0, 1033462610, 1033462611, 1033462612, 1033460610, 0, 0, 0);
    InitializeEvent(0, 1033462611, 1033460611, 1033461611, 1033462613, 1033462614);
    InitializeEvent(0, 1033462612, 1033460611, 1033461612);
});

$Event(1033462611, Restart, function(X0_4, X4_4, X8_4, X12_4) {
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
    SetNetworkconnectedEventFlagID(1033460610, ON);
    DisplayGenericDialog(208186, PromptType.OKCANCEL, NumberofOptions.NoButtons, X4_4, 3);
    RemoveItemFromPlayer(ItemType.Goods, 8186, 1);
});

$Event(1033462612, Restart, function(X0_4, X4_4) {
    if (EventFlag(X0_4)) {
        EnableAsset(X4_4);
        EndEvent();
    }
L0:
    DisableAsset(X4_4);
    WaitFor(EventFlag(X0_4));
    EnableAsset(X4_4);
});


