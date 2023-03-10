// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1039480200);
    InitializeCommonEvent(1, 9008000, 1039480100);
    InitializeCommonEvent(2, 9008000, 1039480101);
    InitializeCommonEvent(3, 9008000, 1039480102);
    InitializeCommonEvent(4, 9008000, 1039480103);
    InitializeCommonEvent(5, 9008000, 1039480104);
    InitializeCommonEvent(6, 9008000, 1039480105);
    InitializeCommonEvent(7, 9008000, 1039480106);
    InitializeCommonEvent(8, 9008000, 1039480107);
    InitializeCommonEvent(9, 9008000, 1039480108);
    InitializeCommonEvent(10, 9008000, 1039480109);
    InitializeCommonEvent(11, 9008000, 1039480110);
    InitializeCommonEvent(12, 9008000, 1039480111);
    InitializeCommonEvent(13, 9008000, 1039480112);
    InitializeCommonEvent(14, 9008000, 1039480113);
    InitializeCommonEvent(15, 9008000, 1039480114);
    InitializeCommonEvent(16, 9008000, 1039480115);
    InitializeCommonEvent(17, 9008000, 1039480116);
    InitializeCommonEvent(18, 9008000, 1039480117);
    InitializeCommonEvent(19, 9008000, 1039480118);
    InitializeCommonEvent(20, 9008000, 1039480340);
    InitializeCommonEvent(21, 9008000, 1039480119);
    InitializeCommonEvent(22, 9008000, 1039480120);
    InitializeCommonEvent(23, 9008000, 1039480121);
    InitializeCommonEvent(24, 9008000, 1039480122);
    InitializeCommonEvent(25, 9008000, 1039480123);
    InitializeCommonEvent(26, 9008000, 1039480124);
    InitializeCommonEvent(27, 9008000, 1039480125);
    InitializeCommonEvent(28, 9008000, 1039480126);
    InitializeCommonEvent(29, 9008000, 1039480127);
    
L0:
    InitializeCommonEvent(0, 900005610, 1039481680, 100, 800, 1039488600);
    InitializeEvent(0, 1039482510, 0);
    InitializeCommonEvent(0, 90005501, 1039480510, 1039480511, 0, 1039481510, 1039481511, 1039481512, 1039480512);
    InitializeEvent(0, 1039482610, 0);
    InitializeEvent(0, 1039482611, 0);
    InitializeCommonEvent(0, 90005300, 1039480340, 1039480340, 0, 0, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1039480519, 0);
    InitializeCommonEvent(0, 90005251, 1039480200, 1092616192, 0, 1700);
});

$Event(1039482510, Restart, function() {
    InitializeCommonEvent(0, 90005500, 1039480510, 1039480511, 0, 1039481510, 1039481511, 1039483511, 1039481512, 1039483512, 1039482511, 1039482512, 1039480512, 1039480513, 0);
});

$Event(1039480519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(1039480510, OFF);
    SetThisEventSlot(ON);
});

$Event(1039482610, Restart, function() {
    if (EventFlag(1039480610)) {
        DisableAsset(1039481610);
        DeleteAssetfollowingSFX(1039481610, true);
        EndEvent();
    }
L0:
    DeleteAssetfollowingSFX(1039481610, true);
    CreateAssetfollowingSFX(1039481610, 200, 1502);
    WaitFor(
        PlayerIsInOwnWorld()
            && InArea(10000, 1039480610)
            && CharacterHasSpEffect(10000, 485)
            && CharacterHasSpEffect(10000, 486));
    SetNetworkconnectedEventFlagID(1039480610, ON);
    DisplayGenericDialog(20210, PromptType.OKCANCEL, NumberofOptions.NoButtons, 0, 5);
    PlaySE(1039481610, SoundType.SFX, 1500);
    DisableAsset(1039481610);
    DeleteAssetfollowingSFX(1039481610, true);
    EndEvent();
});

$Event(1039482611, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(1039480610));
    WaitFor(ActionButtonInArea(9320, 1039481610) || EventFlag(1039480610));
    EndIf(EventFlag(1039480610));
    DisplayGenericDialog(20200, PromptType.OKCANCEL, NumberofOptions.NoButtons, 1039481610, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});


