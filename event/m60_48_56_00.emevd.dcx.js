// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1048560700);
    InitializeCommonEvent(1, 9008000, 1048560100);
    InitializeCommonEvent(2, 9008000, 1048560101);
    InitializeCommonEvent(3, 9008000, 1048560102);
    InitializeCommonEvent(4, 9008000, 1048560103);
    InitializeCommonEvent(5, 9008000, 1048560104);
    InitializeCommonEvent(6, 9008000, 1048560105);
    InitializeCommonEvent(7, 9008000, 1048560106);
    InitializeCommonEvent(8, 9008000, 1048560352);
    InitializeCommonEvent(9, 9008000, 1048560353);
    InitializeCommonEvent(10, 9008000, 1048560355);
    InitializeCommonEvent(11, 9008000, 1048560372);
    InitializeCommonEvent(12, 9008000, 1048560374);
    InitializeCommonEvent(13, 9008000, 1048560376);
    InitializeCommonEvent(14, 9008000, 1048560210);
    InitializeCommonEvent(15, 9008000, 1048560107);
    InitializeCommonEvent(16, 9008000, 1048560108);
    InitializeCommonEvent(17, 9008000, 1048560109);
    InitializeCommonEvent(18, 9008000, 1048560110);
    InitializeCommonEvent(19, 9008000, 1048560111);
    InitializeCommonEvent(20, 9008000, 1048560112);
    InitializeCommonEvent(21, 9008000, 1048560113);
    InitializeCommonEvent(22, 9008000, 1048560114);
    
    InitializeCommonEvent(0, 90005220, 1048560210, 30004, 20004, 0, 0, 1, 1);
    InitializeEvent(2, 1048562350, 1048560352, 1048560372);
    InitializeEvent(5, 1048562350, 1048560355, 1048560374);
    InitializeCommonEvent(0, 90005790, 0, 1048560180, 1048562181, 1048562182, 1048560700, 22, 1048562180, 1048562181, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005791, 1048560180, 1048562181, 1048562182, 1048560700);
    InitializeCommonEvent(0, 90005792, 1048560180, 1048562181, 1048562182, 1048560700, 1048560800, 0);
    InitializeCommonEvent(0, 90005793, 1048560180, 1048562181, 1048562182, 1048560700, 1048562180, 1048562182, 0);
});

$Event(1048562350, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        SetCharacterEventTarget(X4_4, X0_4);
    }
    WaitFor(CharacterHasSpEffect(X4_4, 11893) && !CharacterDead(X0_4) && !CharacterDead(X4_4));
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(X4_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    WarpCharacterAndSetFloor(X4_4, TargetEntityType.Character, X0_4, 283, 0);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(X4_4, 20003, false, false, false);
    SetSpEffect(X0_4, 11880);
    SetSpEffect(X4_4, 11880);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(5);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(X4_4, false, CharacterUpdateFrequency.AlwaysUpdate);
    RestartEvent();
});

$Event(100, Default, function() {
    InitializeCommonEvent(0, 90005300, 1148560200, 1148560200, 40524, 0, 0);
});


