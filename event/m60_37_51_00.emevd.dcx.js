// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1037510950);
    InitializeCommonEvent(1, 9008000, 1037510100);
    InitializeCommonEvent(2, 9008000, 1037510101);
    InitializeCommonEvent(3, 9008000, 1037510207);
    InitializeCommonEvent(4, 9008000, 1037510208);
    InitializeCommonEvent(5, 9008000, 1037510102);
    InitializeCommonEvent(6, 9008000, 1037510103);
    InitializeCommonEvent(7, 9008000, 1037510104);
    InitializeCommonEvent(8, 9008000, 1037510105);
    InitializeCommonEvent(9, 9008000, 1037510106);
    InitializeCommonEvent(10, 9008000, 1037510107);
    InitializeCommonEvent(11, 9008000, 1037510108);
    InitializeCommonEvent(12, 9008000, 1037510109);
    InitializeCommonEvent(13, 9008000, 1037510110);
    InitializeCommonEvent(14, 9008000, 1037510111);
    InitializeCommonEvent(15, 9008000, 1037510112);
    InitializeCommonEvent(16, 9008000, 1037510210);
    InitializeCommonEvent(17, 9008000, 1037510500);
    InitializeCommonEvent(18, 9008000, 1037510113);
    InitializeCommonEvent(19, 9008000, 1037510114);
    InitializeCommonEvent(20, 9008000, 1037510115);
    InitializeCommonEvent(21, 9008000, 1037510116);
    InitializeCommonEvent(22, 9008000, 1037510117);
    InitializeCommonEvent(23, 9008000, 1037510118);
    InitializeCommonEvent(24, 9008000, 1037510800);
    InitializeCommonEvent(25, 9008000, 1037510119);
    InitializeCommonEvent(26, 9008000, 1037510120);
    InitializeCommonEvent(27, 9008000, 1037510121);
    InitializeCommonEvent(28, 9008000, 1037510122);
    InitializeCommonEvent(29, 9008000, 1037510123);
    InitializeCommonEvent(30, 9008000, 1037510124);
    InitializeCommonEvent(31, 9008000, 1037510125);
    InitializeCommonEvent(32, 9008000, 1037510126);
    InitializeCommonEvent(33, 9008000, 1037510127);
    InitializeCommonEvent(34, 9008000, 1037510128);
    InitializeCommonEvent(35, 9008000, 1037510129);
    InitializeCommonEvent(36, 9008000, 1037510130);
    InitializeCommonEvent(37, 9008000, 1037510131);
    InitializeCommonEvent(38, 9008000, 1037510132);
    InitializeCommonEvent(39, 9008000, 1037510133);
    InitializeCommonEvent(40, 9008000, 1037510134);
    InitializeCommonEvent(41, 9008000, 1037510135);
    InitializeCommonEvent(42, 9008000, 1037510136);
    InitializeCommonEvent(43, 9008000, 1037510137);
    InitializeCommonEvent(44, 9008000, 1037510138);
    InitializeCommonEvent(45, 9008000, 1037510139);
    InitializeCommonEvent(46, 9008000, 1037510140);
    InitializeCommonEvent(47, 9008000, 1037510141);
    InitializeCommonEvent(48, 9008000, 1037510142);
    InitializeCommonEvent(49, 9008000, 1037510143);
    InitializeCommonEvent(50, 9008000, 1037510144);
    InitializeCommonEvent(51, 9008000, 1037510145);
    
    RegisterBonfire(76300, 1037511950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76314, 76300, 1037511980, 77300, 0, 78300, 78301, 78302, 78303, 78304, 78305, 78306, 78307, 78308, 78309);
    InitializeCommonEvent(0, 90005870, 1037510800, 904510600, 28);
    InitializeCommonEvent(0, 90005860, 1037510800, 0, 1037510800, 1, 30300, 0);
    InitializeEvent(0, 1037512208, 1037510208, 1037512208, 1084227584, 0, 20005);
    InitializeCommonEvent(0, 90005251, 1037510200, 1110704128, 0, 0);
    InitializeCommonEvent(0, 90005300, 1037510210, 1037510210, 40224, 0, 0);
    InitializeCommonEvent(0, 90005300, 1037510500, 1037510500, 40300, 0, 0);
    InitializeCommonEvent(0, 900005610, 1037511300, 100, 800, 39200514);
    InitializeCommonEvent(0, 900005610, 1037511301, 100, 800, 39200514);
    InitializeCommonEvent(0, 90005771, 1037510950, 1037512700);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1037512350, 1037510800);
    InitializeEvent(0, 1037512301, 1037510800);
});

$Event(1037512208, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
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
    area = InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4, 1);
    areaChrSp = area && chrSp;
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
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
    WaitFixedTimeSeconds(X12_4);
    ForceAnimationPlayback(X0_4, X16_4, true, false, false);
    EnableCharacterAI(X0_4);
});

$Event(1037512301, Restart, function(X0_4) {
    EndIf(EventFlag(1037510810));
    WaitFor(CharacterHasSpEffect(X0_4, 14887));
    SetEventFlagID(1037510810, ON);
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    EndEvent();
});

$Event(1037512350, Restart, function(X0_4) {
    if (!EventFlag(1037510810)) {
        if (!EventFlag(1037510800)) {
            if (!EventFlag(1041520820)) {
                DisableCharacter(X0_4);
                DisableCharacterCollision(X0_4);
                WaitFor(CharacterType(10000, TargetType.Alive) && InArea(10000, 1037512300));
                EnableCharacterFadeOnEnable(X0_4);
                EnableCharacter(X0_4);
                EnableCharacterCollision(X0_4);
                ForceAnimationPlayback(X0_4, 20019, false, false, false);
                EndEvent();
            }
        }
    }
L0:
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    EndEvent();
});


