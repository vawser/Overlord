// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1042540100);
    InitializeCommonEvent(1, 9008000, 1042540300);
    InitializeCommonEvent(2, 9008000, 1042540301);
    InitializeCommonEvent(3, 9008000, 1042540302);
    InitializeCommonEvent(4, 9008000, 1042540303);
    InitializeCommonEvent(5, 9008000, 1042540304);
    InitializeCommonEvent(6, 9008000, 1042540305);
    InitializeCommonEvent(7, 9008000, 1042540101);
    InitializeCommonEvent(8, 9008000, 1042540102);
    InitializeCommonEvent(9, 9008000, 1042540310);
    InitializeCommonEvent(10, 9008000, 1042540311);
    InitializeCommonEvent(11, 9008000, 1042540312);
    InitializeCommonEvent(12, 9008000, 1042540313);
    InitializeCommonEvent(13, 9008000, 1042540314);
    InitializeCommonEvent(14, 9008000, 1042540315);
    InitializeCommonEvent(15, 9008000, 1042540316);
    InitializeCommonEvent(16, 9008000, 1042540317);
    InitializeCommonEvent(17, 9008000, 1042540318);
    InitializeCommonEvent(18, 9008000, 1042540320);
    InitializeCommonEvent(19, 9008000, 1042540321);
    InitializeCommonEvent(20, 9008000, 1042540327);
    InitializeCommonEvent(21, 9008000, 1042540328);
    InitializeCommonEvent(22, 9008000, 1042540329);
    InitializeCommonEvent(23, 9008000, 1042540331);
    InitializeCommonEvent(24, 9008000, 1042540335);
    InitializeCommonEvent(25, 9008000, 1042540337);
    InitializeCommonEvent(26, 9008000, 1042540338);
    InitializeCommonEvent(27, 9008000, 1042540339);
    InitializeCommonEvent(28, 9008000, 1042540200);
    InitializeCommonEvent(29, 9008000, 1042540202);
    InitializeCommonEvent(30, 9008000, 1042540203);
    InitializeCommonEvent(31, 9008000, 1042540400);
    InitializeCommonEvent(32, 9008000, 1042540103);
    InitializeCommonEvent(33, 9008000, 1042540104);
    InitializeCommonEvent(34, 9008000, 1042540105);
    InitializeCommonEvent(35, 9008000, 1042540106);
    InitializeCommonEvent(36, 9008000, 1042540107);
    InitializeCommonEvent(37, 9008000, 1042540108);
    InitializeCommonEvent(38, 9008000, 1042540651);
    InitializeCommonEvent(39, 9008000, 1042540652);
    InitializeCommonEvent(40, 9008000, 1042540653);
    InitializeCommonEvent(41, 9008000, 1042540109);
    InitializeCommonEvent(42, 9008000, 1042540110);
    InitializeCommonEvent(43, 9008000, 1042540111);
    InitializeCommonEvent(44, 9008000, 1042540112);
    InitializeCommonEvent(45, 9008000, 1042540113);
    InitializeCommonEvent(46, 9008000, 1042540114);
    InitializeCommonEvent(47, 9008000, 1042540115);
    InitializeCommonEvent(48, 9008000, 1042540116);
    InitializeCommonEvent(49, 9008000, 1042540117);
    
    RegisterLadder(1042540580, 1042540581, 1042541580);
    RegisterLadder(1042540582, 1042540583, 1042541582);
    RegisterLadder(1042540584, 1042540585, 1042541584);
    InitializeCommonEvent(0, 90005633, 580350, 580050, 1042540400, 30017, 20017, 1042541400, 1042541410);
    InitializeCommonEvent(0, 90005706, 1042540700, 30025, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1042540700, true);
    InitializeCommonEvent(0, 90005250, 1042540200, 1042542200, 0, 3005);
    InitializeEvent(0, 1042542350, 1042540300, 1042542300, 1042545300);
    InitializeEvent(1, 1042542350, 1042540301, 1042542301, 1042545300);
    InitializeEvent(2, 1042542350, 1042540302, 1042542302, 1042545300);
    InitializeEvent(3, 1042542350, 1042540310, 1042542310, 1042545310);
    InitializeEvent(4, 1042542350, 1042540311, 1042542311, 1042545310);
    InitializeEvent(5, 1042542350, 1042540312, 1042542312, 1042545310);
    InitializeEvent(6, 1042542350, 1042540313, 1042542313, 1042545310);
    InitializeEvent(7, 1042542350, 1042540314, 1042542314, 1042545310);
    InitializeEvent(8, 1042542350, 1042540315, 1042542315, 1042545310);
    InitializeEvent(9, 1042542350, 1042540316, 1042542316, 1042545310);
    InitializeEvent(10, 1042542350, 1042540317, 1042542317, 1042545310);
    InitializeEvent(11, 1042542350, 1042540318, 1042542318, 1042545310);
    InitializeEvent(12, 1042542350, 1042540327, 1042542327, 1042545327);
    InitializeEvent(13, 1042542350, 1042540328, 1042542328, 1042545327);
    InitializeEvent(14, 1042542350, 1042540329, 1042542329, 1042545327);
    InitializeCommonEvent(0, 90005251, 1042540331, 1082130432, 0, 3004);
    InitializeEvent(15, 1042542350, 1042540338, 1042542338, 1042545338);
    InitializeEvent(16, 1042542350, 1042540339, 1042542339, 1042545338);
    InitializeEvent(17, 1042542350, 1042540303, 1042542303, 1042545303);
    InitializeEvent(18, 1042542350, 1042540304, 1042542304, 1042545303);
    InitializeEvent(19, 1042542350, 1042540305, 1042542305, 1042545303);
    InitializeCommonEvent(0, 90005200, 1042540651, 30004, 20004, 1042542651, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1042540652, 30004, 20004, 1042542651, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1042540653, 30004, 20004, 1042542651, 0, 0, 0, 0, 0);
});

$Event(1042542350, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(CharacterDead(X0_4));
    if (ThisEventSlot()) {
        ForceAnimationPlayback(X0_4, 20018, false, false, false);
        WaitFixedTimeSeconds(1.6);
    }
L0:
    ForceAnimationPlayback(X0_4, 30008, true, false, false);
    DisableCharacterAI(X0_4);
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || CharacterAIState(X8_4, AIStateType.Combat, GreaterOrEqual, 1)
            || (CharacterHasSpEffect(X0_4, 481)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90110)
                && !CharacterHasSpEffect(X0_4, 90160))
            || (CharacterHasSpEffect(X0_4, 482)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90120)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 483)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90140)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90161))
            || (CharacterHasSpEffect(X0_4, 484)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90130)
                && !CharacterHasSpEffect(X0_4, 90161)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 487)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90150)
                && !CharacterHasSpEffect(X0_4, 90160)));
    SetNetworkconnectedThisEventSlot(ON);
    WaitFixedTimeSeconds(0.1);
    ForceAnimationPlayback(X0_4, 20008, false, false, false);
    EnableCharacterAI(X0_4);
    WaitFixedTimeSeconds(5);
    WaitFor(
        (CharacterAIState(X0_4, AIStateType.Normal) && InArea(X0_4, X4_4)) || CharacterDead(X0_4));
    RestartEvent();
});


