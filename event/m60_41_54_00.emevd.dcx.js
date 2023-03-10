// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1041540100);
    InitializeCommonEvent(1, 9008000, 1041540950);
    InitializeCommonEvent(2, 9008000, 1041540200);
    InitializeCommonEvent(3, 9008000, 1041540201);
    InitializeCommonEvent(4, 9008000, 1041540202);
    InitializeCommonEvent(5, 9008000, 1041540203);
    InitializeCommonEvent(6, 9008000, 1041540205);
    InitializeCommonEvent(7, 9008000, 1041540206);
    InitializeCommonEvent(8, 9008000, 1041540101);
    InitializeCommonEvent(9, 9008000, 1041540102);
    InitializeCommonEvent(10, 9008000, 1041540103);
    InitializeCommonEvent(11, 9008000, 1041540104);
    InitializeCommonEvent(12, 9008000, 1041540105);
    InitializeCommonEvent(13, 9008000, 1041540106);
    InitializeCommonEvent(14, 9008000, 1041540107);
    InitializeCommonEvent(15, 9008000, 1041540108);
    InitializeCommonEvent(16, 9008000, 1041540109);
    InitializeCommonEvent(17, 9008000, 1041540700);
    InitializeCommonEvent(18, 9008000, 1041540110);
    InitializeCommonEvent(19, 9008000, 1041540111);
    InitializeCommonEvent(20, 9008000, 1041540112);
    InitializeCommonEvent(21, 9008000, 1041540113);
    InitializeCommonEvent(22, 9008000, 1041540114);
    InitializeCommonEvent(23, 9008000, 1041540115);
    InitializeCommonEvent(24, 9008000, 1041540116);
    InitializeCommonEvent(25, 9008000, 1041540117);
    InitializeCommonEvent(26, 9008000, 1041540118);
    
    RegisterBonfire(76308, 1041541950, 0, 0, 0, 3);
    InitializeCommonEvent(0, 90005100, 76314, 76308, 1041541980, 77310, 1, 78310, 78311, 78312, 78313, 78314, 78315, 78316, 78317, 78318, 78319);
    InitializeCommonEvent(0, 90005706, 1041540700, 930025, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1041540700, true);
    InitializeCommonEvent(0, 90005251, 1041540206, 1119092736, 0, 0);
    InitializeEvent(0, 1041542200, 0);
    InitializeEvent(0, 1041542230, 1041540201, 30006, 20006, 1077936128);
    InitializeEvent(1, 1041542230, 1041540202, 30006, 20006, 1077936128);
    InitializeEvent(2, 1041542230, 1041540203, 30006, 20006, 1077936128);
    InitializeEvent(3, 1041542230, 1041540204, 30006, 20006, 1084227584);
    InitializeEvent(4, 1041542230, 1041540205, 30006, 20006, 1077936128);
});

$Event(1041542200, Restart, function() {
    EndIf(ThisEventSlot());
    SetSpEffect(1041540200, 12054);
    SetSpEffect(1041540200, 8092);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(1041542230, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    sp = CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450);
    sp2 = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp3 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp4 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp5 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp6 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    areaChrSp = EntityInRadiusOfEntity(10000, X0_4, X12_4, 1) && CharacterBackreadStatus(X0_4) && sp && chrSp;
    WaitFor(
        areaChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || CharacterHasSpEffect(1041540200, 12051)
            || sp2
            || sp3
            || sp4
            || sp5
            || sp6);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    ForceAnimationPlayback(X0_4, X8_4, true, false, false);
    EndEvent();
});


