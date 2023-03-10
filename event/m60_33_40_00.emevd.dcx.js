// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd N:\GR\data\Param\event\m60.emevd     
// @linked    [0,82,166]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1033400950);
    InitializeCommonEvent(1, 9008000, 1033400100);
    InitializeCommonEvent(2, 9008000, 1033400101);
    InitializeCommonEvent(3, 9008000, 1033400102);
    InitializeCommonEvent(4, 9008000, 1033400103);
    InitializeCommonEvent(5, 9008000, 1033400104);
    InitializeCommonEvent(6, 9008000, 1033400105);
    InitializeCommonEvent(7, 9008000, 1033400106);
    InitializeCommonEvent(8, 9008000, 1033400107);
    InitializeCommonEvent(9, 9008000, 1033400108);
    InitializeCommonEvent(10, 9008000, 1033400109);
    InitializeCommonEvent(11, 9008000, 1033400110);
    InitializeCommonEvent(12, 9008000, 1033400111);
    InitializeCommonEvent(13, 9008000, 1033400112);
    InitializeCommonEvent(14, 9008000, 1033400113);
    InitializeCommonEvent(15, 9008000, 1033400114);
    InitializeCommonEvent(16, 9008000, 1033400115);
    InitializeCommonEvent(17, 9008000, 1033400116);
    InitializeCommonEvent(18, 9008000, 1033400117);
    InitializeCommonEvent(19, 9008000, 1033400118);
    InitializeCommonEvent(20, 9008000, 1033400119);
    InitializeCommonEvent(21, 9008000, 1033400120);
    InitializeCommonEvent(22, 9008000, 1033400121);
    InitializeCommonEvent(23, 9008000, 1033400122);
    InitializeCommonEvent(24, 9008000, 1033400123);
    InitializeCommonEvent(25, 9008000, 1033400124);
    InitializeCommonEvent(26, 9008000, 1033400125);
    InitializeCommonEvent(27, 9008000, 1033400126);
    InitializeCommonEvent(28, 9008000, 1033400127);
    
    RegisterBonfire(1033400000, 1033401950, 0, 0, 0, 5);
    InitializeEvent(0, 1033402510, 0);
    InitializeCommonEvent(0, 90005501, 1033400510, 1033400511, 0, 1033401510, 1033401511, 1033401512, 1033400512);
    InitializeEvent(0, 1033402610, 1033400610, 1033420610, 1035410610, 1033400615);
    InitializeEvent(0, 1034432613, 1033400610, 1033400610);
    InitializeEvent(0, 1034432614, 1033400610, 1033400610);
    InitializeEvent(0, 1033402611, 0);
    InitializeEvent(0, 1034432612, 0);
    InitializeCommonEvent(0, 90005201, 1033400610, 30006, 20006, 0, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1033400610, 1033400610, 0, 0, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1033400519, 0);
});

$Event(200, Default, function() {
    InitializeEvent(0, 1033402615, 0);
});

$Event(1033402510, Restart, function() {
    InitializeCommonEvent(0, 90005500, 1033400510, 1033400511, 0, 1033401510, 1033401511, 1033403511, 1033401512, 1033403512, 1033402511, 1033402512, 1033400512, 1033400513, 0);
});

$Event(1033400519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(1033400510, OFF);
    SetThisEventSlot(ON);
});

$Event(1033402610, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (EventFlag(X12_4)) {
        DisableAsset(1033401610);
        DeleteAssetfollowingSFX(1033401610, true);
        EndEvent();
    }
L0:
    DeleteAssetfollowingSFX(1033401610, true);
    CreateAssetfollowingSFX(1033401610, 200, 1500);
    WaitFor(EventFlag(X0_4) && EventFlag(X4_4) && EventFlag(X8_4));
    SetEventFlagID(X12_4, ON);
    PlaySE(1033401610, SoundType.SFX, 1500);
    DisableAsset(1033401610);
    DeleteAssetfollowingSFX(1033401610, true);
    EndEvent();
});

$Event(1033402611, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(1033400615));
    WaitFor(ActionButtonInArea(9320, 1033401610) || EventFlag(1033400615));
    EndIf(EventFlag(1033400615));
    DisplayGenericDialog(20200, PromptType.OKCANCEL, NumberofOptions.NoButtons, 1033401610, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1034432612, Restart, function() {
    DisableNetworkSync();
    WaitFor(ActionButtonInArea(9210, 1034431611));
    DisplayGenericDialog(60026, PromptType.OKCANCEL, NumberofOptions.NoButtons, 1034431611, 3);
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(1034432616, ON);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1034432613, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    DisableCharacter(X4_4);
    DisableCharacterCollision(X4_4);
    if (!PlayerIsInOwnWorld()) {
        EnableCharacterInvincibility(X4_4);
    }
    WaitFor(EventFlag(1034432616));
    EnableCharacter(X4_4);
    EnableCharacterCollision(X4_4);
    EnableCharacterImmortality(X4_4);
    DisableCharacterHPBarDisplay(X4_4);
});

$Event(1034432614, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(HasDamageType(X4_4, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(X4_4, 20008, false, false, false);
    SetEventFlagID(X0_4, ON);
});

$Event(1033402615, Restart, function() {
    EndIf(EventFlag(1033400615));
    WaitFor(EventFlag(1033400610) && EventFlag(1033420610) && EventFlag(1035410610));
    DisplayGenericDialog(20210, PromptType.OKCANCEL, NumberofOptions.NoButtons, 0, 5);
});


