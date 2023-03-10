// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1052570950);
    InitializeCommonEvent(1, 9008000, 1052570200);
    InitializeCommonEvent(2, 9008000, 1052570201);
    InitializeCommonEvent(3, 9008000, 1052570202);
    InitializeCommonEvent(4, 9008000, 1052570204);
    InitializeCommonEvent(5, 9008000, 1052570205);
    InitializeCommonEvent(6, 9008000, 1052570207);
    InitializeCommonEvent(7, 9008000, 1052570209);
    InitializeCommonEvent(8, 9008000, 1052570212);
    InitializeCommonEvent(9, 9008000, 1052570213);
    InitializeCommonEvent(10, 9008000, 1052570214);
    InitializeCommonEvent(11, 9008000, 1052570215);
    InitializeCommonEvent(12, 9008000, 1052570100);
    InitializeCommonEvent(13, 9008000, 1052570101);
    InitializeCommonEvent(14, 9008000, 1052570102);
    InitializeCommonEvent(15, 9008000, 1052570103);
    InitializeCommonEvent(16, 9008000, 1052570104);
    InitializeCommonEvent(17, 9008000, 1052570105);
    InitializeCommonEvent(18, 9008000, 1052570106);
    InitializeCommonEvent(19, 9008000, 1052570240);
    InitializeCommonEvent(20, 9008000, 1052570241);
    InitializeCommonEvent(21, 9008000, 1052570243);
    InitializeCommonEvent(22, 9008000, 1052570107);
    InitializeCommonEvent(23, 9008000, 1052570108);
    InitializeCommonEvent(24, 9008000, 1052570109);
    InitializeCommonEvent(25, 9008000, 1052570110);
    InitializeCommonEvent(26, 9008000, 1052570111);
    InitializeCommonEvent(27, 9008000, 1052570112);
    InitializeCommonEvent(28, 9008000, 1052570113);
    InitializeCommonEvent(29, 9008000, 1052570114);
    InitializeCommonEvent(30, 9008000, 1052570115);
    InitializeCommonEvent(31, 9008000, 1052570116);
    InitializeCommonEvent(32, 9008000, 1052570117);
    InitializeCommonEvent(33, 9008000, 1052570118);
    InitializeCommonEvent(34, 9008000, 1052570119);
    InitializeCommonEvent(35, 9008000, 1052570120);
    InitializeCommonEvent(36, 9008000, 1052570121);
    InitializeCommonEvent(37, 9008000, 1052570122);
    InitializeCommonEvent(38, 9008000, 1052570123);
    InitializeCommonEvent(39, 9008000, 1052570124);
    InitializeCommonEvent(40, 9008000, 1052570125);
    InitializeCommonEvent(41, 9008000, 1052570126);
    InitializeCommonEvent(42, 9008000, 1052570127);
    InitializeCommonEvent(43, 9008000, 1052570128);
    InitializeCommonEvent(44, 9008000, 1052570129);
    InitializeCommonEvent(45, 9008000, 1052570130);
    InitializeCommonEvent(46, 9008000, 1052570131);
    InitializeCommonEvent(47, 9008000, 1052570132);
    InitializeCommonEvent(48, 9008000, 1052570133);
    InitializeCommonEvent(49, 9008000, 1052570134);
    InitializeCommonEvent(50, 9008000, 1052570135);
    InitializeCommonEvent(51, 9008000, 1052570136);
    InitializeCommonEvent(52, 9008000, 1052570137);
    InitializeCommonEvent(53, 9008000, 1052570138);
    
    RegisterBonfire(1052570000, 1052571950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76510, 76504, 1052571980, 77500, 3, 78500, 78501, 78502, 78503, 78504, 78505, 78506, 78507, 78508, 78509);
    InitializeCommonEvent(0, 90005211, 1052570205, 30018, 20018, 0, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1052570215, 30019, 20019, 0, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 1052570240, 1052572240, 0, 3010);
    InitializeCommonEvent(0, 90005250, 1052570241, 1052572240, 1056964608, 3010);
    InitializeCommonEvent(0, 90005250, 1052570243, 1052572243, 0, 3032);
    InitializeEvent(0, 1052572200, 1052575200);
    InitializeCommonEvent(0, 90005261, 1052570320, 1052572320, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005261, 1052570321, 1052572321, 1077936128, 0, 0);
    InitializeEvent(0, 1052572210, 0);
    InitializeEvent(0, 1052572220, 0);
    InitializeEvent(0, 1052572230, 0);
    InitializeCommonEvent(0, 90005560, 1052570490, 1052571490, 0);
    InitializeEvent(0, 1052572510, 0);
    InitializeCommonEvent(0, 90005501, 1052570510, 1052570511, 0, 1052571510, 1052571511, 1052571512, 1052570512);
    InitializeCommonEvent(0, 90005630, 65525700, 1052571500, 125);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1052570519, 0);
});

$Event(1052572200, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});

$Event(1052572210, Restart, function() {
    if (!EventFlag(1052570210)) {
        DeleteAssetfollowingSFX(1052571210, true);
        CreateAssetfollowingSFX(1052571210, 200, 1500);
        WaitFor(PlayerIsInOwnWorld() && InArea(10000, 1052572210));
        SetEventFlagID(1052570210, ON);
        DisplayGenericDialog(20210, PromptType.OKCANCEL, NumberofOptions.NoButtons, 0, 5);
    }
L0:
    DisableAsset(1052571210);
    DeleteAssetfollowingSFX(1052571210, true);
    PlaySE(1052571210, SoundType.SFX, 1500);
    EndEvent();
});

$Event(1052572220, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(1052570210));
    WaitFor(ActionButtonInArea(9320, 1052571210) || EventFlag(1052570210));
    EndIf(EventFlag(1052570210));
    DisplayGenericDialog(20200, PromptType.OKCANCEL, NumberofOptions.NoButtons, 1052571210, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1052572230, Restart, function() {
    DisableNetworkSync();
    WaitFor(ActionButtonInArea(9210, 1052571230));
    DisplayGenericDialog(60051, PromptType.OKCANCEL, NumberofOptions.NoButtons, 1052571230, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1052572510, Default, function() {
    InitializeCommonEvent(0, 90005500, 1052570510, 1052570511, 0, 1052571510, 1052571511, 1052573511, 1052571512, 1052573512, 1052572511, 1052572512, 1052570512, 1052570513, 0);
});

$Event(1052570519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(1052570510, OFF);
});


