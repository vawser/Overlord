// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd        
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1036520950);
    InitializeCommonEvent(1, 9008000, 1036520100);
    InitializeCommonEvent(2, 9008000, 1036520210);
    InitializeCommonEvent(3, 9008000, 1036520101);
    InitializeCommonEvent(4, 9008000, 1036520209);
    InitializeCommonEvent(5, 9008000, 1036520220);
    InitializeCommonEvent(6, 9008000, 1036520221);
    InitializeCommonEvent(7, 9008000, 1036520222);
    InitializeCommonEvent(8, 9008000, 1036520206);
    InitializeCommonEvent(9, 9008000, 1036520207);
    InitializeCommonEvent(10, 9008000, 1036520200);
    InitializeCommonEvent(11, 9008000, 1036520201);
    InitializeCommonEvent(12, 9008000, 1036520211);
    InitializeCommonEvent(13, 9008000, 1036520102);
    InitializeCommonEvent(14, 9008000, 1036520103);
    InitializeCommonEvent(15, 9008000, 1036520104);
    InitializeCommonEvent(16, 9008000, 1036520105);
    InitializeCommonEvent(17, 9008000, 1036520400);
    InitializeCommonEvent(18, 9008000, 1036520300);
    InitializeCommonEvent(19, 9008000, 1036520106);
    InitializeCommonEvent(20, 9008000, 1036520107);
    InitializeCommonEvent(21, 9008000, 1036520108);
    InitializeCommonEvent(22, 9008000, 1036520109);
    InitializeCommonEvent(23, 9008000, 1036520110);
    InitializeCommonEvent(24, 9008000, 1036520111);
    InitializeCommonEvent(25, 9008000, 1036520112);
    InitializeCommonEvent(26, 9008000, 1036520113);
    InitializeCommonEvent(27, 9008000, 1036520114);
    InitializeCommonEvent(28, 9008000, 1036520115);
    InitializeCommonEvent(29, 9008000, 1036520116);
    InitializeCommonEvent(30, 9008000, 1036520117);
    InitializeCommonEvent(31, 9008000, 1036520118);
    InitializeCommonEvent(32, 9008000, 1036520119);
    InitializeCommonEvent(33, 9008000, 1036520120);
    InitializeCommonEvent(34, 9008000, 1036520121);
    InitializeCommonEvent(35, 9008000, 1036520122);
    InitializeCommonEvent(36, 9008000, 1036520123);
    InitializeCommonEvent(37, 9008000, 1036520124);
    InitializeCommonEvent(38, 9008000, 1036520125);
    InitializeCommonEvent(39, 9008000, 1036520126);
    InitializeCommonEvent(40, 9008000, 1036520127);
    InitializeCommonEvent(41, 9008000, 1036520128);
    InitializeCommonEvent(42, 9008000, 1036520129);
    InitializeCommonEvent(43, 9008000, 1036520130);
    InitializeCommonEvent(44, 9008000, 1036520131);
    InitializeCommonEvent(45, 9008000, 1036520132);
    
    InitializeCommonEvent(0, 90005600, 76356, 1036521950, 0, 0);
    InitializeCommonEvent(0, 90005271, 1036520400, 0, -1);
    InitializeEvent(0, 1036522200, 1036520200);
    InitializeEvent(1, 1036522200, 1036520201);
    InitializeEvent(2, 1036522200, 1036520206);
    InitializeEvent(3, 1036522200, 1036520207);
    InitializeEvent(0, 1036522205, 1036520210, 1036522210, 0, 3021);
    InitializeEvent(1, 1036522205, 1036520209, 1036522210, 1050253722, 3021);
    InitializeCommonEvent(0, 90005261, 1036520220, 1036522220, 1084227584, 0, -1);
    InitializeCommonEvent(1, 90005261, 1036520221, 1036522220, 1084227584, 0, -1);
    InitializeCommonEvent(2, 90005261, 1036520222, 1036522220, 1084227584, 0, -1);
    InitializeCommonEvent(1, 90005261, 1036520205, 1036522300, 1086324736, 1053609165, -1);
    InitializeCommonEvent(2, 90005261, 1036520206, 1036522300, 1086324736, 0, -1);
    InitializeCommonEvent(2, 90005261, 1036520207, 1036522300, 1086324736, 1045220557, -1);
    InitializeEvent(0, 1036522215, 1036520300, 1036522300, 1092616192, 1056964608, 20003);
    InitializeCommonEvent(0, 90005261, 1036520250, 1036522250, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005211, 1036520250, 30000, 20000, 1036522250, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1036520251, 1036522251, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005211, 1036520251, 30000, 20000, 1036522250, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1036520252, 1036522252, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005211, 1036520252, 30000, 20000, 1036522250, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005560, 1036520205, 1036521200, 0);
});

$Event(1036522200, Restart, function(X0_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    ForceAnimationPlayback(X0_4, 3015, false, false, true);
    EndEvent();
});

$Event(1036522205, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
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
    areaChrSp = InArea(10000, X4_4) && chrSp;
    WaitFor(
        areaChrSp
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
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X8_4);
        if (Signed(X12_4) != -1) {
            ForceAnimationPlayback(X0_4, X12_4, true, true, false);
        }
        WaitFixedTimeSeconds(2);
        ForceAnimationPlayback(X0_4, X12_4, true, true, false);
        WaitFixedTimeSeconds(2);
        ForceAnimationPlayback(X0_4, X12_4, true, true, false);
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(1036522210, Restart, function(X0_4) {
    SetSpEffect(X0_4, 8092);
});

$Event(1036522215, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4, 1);
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
    areaChrSp = area && chrSp;
    WaitFor(
        areaChrSp
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
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X12_4);
        SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
        ForceAnimationPlayback(X0_4, X16_4, true, false, false);
    }
L1:
    WaitFixedTimeSeconds(5);
    EnableCharacterAI(X0_4);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.NoUpdate);
});


