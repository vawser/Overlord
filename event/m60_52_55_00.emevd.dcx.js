// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1052550351);
    InitializeCommonEvent(1, 9008000, 1052550354);
    InitializeCommonEvent(2, 9008000, 1052550355);
    InitializeCommonEvent(3, 9008000, 1052550390);
    InitializeCommonEvent(4, 9008000, 1052550100);
    InitializeCommonEvent(5, 9008000, 1052550238);
    InitializeCommonEvent(6, 9008000, 1052550247);
    InitializeCommonEvent(7, 9008000, 1052550248);
    InitializeCommonEvent(8, 9008000, 1052550249);
    InitializeCommonEvent(9, 9008000, 1052550250);
    InitializeCommonEvent(10, 9008000, 1052550101);
    InitializeCommonEvent(11, 9008000, 1052550102);
    InitializeCommonEvent(12, 9008000, 1052550103);
    InitializeCommonEvent(13, 9008000, 1052550270);
    InitializeCommonEvent(14, 9008000, 1052550280);
    InitializeCommonEvent(15, 9008000, 1052550104);
    InitializeCommonEvent(16, 9008000, 1052550282);
    InitializeCommonEvent(17, 9008000, 1052550300);
    InitializeCommonEvent(18, 9008000, 1052550201);
    InitializeCommonEvent(19, 9008000, 1052550205);
    InitializeCommonEvent(20, 9008000, 1052550206);
    InitializeCommonEvent(21, 9008000, 1052550213);
    InitializeCommonEvent(22, 9008000, 1052550214);
    InitializeCommonEvent(23, 9008000, 1052550216);
    InitializeCommonEvent(24, 9008000, 1052550217);
    InitializeCommonEvent(25, 9008000, 1052550218);
    InitializeCommonEvent(26, 9008000, 1052550219);
    InitializeCommonEvent(27, 9008000, 1052550220);
    InitializeCommonEvent(28, 9008000, 1052550221);
    InitializeCommonEvent(29, 9008000, 1052550222);
    InitializeCommonEvent(30, 9008000, 1052550223);
    InitializeCommonEvent(31, 9008000, 1052550227);
    InitializeCommonEvent(32, 9008000, 1052550228);
    
    InitializeCommonEvent(0, 90005261, 1052550390, 1052552390, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005261, 1052550354, 1052552354, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005300, 1052550390, 1052550390, 1052550700, 0, 0);
    InitializeEvent(0, 1052552270, 1052550270, 30001, 20001, 0, 1077936128, 0, 0, 0, 0, 0);
    InitializeEvent(1, 1052552270, 1052550280, 30000, 20000, 0, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1052550282, 1052552282, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005300, 1052550300, 1052550300, 40516, 0, 0);
    InitializeEvent(0, 1052552580, 0);
    InitializeCommonEvent(0, 900005610, 1052551500, 100, 800, 0);
});

$Event(1052552270, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X24_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    if (0 != X12_4) {
        areaHp |= InArea(10000, X12_4);
    }
    areaHp |= EntityInRadiusOfEntity(10000, X0_4, X16_4, 1) || HPRatio(1052550390) <= 0.55;
    areaHpChrSp &= areaHp
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X28_4 == 0 && X32_4 == 0 && X36_4 == 0)) {
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X32_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X36_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.PassiveAlert);
        }
        areaHpChrSp &= chr;
    }
L9:
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
    areaHpChrSp &= chrSp;
    WaitFor(
        areaHpChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        WaitFixedTimeSeconds(X20_4);
        if (X24_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X24_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(1052552580, Default, function() {
    RegisterLadder(1052550580, 1052550851, 1052551580);
    RegisterLadder(1052550582, 1052550853, 1052551582);
});


