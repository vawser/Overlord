// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1036490700);
    InitializeCommonEvent(1, 9008000, 1036490950);
    InitializeCommonEvent(2, 9008000, 1036490951);
    InitializeCommonEvent(3, 9008000, 1036490705);
    InitializeCommonEvent(4, 9008000, 1036490706);
    InitializeCommonEvent(5, 9008000, 1036490100);
    InitializeCommonEvent(6, 9008000, 1036490101);
    InitializeCommonEvent(7, 9008000, 1036490102);
    InitializeCommonEvent(8, 9008000, 1036490200);
    InitializeCommonEvent(9, 9008000, 1036490103);
    InitializeCommonEvent(10, 9008000, 1036490104);
    InitializeCommonEvent(11, 9008000, 1036490105);
    InitializeCommonEvent(12, 9008000, 1036490106);
    InitializeCommonEvent(13, 9008000, 1036490107);
    InitializeCommonEvent(14, 9008000, 1036490108);
    InitializeCommonEvent(15, 9008000, 1036490109);
    InitializeCommonEvent(16, 9008000, 1036490110);
    InitializeCommonEvent(17, 9008000, 1036490111);
    InitializeCommonEvent(18, 9008000, 1036490112);
    InitializeCommonEvent(19, 9008000, 1036490113);
    InitializeCommonEvent(20, 9008000, 1036490114);
    InitializeCommonEvent(21, 9008000, 1036490115);
    InitializeCommonEvent(22, 9008000, 1036490116);
    InitializeCommonEvent(23, 9008000, 1036490117);
    InitializeCommonEvent(24, 9008000, 1036490118);
    InitializeCommonEvent(25, 9008000, 1036490119);
    InitializeCommonEvent(26, 9008000, 1036490120);
    InitializeCommonEvent(27, 9008000, 1036490121);
    InitializeCommonEvent(28, 9008000, 1036490122);
    InitializeCommonEvent(29, 9008000, 1036490123);
    InitializeCommonEvent(30, 9008000, 1036490124);
    InitializeCommonEvent(31, 9008000, 1036490125);
    InitializeCommonEvent(32, 9008000, 1036490126);
    InitializeCommonEvent(33, 9008000, 1036490127);
    
    RegisterBonfire(1036490000, 1036491950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76209, 76208, 1036491980, 77210, 1, 78210, 78211, 78212, 78213, 78214, 78215, 78216, 78217, 78218, 78219);
    RegisterBonfire(1036490001, 1036491951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005300, 1036490200, 1036490200, 40204, 0, 0);
    InitializeEvent(0, 1036492610, 0);
    InitializeCommonEvent(0, 90005704, 1036490700, 3381, 3380, 1036499201, 3);
    InitializeCommonEvent(0, 90005703, 1036490700, 3381, 3382, 1036499201, 3381, 3380, 3384, -1);
    InitializeCommonEvent(0, 90005702, 1036490700, 3383, 3380, 3384);
    InitializeEvent(0, 1036493700, 1036490700);
    InitializeCommonEvent(0, 90005725, 4755, 4756, 4758, 1036499255, 1036490705, 1036490706, 1036496700);
    InitializeCommonEvent(0, 90005703, 1036490705, 4756, 4757, 1036499256, 4756, 4755, 4759, 0);
    InitializeCommonEvent(0, 90005704, 1036490705, 4756, 4755, 1036499256, 3);
    InitializeCommonEvent(0, 90005702, 1036490705, 4758, 4755, 4759);
    InitializeCommonEvent(0, 90005703, 1036490706, 4756, 4757, 1036499257, 4756, 4755, 4759, 0);
    InitializeCommonEvent(0, 90005704, 1036490706, 4756, 4755, 1036499257, 3);
    InitializeCommonEvent(0, 90005727, 4756, 1036490705, 1036490706, 4755, 4758);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1036490700, true);
    SetCharacterBackreadState(1036490705, true);
    SetCharacterBackreadState(1036490706, true);
});

$Event(1036492610, Restart, function() {
    asset = AssetDestroyed(1036491620, Equal, 1);
    asset2 = !AssetDestroyed(1036491610, Equal, 1) || !AssetDestroyed(1036491610, Equal, 1);
    WaitFor(asset2 && asset);
    RequestAssetDestruction(1036491610, 0);
    RequestAssetDestruction(1036491611, 0);
});

$Event(1036493700, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3380)) {
            SetEventFlagID(1036499202, OFF);
        }
    }
L19:
    if (!EventFlag(3391)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3391));
        RestartEvent();
    }
L11:
    GotoIf(L0, EventFlag(3380));
    GotoIf(L1, EventFlag(3381));
    GotoIf(L3, EventFlag(3383));
L0:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    Goto(L20);
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetSpEffect(X0_4, 9628);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    Goto(L20);
L3:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3391));
    RestartEvent();
});


