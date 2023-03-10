// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1036510300);
    InitializeCommonEvent(1, 9008000, 1036510101);
    InitializeCommonEvent(2, 9008000, 1036510102);
    InitializeCommonEvent(3, 9008000, 1036510450);
    InitializeCommonEvent(4, 9008000, 1036510400);
    InitializeCommonEvent(5, 9008000, 1036510401);
    InitializeCommonEvent(6, 9008000, 1036510402);
    InitializeCommonEvent(7, 9008000, 1036510403);
    InitializeCommonEvent(8, 9008000, 1036510404);
    InitializeCommonEvent(9, 9008000, 1036510103);
    InitializeCommonEvent(10, 9008000, 1036510104);
    InitializeCommonEvent(11, 9008000, 1036510407);
    InitializeCommonEvent(12, 9008000, 1036510408);
    InitializeCommonEvent(13, 9008000, 1036510409);
    InitializeCommonEvent(14, 9008000, 1036510410);
    InitializeCommonEvent(15, 9008000, 1036510411);
    InitializeCommonEvent(16, 9008000, 1036510412);
    InitializeCommonEvent(17, 9008000, 1036510413);
    InitializeCommonEvent(18, 9008000, 1036510414);
    InitializeCommonEvent(19, 9008000, 1036510105);
    InitializeCommonEvent(20, 9008000, 1036510416);
    InitializeCommonEvent(21, 9008000, 1036510417);
    InitializeCommonEvent(22, 9008000, 1036510418);
    InitializeCommonEvent(23, 9008000, 1036510419);
    InitializeCommonEvent(24, 9008000, 1036510420);
    InitializeCommonEvent(25, 9008000, 1036510106);
    InitializeCommonEvent(26, 9008000, 1036510107);
    InitializeCommonEvent(27, 9008000, 1036510108);
    InitializeCommonEvent(28, 9008000, 1036510109);
    InitializeCommonEvent(29, 9008000, 1036510310);
    InitializeCommonEvent(30, 9008000, 1036510110);
    InitializeCommonEvent(31, 9008000, 1036510111);
    InitializeCommonEvent(32, 9008000, 1036510112);
    InitializeCommonEvent(33, 9008000, 1036510113);
    InitializeCommonEvent(34, 9008000, 1036510114);
    InitializeCommonEvent(35, 9008000, 1036510115);
    InitializeCommonEvent(36, 9008000, 1036510116);
    InitializeCommonEvent(37, 9008000, 1036510117);
    InitializeCommonEvent(38, 9008000, 1036510118);
    InitializeCommonEvent(39, 9008000, 1036510119);
    InitializeCommonEvent(40, 9008000, 1036510120);
    InitializeCommonEvent(41, 9008000, 1036510121);
    InitializeCommonEvent(42, 9008000, 1036510122);
    InitializeCommonEvent(43, 9008000, 1036510123);
    InitializeCommonEvent(44, 9008000, 1036510124);
    
    InitializeCommonEvent(0, 90005683, 62313, 1036511300, 208, 78390, 78390);
    InitializeCommonEvent(0, 900005610, 1036511680, 100, 800, 1036518600);
    InitializeCommonEvent(0, 90005620, 1036510570, 1036511570, 1036511571, 1036511572, 1036512570, 1036512571, 1036512572);
    InitializeEvent(0, 1036512575, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1036512400, 1036510400, 1073741824, 0, 0);
    InitializeEvent(1, 1036512400, 1036510401, 1073741824, 0, 0);
    InitializeEvent(2, 1036512400, 1036510410, 1073741824, 0, 0);
    InitializeEvent(3, 1036512400, 1036510411, 1073741824, 0, 0);
    InitializeEvent(4, 1036512400, 1036510412, 1073741824, 0, 0);
    InitializeEvent(5, 1036512450, 1036510407, 1073741824, 0, 0);
    InitializeEvent(6, 1036512450, 1036510408, 1073741824, 0, 0);
    InitializeEvent(7, 1036512450, 1036510409, 1073741824, 0, 0);
    InitializeEvent(8, 1036512450, 1036510413, 1073741824, 0, 0);
    InitializeEvent(9, 1036512450, 1036510414, 1073741824, 0, 0);
    InitializeEvent(10, 1036512450, 1036510416, 1073741824, 0, 0);
    InitializeEvent(11, 1036512450, 1036510417, 1073741824, 0, 0);
    InitializeEvent(12, 1036512450, 1036510418, 1073741824, 0, 0);
    InitializeEvent(13, 1036512450, 1036510419, 1073741824, 0, 0);
    InitializeEvent(14, 1036512450, 1036510420, 1073741824, 0, 0);
    InitializeEvent(15, 1036512450, 1036510400, 1073741824, 0, 0);
    InitializeEvent(16, 1036512450, 1036510401, 1073741824, 0, 0);
    InitializeEvent(17, 1036512450, 1036510404, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005251, 1036510450, 1084227584, 0, 3001);
    InitializeCommonEvent(0, 90005250, 1036510300, 1036512300, 0, -1);
    InitializeCommonEvent(0, 90005250, 1036510300, 1036512301, 0, -1);
    InitializeEvent(0, 1036512300, 0);
    InitializeCommonEvent(0, 90005261, 1036510310, 1036512300, 1077936128, 1065353216, -1);
});

$Event(1036512300, Restart, function() {
    EndIf(ThisEventSlot());
    if (!InArea(10000, 1036512300)) {
        WaitFor(InArea(10000, 1036512301));
        ChangeCharacterPatrolBehavior(1036510300, 1036513301);
    }
L1:
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(1036512400, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChr = InArea(1036510300, 1036512400) && CharacterAIState(1036510300, AIStateType.Combat);
    areaChr2 = InArea(1036510304, 1036512400) && CharacterAIState(1036510304, AIStateType.Combat);
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp3 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp4 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp5 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    areaChrSp = EntityInRadiusOfEntity(10000, X0_4, X4_4, 1) && chrSp;
    WaitFor(
        areaChr
            || areaChr2
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X8_4);
        if (Signed(X12_4) != -1) {
            ForceAnimationPlayback(X0_4, X12_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(1036512450, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChr = EntityInRadiusOfEntity(1036510300, X0_4, 8, 1)
        && CharacterAIState(1036510300, AIStateType.Combat);
    areaChr2 = EntityInRadiusOfEntity(1036510304, X0_4, 8, 1)
        && CharacterAIState(1036510304, AIStateType.Combat);
    areaChrSp = EntityInRadiusOfEntity(10000, X0_4, X4_4, 1) && chrSp;
    WaitFor(
        areaChr
            || areaChr2
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || areaChrSp);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X8_4);
        if (Signed(X12_4) != -1) {
            ForceAnimationPlayback(X0_4, X12_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(1036512575, Restart, function() {
    DisableNetworkSync();
    if (!EventFlag(1036510570)) {
        DisableObjAct(1036511580, 110063);
        WaitFor(EventFlag(1036510570));
        EnableObjAct(1036511580, 110063);
    }
});


