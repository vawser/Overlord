// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1033440700);
    InitializeCommonEvent(1, 9008000, 1033440950);
    InitializeCommonEvent(2, 9008000, 1033440701);
    InitializeCommonEvent(3, 9008000, 1033440702);
    InitializeCommonEvent(4, 9008000, 1033440703);
    InitializeCommonEvent(5, 9008000, 1033440100);
    InitializeCommonEvent(6, 9008000, 1033440101);
    InitializeCommonEvent(7, 9008000, 1033440102);
    InitializeCommonEvent(8, 9008000, 1033440103);
    InitializeCommonEvent(9, 9008000, 1033440104);
    InitializeCommonEvent(10, 9008000, 1033440200);
    InitializeCommonEvent(11, 9008000, 1033440201);
    InitializeCommonEvent(12, 9008000, 1033440105);
    InitializeCommonEvent(13, 9008000, 1033440106);
    InitializeCommonEvent(14, 9008000, 1033440107);
    InitializeCommonEvent(15, 9008000, 1033440108);
    InitializeCommonEvent(16, 9008000, 1033440109);
    InitializeCommonEvent(17, 9008000, 1033440110);
    InitializeCommonEvent(18, 9008000, 1033440111);
    InitializeCommonEvent(19, 9008000, 1033440112);
    InitializeCommonEvent(20, 9008000, 1033440113);
    InitializeCommonEvent(21, 9008000, 1033440114);
    InitializeCommonEvent(22, 9008000, 1033440115);
    InitializeCommonEvent(23, 9008000, 1033440116);
    InitializeCommonEvent(24, 9008000, 1033440117);
    InitializeCommonEvent(25, 9008000, 1033440118);
    InitializeCommonEvent(26, 9008000, 1033440119);
    InitializeCommonEvent(27, 9008000, 1033440120);
    InitializeCommonEvent(28, 9008000, 1033440121);
    InitializeCommonEvent(29, 9008000, 1033440122);
    
    RegisterBonfire(1033440000, 1033441950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005460, 1033440200);
    InitializeCommonEvent(0, 90005461, 1033440200);
    InitializeCommonEvent(0, 90005462, 1033440200);
    InitializeCommonEvent(0, 90005460, 1033440201);
    InitializeCommonEvent(0, 90005461, 1033440201);
    InitializeCommonEvent(0, 90005462, 1033440201);
    InitializeCommonEvent(0, 90005460, 1033440204);
    InitializeCommonEvent(0, 90005461, 1033440204);
    InitializeCommonEvent(0, 90005462, 1033440204);
    InitializeCommonEvent(0, 90005460, 1033440205);
    InitializeCommonEvent(0, 90005461, 1033440205);
    InitializeCommonEvent(0, 90005462, 1033440205);
    InitializeCommonEvent(0, 90005460, 1033440206);
    InitializeCommonEvent(0, 90005461, 1033440206);
    InitializeCommonEvent(0, 90005462, 1033440206);
    InitializeCommonEvent(0, 90005683, 62202, 1033441684, 209, 78292, 78292);
    InitializeCommonEvent(0, 90005790, 0, 1033440180, 1033442181, 1033442182, 1033440700, 23, 1033442701, 1033442700, 0, 1045349259, 0, 0);
    InitializeCommonEvent(0, 90005791, 1033440180, 1033442181, 1033442182, 1033440700);
    InitializeCommonEvent(0, 90005792, 1033440180, 1033442181, 1033442182, 1033440700, 100610, 0);
    InitializeCommonEvent(0, 90005793, 1033440180, 1033442181, 1033442182, 1033440700, 1033442701, 0, 0);
    InitializeEvent(0, 1033440700, 1033440701, 930027);
    InitializeEvent(1, 1033440700, 1033440702, 930029);
    InitializeEvent(2, 1033440700, 1033440703, 930028);
    InitializeEvent(0, 1033440705, 1033441700);
    InitializeEvent(1, 1033440705, 1033441701);
    InitializeEvent(2, 1033440705, 1033441702);
    InitializeEvent(3, 1033440705, 1033441703);
    InitializeEvent(4, 1033440705, 1033441704);
    InitializeEvent(0, 1033440710, 1033441710);
    InitializeEvent(1, 1033440710, 1033441711);
    InitializeEvent(2, 1033440710, 1033441715);
    InitializeEvent(3, 1033440710, 1033441713);
});

$Event(1033440700, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!EventFlag(3409)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3409));
        RestartEvent();
    }
L9:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3409));
    RestartEvent();
});

$Event(1033440705, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!EventFlag(3409)) {
        DisableAsset(X0_4);
        DisableAssetTreasure(X0_4);
        WaitFor(EventFlag(3409));
        RestartEvent();
    }
L9:
    EnableAsset(X0_4);
    EnableAssetTreasure(X0_4);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3409));
    RestartEvent();
});

$Event(1033440710, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!EventFlag(3409)) {
        DisableAsset(X0_4);
        WaitFor(EventFlag(3409));
        RestartEvent();
    }
L9:
    EnableAsset(X0_4);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3409));
    RestartEvent();
});


